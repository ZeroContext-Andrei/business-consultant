<!-- README updated to remove legacy references and provide clear, professional documentation -->

# Consult Compass 🧭

Consult Compass is a modern, responsive marketing website for a business-consulting agency. It showcases services, expertise, testimonials and an easy-to-use contact form, providing potential clients with a clear path to engage your company.

## Table of Contents

1. Overview
2. Features
3. Tech Stack
4. Getting Started
5. Available Scripts
6. Building for Production
7. Deployment
8. Project Structure
9. Contributing
10. License

---

## 1. Overview

This repository contains the source code for the Consult Compass landing page. The project is built with **React 18**, **TypeScript**, and **Tailwind CSS**, bundled with **Vite 5** for an extremely fast development experience and optimized production builds.

## 2. Features

- Eye-catching hero section with a strong call-to-action
- Service highlights and value propositions
- Client testimonials carousel
- Lead-capture / contact form
- Fully responsive design
- Dark-mode ready components (via shadcn/ui)

## 3. Tech Stack

• React 18 & React-DOM 18  
• TypeScript 5  
• Vite 5  
• Tailwind CSS 3 (with `tailwindcss-animate` & `clsx`)  
• shadcn/ui component library  
• React Router 6 (client-side routing)  
• ESLint & Prettier configuration included

## 4. Getting Started

Prerequisites: **Node.js ≥ 18** and **npm ≥ 9** (or pnpm / yarn).

```bash
# 1. Clone the repository
git clone https://github.com/<your-org>/consult-compass.git

# 2. Change into the project directory
cd consult-compass

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# The app will be available at http://localhost:5173 (default Vite port)
```

## 5. Available Scripts

| Command           | Description                               |
|-------------------|-------------------------------------------|
| `npm run dev`     | Start a hot-reloading dev server          |
| `npm run build`   | Create an optimized production build      |
| `npm run preview` | Preview the production build locally      |
| `npm run lint`    | Lint source files with ESLint             |

## 6. Building for Production

Running `npm run build` generates a fully static site in the **`dist/`** directory. The output is minified, tree-shaken and ready to be served from any static hosting provider.

## 7. Deployment

Because the site is completely static, you can deploy **`dist/`** using platforms such as:

• Vercel  
• Netlify  
• GitHub Pages  
• Cloudflare Pages  
• An S3 bucket behind a CDN or any traditional web server

## 8. Project Structure

```text
consult-compass/
├─ public/           # Static assets copied as-is
├─ src/
│  ├─ components/    # Reusable presentational + UI components
│  ├─ hooks/         # Custom React hooks
│  ├─ lib/           # Utility functions & API clients
│  ├─ pages/         # Top-level route components
│  ├─ App.tsx        # Root component
│  └─ main.tsx       # Entry point
├─ index.html        # HTML template used by Vite
├─ tailwind.config.ts
└─ vite.config.ts
```

## 9. Contributing

Pull requests are welcome! Feel free to open a discussion or issue if you have ideas for improvement. When contributing, please follow the existing code style and conventions.

## 10. License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
