import React from "react";
import Header from "./components/header";
import NotesList from "./pages/NotesListActive";
import NotesListArchive from "./pages/NotesListArchive";
import NotesDetail from "./pages/NotesDetail";
import Add from "./pages/AddNotes";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/archive" element={<NotesListArchive />} />
          <Route path="/detail/:id" element={<NotesDetail />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      </main>
    </div>
  );
}

export default App;
