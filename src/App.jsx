import "./App.css";
import Navbar from './components/NavBar/NavBar'
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from './pages/Detail';
import Category from './pages/Category';
import Shop from './pages/Shop';
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
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/category/:categoria" element={<Category />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </CartProvider>
      </div>
    </Router>
  )
};

export default App;

