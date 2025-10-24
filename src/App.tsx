import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>ReactStore</h1>
        <nav className="navigation">
          <Link to="/">Accueil</Link>
          <Link to="/produit">Produit</Link>
        </nav>
      </header>

    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produit" element={<ProductsPage />} />
      </Routes>
    </main>
  );
}

export default App;
