import logo from './logo.svg';
import './App.css';
import "aos/dist/aos.css"

import Navbar from './Navbar/navbar';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Experience from './Components/Experience/experience';
import Portfolio from './Components/Portfolio/portfolio';
import Home from './Components/Home/home';
import ScrollToTop from './Scrolltop/scrolltotop';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Home/>
        <About/>        
        <Experience/>         
        <Portfolio/>         
        <Contact/>         


      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
