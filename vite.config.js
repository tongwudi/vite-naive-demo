import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 定义路径别名
        alias: {
            '@': path.join(__dirname, './src'),
        },
        // 导入时想要省略的扩展名列表
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
        // open: true,
        // port: 8080
    }
})
