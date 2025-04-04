import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

export default function AppRouter() {
  return (
    <Router basename="/AquafishLda2" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
