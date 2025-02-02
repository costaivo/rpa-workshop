import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        rpa: 'rpa.html',
        completed_solutions:'completed_solutions.html',
        code_snippets:'code_snippets.html',
        pre_requisites:'pre_requisites.html',
      }
    }
  },
  base: '/rpa-workshop/', // Replace 'your-repo-name' with your actual repository name
});