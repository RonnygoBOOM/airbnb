import Navbar from './components/NavbarComponent';
import Content from './components/ContentComponent';
import Cards from './components/CardsComponent';
import { HERO } from './shared/hero';
import './App.css';

function App() {

  // const myCards = hero.map(item => {
  //   return (

  //   )
  // })

  return (
    <div className="App">
      <Navbar />
      <Content />
      <Cards hero={HERO}
      />
    </div>
  );
}

export default App;
