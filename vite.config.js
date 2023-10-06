import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from "path"; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
   AutoImport({
      resolvers: [ElementPlusResolver(),],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: { // 这里配置需要注意：Vite新版本resolve配置改为对象形式，如下：
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, "src"),
      },
      {
        find: 'comps',
        replacement: resolve(__dirname, "src/components"),
      },
    ]
  }
})
