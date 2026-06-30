import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import How from './components/How';
import Solutions from './components/Solutions';
import Cases from './components/Cases';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#1F2937] antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Why />
        <How />
        <Solutions />
        <Cases />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
