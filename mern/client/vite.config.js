import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  //New addition to try to address different port for backend/frontend
  server: {
    proxy: {
      // Forward API calls from the Vite dev server to your backend
      "/login": "http://localhost:5050",
      "/record": "http://localhost:5050",
    },
  },
});
