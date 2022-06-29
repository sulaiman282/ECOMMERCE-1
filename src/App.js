import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Topheader from './components/Topheader';
import Navbar from './components/Navbar';
import Profilebarmobile from "./components/Profilebarmobile";
import Categorywithsliderimage from "./components/Categorywithsliderimage";
import CountdownTimer from "./components/CountdownTimer";
import Hotdeals from "./components/Hotdeals";
import Product from "./components/Product";
import Latestproduct from "./components/Latestproduct";
import Latestproductlist from './components/Latestproductlist';
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <Categorywithsliderimage />
      <Hotdeals/>
      <Product />
      <Latestproduct />
      <Latestproductlist/>

      <Footer/>
      <Profilebarmobile />
    </div>
  );
}

export default App;
