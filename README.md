# React Playgrounds

## How the project setted up

### Vite + React + TS

`npm create vite@latest`

### React Router

`npm i react-router-dom`

### Tailwind CSS

https://tailwindcss.com/docs/guides/vite

``` bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

``` js
// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

``` css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
