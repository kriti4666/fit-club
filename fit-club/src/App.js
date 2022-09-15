import './App.css';
import Footer from './Components/Footer/Footer';
import Heros from './Components/Heros/Heros';
import JoinUs from './Components/Join Us/JoinUs';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Heros/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <JoinUs/>
          <Footer/>
    </div>
  );
}

export default App;
