import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProductList />
        <Cart />
      </main>
    </>
  );
}

export default App;
