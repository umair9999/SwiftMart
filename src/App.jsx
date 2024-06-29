import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import OrderPage from "./components/OrderPage";
import Crud from "./components/Crud";
import Services from "./components/Services"
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cartpage" element={<Cart />} />
          <Route path="/orderpage" element={<OrderPage/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/crud" element={<Crud/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
