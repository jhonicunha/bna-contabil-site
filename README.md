# Soflinc UI Kit - Landing Page

Welcome to the **Soflinc UI Kit**, a premium, production-ready landing page template built on top of React 19, Next.js, and Material UI v7. 

This project is owned by **soflinc e-solutions** and developed by **Jhoni Cunha**. It features clean code, responsive layout components, and a modular architecture optimized for building modern software-as-a-service (SaaS) and corporate landing pages.

## Technologies Used

- **React 19**
- **Next.js 16+** (App Router)
- **Material UI v7** (Material 3 Guidelines)
- **Framer Motion** & **Motion** (For smooth micro-animations)
- **CSS3 / Vanilla styles** for core adjustments

## Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and npm/yarn installed.

### Installation

1. Install project dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Configure environment variables. Duplicate the `.env.example` file and rename it to `.env`, then fill out your custom configuration:
   ```bash
   cp .env.example .env
   ```

3. Start the local development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Directory Structure

- `src/app/` - Next.js App Router page routes and layouts.
- `src/blocks/` - Reusable UI blocks and section components (heros, features, testimonial sliders, clientele, etc.).
- `src/components/` - Common UI elements and wrappers.
- `src/views/` - Page wrappers and section showcases.
- `src/utils/` - Utility functions, theme configs, constant files, and styling helper code.
- `public/` - Public assets, SVG icons, images, and videos.

## Project Maintenance

- Run linting:
  ```bash
  npm run lint
  ```
- Run formatting:
  ```bash
  npm run prettier
  ```
- Compile production build:
  ```bash
  npm run build
  ```

## License

This software is a private proprietary asset of **soflinc e-solutions**. All rights reserved.
