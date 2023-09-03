import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar, Contact, Works  } from "./components";
import { ReactComponent as Hexagon } from "./assets/hexagon.svg";
// import Contact from "./components/Contact";
function App() {
  const numHexagonSVGs = 30;
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="video-background">
          {/* hexagon */}
          <div className="w-full h-full object-cover z-0 absolute">
            <div className="row-hexagon">
              {Array.from({ length: numHexagonSVGs }).map((_, index) => {
                return <div key={"hexagonTop"+index.toString()} className="hexagon"></div>;
              })}
            </div>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <div key={"hexagonContainer"+index} className="row-hexagon">
                  {Array.from({ length: numHexagonSVGs }).map((_, index) => {
                    return <div key={"hexagonChild"+index} className="hexagon"></div>;
                  })}
                </div>
              );
            })}
          </div>
          <div className="transparent-gradient" />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
