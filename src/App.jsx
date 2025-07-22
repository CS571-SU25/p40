import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Fun from './components/FunStuff';
import Footer from './components/Footer';
import Projects from './components/Projects';

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