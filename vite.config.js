import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Serve VIS2026/output for ROI positions JSON and VIS2026/Hi_res/HI_res_channel for high-res .raw + .json
const serveOutputPlugin = {
  name: 'serve-output',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const outputMatch = req.url.match(/(?:\/BioProject)?\/VIS2026\/output\/(.+)$/)
      if (outputMatch) {
        const subPath = outputMatch[1].split('?')[0]
        const fullPath = path.join(process.cwd(), 'VIS2026', 'output', subPath)
        if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
          res.setHeader('Content-Type', 'application/json')
          fs.createReadStream(fullPath).pipe(res)
          return
        }
      }
      const hiResMatch = req.url.match(/(?:\/BioProject)?\/VIS2026\/Hi_res\/HI_res_channel\/(.+)$/)
      if (hiResMatch) {
        const subPath = hiResMatch[1].split('?')[0]
        const fullPath = path.join(process.cwd(), 'VIS2026', 'Hi_res', 'HI_res_channel', subPath)
        if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
          if (subPath.endsWith('.json')) res.setHeader('Content-Type', 'application/json')
          else if (subPath.endsWith('.raw')) res.setHeader('Content-Type', 'application/octet-stream')
          fs.createReadStream(fullPath).pipe(res)
          return
        }
      }
      next()
    })
  }
}

export default defineConfig({
  plugins: [react(), serveOutputPlugin],
  base: '/BioProject/',
  server: {
    port: 3000,
    watch: {
      // Exclude large folders - significantly speeds up startup and HMR
      ignored: [
        '**/Data/**',
        '**/downloadData/**',
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
    include: ['three']
  },
  build: {
    // Improve build performance
    chunkSizeWarningLimit: 1000
  }
})
