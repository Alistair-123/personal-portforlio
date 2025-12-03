import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Layout>
        {/* SECTIONS WITH IDs FOR SCROLLING */}
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <AboutMe />
        </div>

        <div id="projects">
          <Projects />
        </div>
      </Layout>
    </Router>
  )
}

export default App
