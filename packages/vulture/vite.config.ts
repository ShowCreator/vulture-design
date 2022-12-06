/*
 * @Author: sfy
 * @Date: 2022-12-06 00:02:01
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-06 22:26:09
 * @FilePath: /vulture-design/packages/vulture/vite.config.ts
 * @Description: update here
 */
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    sourcemap: true,
    lib: {
      entry: './main.ts',
      name: 'index',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
  },
})
