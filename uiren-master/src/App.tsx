import { useState } from "react";
import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ru } from "./components/pages/ru/Ru";
import { Kz } from "./components/pages/kz/Kz";
import { En } from "./components/pages/en/En";

function App() {
  const [language, setLanguage] = useState("ru");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ru />} />
        <Route path="/ru" element={<Ru />} />
        <Route path="/kz" element={<Kz />}/>
        <Route path="/en" element={<En />}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
