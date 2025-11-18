import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Clients from './components/Clients';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Solutions />
        <Clients />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
