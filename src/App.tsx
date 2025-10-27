import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>ReactStore</h1>
        <nav className="navigation">
          <Link to="/">Accueil</Link>
          <Link to="/produit">Produit</Link>
          <Link to="/panier">Panier</Link>
        </nav>
      </header>

    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produit" element={<ProductsPage />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/produit/*" element={<ProductsPage />} />
        <Route path="/produit/:id" element={<ProductDetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
