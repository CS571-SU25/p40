import Navbar from './components/Navbar'; // import navbar component
import Home from './components/Home'; // import home component
import About from './components/About'; // import about component
import Skills from './components/Skills'; // import skills component
import Fun from './components/FunStuff'; // import fun stuff component
import Footer from './components/Footer'; // import footer component
import Projects from './components/Projects'; // import projects component

// main app component
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Fun />
      </main>
      <Footer />
    </div>
  );
}

export default App;
