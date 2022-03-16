import logo from './logo.svg';
import Navbar from './components/NavbarComponent';
import Hero from './components/HeroComponent';
import Cards from './components/CardsComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
