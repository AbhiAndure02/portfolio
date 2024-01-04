import About from "./components/About"
import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  

  return (
    <div className="bg-slate-900">
     <NavBar />
     <Banner />
     <About />
     <Skills />
     <Project />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
