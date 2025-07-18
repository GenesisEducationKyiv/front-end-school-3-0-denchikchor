## 🎵 Music App

A modern, responsive web application for managing and playing your music collection. Built with React, TypeScript, Vite, and Vitest.

---

## 🚀 Features

-   **Track Management**: Create, edit, delete tracks with metadata.
-   **File Uploads**: Upload/remove MP3/WAV with validation.
-   **Audio Player**: Play, pause, seek, waveform visualization.
-   **Filtering & Sorting**: By artist, genre, title.
-   **Pagination**: Navigate pages; reset to first page on search/filter change.
-   **Bulk Actions**: Select multiple tracks for deletion.
-   **Responsive & Accessible**: Works on mobile/desktop; ARIA, keyboard support.
-   **Testing**: Vitest + Testing Library for unit/integration tests.

---

## 🔧 Setup & Optimization

-   **Environment Variables**
    Create a `.env` in project root (ignored by Git). Prefix all keys with `VITE_`, e.g.:

    ```dotenv
    VITE_API_URL=https://api.example.com/graphql
    ```

-   **Bundle Analysis**
    Install `rollup-plugin-visualizer` and add to `vite.config.ts`:

    ```ts
    import { visualizer } from 'rollup-plugin-visualizer';
    // in plugins: visualizer({ filename: './dist/stats.html', open: true, gzipSize: true });
    ```

-   **Code Splitting & Lazy Loading**
    Use `React.lazy` + `Suspense` for heavy components:

    ```tsx
    const Modal = React.lazy(() => import('./Modal'));
    <Suspense fallback={<Preloader />}>
        <Modal />
    </Suspense>;
    ```

-   **Source Maps**
    Enable in `vite.config.ts`:

    ```ts
    build: {
        sourcemap: true;
    }
    ```

---

## Getting started

**Prerequisites:**

-   Node.js (v18+ recommended)

### Client app

**Install & run:**

```bash
git clone https://github.com/GenesisEducationKyiv/front-end-school-3-0-denchikchor
cd /client
npm install
npm start
```

open http://localhost:3000 in your browser;

### Server

**install & run:**

```bash
cd server
npm install
npm run dev
```

**api documentation:** http://localhost:8000/documentation

---
