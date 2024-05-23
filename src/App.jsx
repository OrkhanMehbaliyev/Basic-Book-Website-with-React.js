import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./components/BookDetails";
import BooksContainer from "./components/BooksContainer";
import "./assets/style/side-bar.css";
import Contact from "./pages/Contact";
import Authors from "./pages/Authors";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />}>
          <Route index={true} element={<BooksContainer />} />
          <Route path=":id" element={<BookDetails />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="authors" element={<Authors />} />
      </Route>
    </Routes>
  );
}

export default App;
