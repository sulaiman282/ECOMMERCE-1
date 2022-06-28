import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topheader from './components/Topheader';
import Navbar from './components/Navbar';
import Profilebarmobile from "./components/Profilebarmobile";
import Categorywithsliderimage from "./components/Categorywithsliderimage";




function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <Categorywithsliderimage/>

      <Profilebarmobile />
    </div>
  );
}

export default App;
