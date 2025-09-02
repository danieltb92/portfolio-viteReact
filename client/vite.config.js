import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 4000
  // },
  // envDir: '../', // Para buscar archivos .env en el directorio raíz
  // // Las variables de entorno se cargarán automáticamente según el modo
})


// export default defineConfig(({ mode }) => {
//   return {
//     plugins: [react()],
//     server: {
//       port: 3000
//     },
//     define: {
//       'process.env.NODE_ENV': JSON.stringify(mode)
//     }
//   }
// })