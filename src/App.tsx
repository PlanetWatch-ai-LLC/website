import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import How from './components/How';
import Solutions from './components/Solutions';
import Cases from './components/Cases';
import Team from './components/Team';
import Investors from './components/Investors';
import PilotProgram from './components/PilotProgram';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Why />
        <How />
        <Solutions />
        <Cases />
        <Team />
        <Investors />
        <PilotProgram />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
