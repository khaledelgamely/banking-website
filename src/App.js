import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Billings from './components/Billings';
import Business from './components/Business';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import CardDeal from './components/CardDeal';
import Testimonial from './components/Testimonial';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Stats/>
      <Business/>
      <Billings/>
      <CardDeal/>
      <Testimonial/>
      <Clients/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
