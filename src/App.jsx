import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Layout>
        {/* Each section corresponds to a menuItem.id/name */}
        <Element name="home" id="home">
          <Home />
        </Element>

        <Element name="about" id="about">
          <AboutMe />
        </Element>

        <Element name="projects" id="projects">
          <Projects />
        </Element>

        {/* You have "contact" in your menu, so put something for it */}
        <Element name="contact" id="contact">
          <div className="min-h-[60vh] flex items-center justify-center">
            <h2 className="text-3xl font-bold">Contact section here</h2>
          </div>
        </Element>
      </Layout>
    </Router>
  );
}

export default App;
