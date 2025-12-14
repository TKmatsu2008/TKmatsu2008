// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// リポジトリ名を取得するか、ハードコードで設定します。
// 例: https://username.github.io/my-app/ の場合、ベースパスは '/my-app/'
const repoName = 'TKmatsu2008'; // 例: 'my-app'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, 
})