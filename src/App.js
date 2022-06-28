import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topheader from './components/Topheader';
import Navbar from './components/Navbar';
import Profilebarmobile from "./components/Profilebarmobile";
import Categorywithsliderimage from "./components/Categorywithsliderimage";
import CountdownTimer from "./components/CountdownTimer";
import Hotdeals from "./components/Hotdeals";


function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <Categorywithsliderimage />
      <Hotdeals/>

      <Profilebarmobile />
    </div>
  );
}

export default App;
