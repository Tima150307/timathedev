import { defineConfig } from "vite";
import { resolve } from "path";

// ESM-sicherer Ersatz für __dirname
import { fileURLToPath } from 'url';
const __dirname = resolve(fileURLToPath(import.meta.url), '..');

export default defineConfig({
    build: {
        outDir: "docs",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                projects: resolve(__dirname, "projects.html"),
                arcade: resolve(__dirname, "arcade.html"),
                contact: resolve(__dirname, "contact.html"),
            },
        },
    },

    // KEINE PLUGINS MEHR. FERTIG.
    plugins: [],
});