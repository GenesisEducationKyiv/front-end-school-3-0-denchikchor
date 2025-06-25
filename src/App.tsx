import React, { useState } from "react";

import TrackCreateModal from "./components/TrackCreateModal/TrackCreateModal";
import TrackList from "./components/TrackList/TrackList";
import TrackEditModal from "./components/TrackEditModal/TrackEditModal";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";


function App() {

  return (
    <>
      <Header />
      <main className="content">
        <TrackList />
      </main>
        <TrackCreateModal />
        <TrackEditModal />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
