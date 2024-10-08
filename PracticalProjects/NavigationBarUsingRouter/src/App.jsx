import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Router/Layout';
import Home from './Router/Home';
import Contact from './Router/Contact';
import Service from './Router/Service';
import NoPage from './Router/NoPage';

function App() {
  return (
    <>
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
