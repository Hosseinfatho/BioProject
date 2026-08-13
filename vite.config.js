import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

function sendFile(req, res, fullPath, contentType) {
  const stat = fs.statSync(fullPath)
  const total = stat.size
  res.setHeader('Accept-Ranges', 'bytes')
  res.setHeader('Cache-Control', 'public, max-age=3600')
  if (contentType) res.setHeader('Content-Type', contentType)

  const range = req.headers.range
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range)
    if (!match) {
      res.statusCode = 416
      res.end()
      return
    }
    const start = match[1] ? parseInt(match[1], 10) : 0
    const end = match[2] ? parseInt(match[2], 10) : total - 1
    if (start >= total || end >= total || start > end) {
      res.statusCode = 416
      res.setHeader('Content-Range', `bytes */${total}`)
      res.end()
      return
    }
    res.statusCode = 206
    res.setHeader('Content-Range', `bytes ${start}-${end}/${total}`)
    res.setHeader('Content-Length', String(end - start + 1))
    fs.createReadStream(fullPath, { start, end }).pipe(res)
    return
  }

  res.statusCode = 200
  res.setHeader('Content-Length', String(total))
  fs.createReadStream(fullPath).pipe(res)
}

// Serve local data folders used by the viewer (incl. multi-GB Very High .raw).
const serveOutputPlugin = {
  name: 'serve-output',
  configureServer(server) {
    // Long downloads (Very High ~2.9GB) need more than default keep-alive.
    server.httpServer?.on('listening', () => {
      server.httpServer.keepAliveTimeout = 120000
      server.httpServer.headersTimeout = 130000
      server.httpServer.requestTimeout = 0
    })

    server.middlewares.use((req, res, next) => {
      const visualizationMatch = req.url.match(/(?:\/BioProject)?\/(visualization_data_very_high|visualization_data_low|visualization_data)\/(.+)$/)
      if (visualizationMatch) {
        const dirName = visualizationMatch[1]
        const subPath = visualizationMatch[2].split('?')[0]
        const fullPath = path.join(process.cwd(), dirName, subPath)
        if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
          const type = subPath.endsWith('.json')
            ? 'application/json'
            : subPath.endsWith('.raw')
              ? 'application/octet-stream'
              : undefined
          sendFile(req, res, fullPath, type)
          return
        }
      }
      const outputMatch = req.url.match(/(?:\/BioProject)?\/VIS2026\/output\/(.+)$/)
      if (outputMatch) {
        const subPath = outputMatch[1].split('?')[0]
        const fullPath = path.join(process.cwd(), 'VIS2026', 'output', subPath)
        if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
          sendFile(req, res, fullPath, 'application/json')
          return
        }
      }
      const hiResMatch = req.url.match(/(?:\/BioProject)?\/VIS2026\/Hi_res\/HI_res_channel\/(.+)$/)
      if (hiResMatch) {
        const subPath = hiResMatch[1].split('?')[0]
        const fullPath = path.join(process.cwd(), 'VIS2026', 'Hi_res', 'HI_res_channel', subPath)
        if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
          const type = subPath.endsWith('.json')
            ? 'application/json'
            : subPath.endsWith('.raw')
              ? 'application/octet-stream'
              : undefined
          sendFile(req, res, fullPath, type)
          return
        }
      }
      next()
    })
  }
}

export default defineConfig({
  plugins: [react(), serveOutputPlugin],
  // Local/GitHub Pages: /BioProject/ ; Docker on arcade: /congat/
  base: process.env.VITE_BASE_PATH || '/BioProject/',
  server: {
    port: 3000,
    watch: {
      // Exclude large folders - significantly speeds up startup and HMR
      ignored: [
        '**/Data/**',
        '**/downloadData/**',
        '**/visualization_data/**',
        '**/visualization_data_low/**',
        '**/visualization_data_very_high/**',
        '**/VIS2026/**',
        '**/node_modules/**'
      ]
    },
    fs: {
      // Allow serving files from Data directory if needed
      strict: false
    }
  },
  optimizeDeps: {
    include: ['three', '@kitware/vtk.js']
  },
  build: {
    // VTK.js is large; raise warning threshold
    chunkSizeWarningLimit: 5000
  }
})
