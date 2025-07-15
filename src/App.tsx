import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { Header, Preloader } from "./components";
import {
  selectCreateModalOpen,
  selectEditTrackId,
} from "./features/ui/modalSlice";
import TrackList from "./components/TrackList/TrackList";

const TrackCreateModal = lazy(() =>
  import("./components/TrackCreateModal/TrackCreateModal")
);
const TrackEditModal = lazy(() =>
  import("./components/TrackEditModal/TrackEditModal")
);

function App() {
  const isCreateModalOpen = useSelector(selectCreateModalOpen);
  const isEditModalOpen = useSelector(selectEditTrackId);

  return (
    <>
      <Header />

      <main className="content">
        <TrackList />
      </main>

      {isCreateModalOpen && (
        <Suspense fallback={<Preloader />}>
          <TrackCreateModal />
        </Suspense>
      )}

      {isEditModalOpen && (
        <Suspense fallback={<Preloader />}>
          <TrackEditModal />
        </Suspense>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;