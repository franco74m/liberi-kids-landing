import "bulma/css/bulma.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/productsList";
import Footer from "./components/Footer";
import logo from './components/logo.png'
import BrandDescription from "./components/BrandDescription";

function App() {
  return (
    <div>
      <section className="header">
        <Navbar className="navbar" />
        <BrandDescription/>
      </section>
      <section className="products">
        <ProductsList />
      </section>
      <Footer />
    </div>
  );
}

export default App;
