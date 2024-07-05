//import navbar 
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
