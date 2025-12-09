// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import PreAbout from "./pages/PreAbout";   // ⬅️ NEW
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ClickSpark from "./components/clickSpark/ClickSpark";

function App() {
  return (
    <ClickSpark sparkColor="#000000" sparkCount={14}>
      <div className="min-h-screen w-full">
        <Router>
          <Layout>
            <Element name="home" id="home">
              <Home />
            </Element>

            {/* ⬇️ First scroll should bring this up over Home */}
            {/* <Element name="pre-about" id="pre-about">
              <PreAbout />
            </Element> */}

            <Element name="about" id="about">
              <AboutMe />
            </Element>

            <Element name="projects" id="projects">
              <Projects />
            </Element>
          </Layout>
        </Router>
      </div>
    </ClickSpark>
  );
}

export default App;
