import Globals from "./Styles/Globals";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./Styles/Themes";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/FloatingNavbar/Demo";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Gallery2 from "./components/Gallery2";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <ThemeProvider theme={Light}>
        <Globals />
          <Navbar />
          {/* Main content */}
          <main className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/gallery" element={<Gallery2 />} /> */}
            </Routes>
            
          </main>
      </ThemeProvider>
    </>
  );
}

export default App;
