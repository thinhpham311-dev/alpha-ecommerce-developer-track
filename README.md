# 📦 Project Setup & Run (Tailwind CSS)

This README explains **how to install, build Tailwind CSS, and run the project** from scratch until it works locally.

---

## 🧰 Requirements

* Node.js >= 18
* npm or yarn / pnpm
* Git (recommended)

Check versions:

```bash
node -v
npm -v
```

---

## 📥 Project Installation

Clone the repository:

```bash
git clone <repo-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

---

## 🎨 Tailwind CSS Setup

### 1️⃣ Install Tailwind & PostCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### 2️⃣ Configure `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 3️⃣ Add Tailwind to CSS

Create `src/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ⚙️ Build Tailwind CSS

### One-time build:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
```

### Watch mode (development):

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

---

## ▶️ Run the Project

### Plain HTML / CSS / JS

Open `index.html` directly or use a local server:

```bash
npx serve .
```

---

Visit: [http://localhost:3000](http://localhost:3000)
Demo: https://alpha-ecommerce-developer-track-tes.vercel.app
---

## 📂 Example Folder Structure

```
project-root/
├─ styles/
│  ├─ input.css
│  js/
├─ dist/
│  └─ output-main.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json
```

---

## 🧪 Recommended npm Scripts

```json
{
  "scripts": {
    "dev": "tailwindcss -i ./src/main.css -o ./dist/output-main.css --watch",
    "build": "tailwindcss -i ./src/main.css -o ./dist/output-main.css --minify"
  }
}
```

Run:

```bash
npm run dev
```

---

## 🚀 Deployment (Optional)

* **Vercel** – HTML / CSS

---

## ✅ Notes

* Always double-check the `content` paths in `tailwind.config.js`
* If Tailwind classes are not applied, restart the watch process

---

✍️ Author: Thịnh Phạm
