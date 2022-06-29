import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topheader from "./components/Topheader";
import Navbar from "./components/Navbar";
import Profilebarmobile from "./components/Profilebarmobile";
import Categorywithsliderimage from "./components/Categorywithsliderimage";
import Hotdeals from "./components/Hotdeals";
import Product from "./components/Product";
import Latestproduct from "./components/Latestproduct";
import Latestproductlist from "./components/Latestproductlist";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topheader />
        <Navbar />
        <Routes>
          
          
          
          <Route exact path="/home" element={ <div><Categorywithsliderimage /><Hotdeals /><Product /><Latestproduct /><Latestproductlist /> </div>}> </Route>
          <Route path="/*" element={ <div><Categorywithsliderimage /><Hotdeals /><Product /><Latestproduct /><Latestproductlist /> </div>}> </Route>
          <Route exact path="/login" element={ <div><Login /> </div>}> </Route>
       
        </Routes>
        <Footer />
        <Profilebarmobile />
      </BrowserRouter>
    </div>
  );
}

export default App;
