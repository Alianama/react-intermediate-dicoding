import React, { useState, useMemo } from "react";
import Header from "./components/header";
import NotesList from "./pages/NotesListActive";
import NotesListArchive from "./pages/NotesListArchive";
import NotesDetail from "./pages/NotesDetail";
import Add from "./pages/AddNotes";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import LocaleContext from "./components/context/LocaleCotext";

function App() {
  const [locale, setLocale] = useState("id");
  const [theme, setTheme] = useState("white");
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const toggleTheme = () => {
    setTheme((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const contextValue = useMemo(() => {
    return { locale, toggleLocale, theme, toggleTheme };
  });

  return (
    <LocaleContext.Provider value={contextValue}>
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
    </LocaleContext.Provider>
  );
}

export default App;
