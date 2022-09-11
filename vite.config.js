import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import aframe from "aframe";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        aframe,
    ],
});
