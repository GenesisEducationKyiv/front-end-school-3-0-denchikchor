import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Preloader from "./components/Preloader/Preloader";
import {
  selectCreateModalOpen,
  selectEditTrackId,
} from "./features/ui/modalSlice";
import TrackList from "./components/TrackList/TrackList";

// Lazy-імпорти
const TrackCreateModal = lazy(() =>
  import("./components/TrackCreateModal/TrackCreateModal")
);
const TrackEditModal = lazy(() =>
  import("./components/TrackEditModal/TrackEditModal")
);

function App() {
  const isCreateOpen = useSelector(selectCreateModalOpen);
  const isEditOpen = useSelector(selectEditTrackId);

  return (
    <>
      <Header />

      <main className="content">
        <TrackList />
      </main>

      {isCreateOpen && (
        <Suspense fallback={<Preloader />}>
          <TrackCreateModal />
        </Suspense>
      )}

      {isEditOpen && (
        <Suspense fallback={<Preloader />}>
          <TrackEditModal />
        </Suspense>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
