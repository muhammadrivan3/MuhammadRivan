
import { Hero, SideMenu, About,Resume } from "./components";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative z-0 bg-[#181818]">
                  <Hero />
                  <About />
                  <SideMenu />
                </div>
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </>
  );
}


export default App;
