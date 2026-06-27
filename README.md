# Goli Soda Brand Website (Goli SodaSite)

The dedicated, public-facing brand website for the Goli Soda product line, custom-built for **Uday Food & Beverages** (Food Industry, Hyderabad). This platform is engineered to share the brand's unique story, capture consumer nostalgia, showcase the diverse product catalog, and streamline distributor and retailer inquiries.

---

## 🚀 Project Overview

The Goli Soda Brand Website combines a vibrant, nostalgic aesthetic with modern web performance. It acts as the primary digital touchpoint for both B2C consumers exploring flavors and B2B partners looking to establish distribution channels in and around Hyderabad.

### Key Performance Targets

- **Mobile-First Design:** Fully responsive layout optimized for all screen sizes.
- **Speed:** Engineered to consistently achieve a page load time of under 3 seconds.
- **Accessibility:** Built using accessible UI components to ensure an inclusive user experience.

---

## ✨ Features & Scope

- **Home Page:** Features a bold brand identity, nostalgic tagline, and high-impact hero product imagery. Prominently displays clear Calls to Action (CTAs) for product exploration and B2B inquiries.
- **Product Catalogue:** A dynamic display of all product variants and flavors. Each entry includes detailed serving sizes, ingredient highlights, images, and available retail/wholesale pack sizes.
- **About Page:** Chronicles the brand's origin story, traditional production values, strict quality control standards, and expanding regional distribution footprint.
- **Contact & Distributor Inquiry:** A dedicated lead-generation system featuring a robust inquiry form that captures company names, locations, intent (retail/wholesale), and custom logistics messages.

---

## 🛠️ Tech Stack & Architecture

The application leverages a modern, type-safe, and lightning-fast frontend ecosystem:

- **Frontend Framework:** [React.js](https://react.dev)
- **Build Tool:** [Vite](https://vitejs.dev) (`vite.config.ts`) for ultra-fast Hot Module Replacement (HMR).
- **Package Manager:** [Bun](https://bun.sh) (`bun.lock`) for high-performance dependency installation and execution.
- **Routing:** Fully type-safe, file-based routing powered by [TanStack Router](https://tanstack.com) (`src/routeTree.gen.ts`, `src/router.tsx`).
- **UI Components:** A highly accessible, custom suite of primitives located in `src/components/ui/` (including Accordions, Alert Dialogs, Buttons, Carousels, Forms, Navigation Menus, and Sheets).

---

---

## 💻 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have [npm] or [Bun] installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com
   cd goli-soda-site
   ```

2. Install dependencies using npm or Bun:
   ```bash
   npm install
   ```
   ```bash
   bun install
   ```

### Development Server

Start the local development server with Vite:

```bash
npm run dev
```

```bash
bun run dev
```

The compiled output will be generated inside the `dist/` directory, ready to be served by any modern static hosting provider (e.g., Vercel, Netlify, AWS S3).
