import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home/Home";
import About from "./components/Home/main/About";
import Contact from "./components/Home/main/Contact";
import Portfolio from "./components/Home/main/Portfolio";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}></Route>
        <Route path="home" exact element={<Home />}>
          <Route path="about" exact element={<About />} />
          <Route path="portfolio" exact element={<Portfolio />} />
          <Route path="contact" exact element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
