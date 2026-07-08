import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Tourism-Management-Website/',

  root: '.',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        places: resolve(__dirname, 'places.html'),
        placeDetails: resolve(__dirname, 'place-details.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        booking: resolve(__dirname, 'booking.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },

    outDir: 'dist',
  },

  publicDir: 'public',
})