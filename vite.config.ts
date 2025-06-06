import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'resources/js/app.tsx'),
            name: 'JemiyetWeb',
            fileName: 'jemiyet-web',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        }
    }
}); 