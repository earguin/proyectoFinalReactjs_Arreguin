import "./App.css";
import Navbar from './components/NavBar/NavBar'
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from './pages/Detail';
import Category from './pages/Category';
import Shop from './pages/Shop';
import { Checkbox } from "@mui/material";
import Checkout from "./pages/Checkout";

const App = () => {

  return (
    <Router>
      <div className='App'>
        <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/category/:categoria" element={<Category />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </CartProvider>
      </div>

      






      {/* <ItemListContainer greeting="¡Hola! Tu paleta es de ...   " /> */}
    </Router>
  )
  // return (
  //   <div className="App">
  //     <h1>Firebase App</h1>
  //     <div>
  //       {products.map((product) => {
  //         return(
  //           <div>
  //           <p>{product.id}</p>
  //           <p>{product.titulo}</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default App;

