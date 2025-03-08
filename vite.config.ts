import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // @ts-expect-error i dont know whats really happen
    tailwindcss(),
    sveltekit(),
  ],
});
