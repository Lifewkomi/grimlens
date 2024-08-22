import Globals from './Styles/Globals';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from './Styles/Themes';
import Lenis from 'lenis';
import { useEffect, useState} from 'react';


import Home from "./components/Home";
import Navbar from "./components/FloatingNavbar/Demo";
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
        <main className='App'>
          <Navbar />
          <Home />
        </main>
    </ThemeProvider>
    </>
  );
}

export default App;
