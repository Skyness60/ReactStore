import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <main>
      <header>
        <h1>ReactStore</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/produit">Produit</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/produit" element={<ProductsPage />} />
      </Routes>
    </main>
  );
}

export default App;
