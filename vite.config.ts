import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync } from 'node:fs'
import { extname, join, relative, sep } from 'node:path'

const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp'])

const collectPublicImages = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = join(directory, entry.name)

    if (entry.isDirectory()) return collectPublicImages(absolutePath)
    if (!imageExtensions.has(extname(entry.name).toLowerCase())) return []

    return [`/${relative('public', absolutePath).split(sep).join('/')}`]
  })

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __SITE_IMAGE_MANIFEST__: JSON.stringify(collectPublicImages('public')),
  },
})
