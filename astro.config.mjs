// @ts-check
import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify'

import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    trailingSlash: 'always',
    adapter: netlify(),

    devToolbar: {
        enabled: true
    },

    integrations: [react()],

    vite: {
        plugins: [tailwindcss()]
    }
})
