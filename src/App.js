import './App.css';
import PopoupGreetings from "./Components/PopupGreetings";
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import OrderFood from './Components/OrderFood';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <PopoupGreetings/>
     <Home/>
     <About/>
     <Work/>
     <OrderFood/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    
    </div>
  );
}

export default App;
