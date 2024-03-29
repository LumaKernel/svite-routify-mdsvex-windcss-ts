const svelte = require('@sveltejs/vite-plugin-svelte')
const {defineConfig} = require('vite')
const vitePluginWindicss = require('vite-plugin-windicss').default

module.exports = defineConfig(({command, mode}) => {
  const isProduction = mode === 'production'
  return {
    optimizeDeps: {
      exclude: ['@roxi/routify']
    },
    plugins: [
      // uses enforce: pre
      svelte(),
      vitePluginWindicss({
        transformCSS: 'pre'
      })
    ],
    build: {
      minify: isProduction
    }
  }
})
