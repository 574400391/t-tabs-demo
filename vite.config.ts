import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      exclude: ['**/components/**.vue'],
      routeBlockLang: 'yaml',
    }),
    vue(),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        { 'vue-router/auto': ['useLink'] },
        '@vueuse/core',
      ],
      dts: true,
      resolvers: [
        TDesignResolver({
          library: 'mobile-vue',
        }),
      ],
    }),
    Components({
      dts: true,
      resolvers: [
        TDesignResolver({
          library: 'mobile-vue',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
