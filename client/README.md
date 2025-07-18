## 🎵 Music App

A modern, responsive web application for managing and playing your music collection. Built with React, TypeScript, Vite, and Vitest.

---

## 🚀 Features

- **Track Management**: Create, edit, delete tracks with metadata.
- **File Uploads**: Upload/remove MP3/WAV with validation.
- **Audio Player**: Play, pause, seek, waveform visualization.
- **Filtering & Sorting**: By artist, genre, title.
- **Pagination**: Navigate pages; reset to first page on search/filter change.
- **Bulk Actions**: Select multiple tracks for deletion.
- **Responsive & Accessible**: Works on mobile/desktop; ARIA, keyboard support.
- **Testing**: Vitest + Testing Library for unit/integration tests.

---

## 🔧 Setup & Optimization

- **Bundle Analysis**
  Install `rollup-plugin-visualizer` and add to `vite.config.ts`:

    ```ts
    import { visualizer } from 'rollup-plugin-visualizer';
    // in plugins: visualizer({ filename: './dist/stats.html', open: true, gzipSize: true });
    ```

- **Code Splitting & Lazy Loading**
  Use `React.lazy` + `Suspense` for heavy components:

    ```tsx
    const Modal = React.lazy(() => import('./Modal'));
    <Suspense fallback={<Preloader />}>
        <Modal />
    </Suspense>;
    ```

- **Source Maps**
  Enable in `vite.config.ts`:

    ```ts
    build: {
        sourcemap: true;
    }
    ```

---

## 🧩 Scripts

```bash
npm start    # dev server
npm run build  # production bundle
npm run preview  # preview build
npm run test   # run tests
npm run format # format code
```

---

## 🤝 Contributing

1. Fork and clone the repo
2. Create a feature branch
3. Install dependencies and develop
4. Run tests and ensure they pass
5. Submit a pull request

Enjoy using Music App!
