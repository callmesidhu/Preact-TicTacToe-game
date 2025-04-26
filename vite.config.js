// vite.config.js
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  base: '/Preact-TicTacToe-game/',  
  build: {
    outDir: 'docs'
  },
  plugins: [ preact() ]
});
