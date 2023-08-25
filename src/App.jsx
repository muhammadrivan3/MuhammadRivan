import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar } from "./components";
import { ReactComponent as Hexagon } from "./assets/hexagon.svg";
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
                return <div className="hexagon"></div>;
              })}
            </div>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <div className="row-hexagon">
                  {Array.from({ length: numHexagonSVGs }).map((_, index) => {
                    return <div className="hexagon"></div>;
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
        <div>HELLO WORLD</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
