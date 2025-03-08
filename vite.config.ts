import deno from '@deno/vite-plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    deno(),
    // @ts-expect-error i dont know whats really happen
    tailwindcss(),
    sveltekit(),
  ],
});
