import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./hooks/useAuth";
import ProfilePage from "./pages/ProfilePage";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    logout();
    navigate("/login");
  }
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>ReactStore</h1>
        <nav className="navigation">
          <Link to="/">Accueil</Link>
          <Link to="/produit">Produit</Link>
          {!user ? (
            <Link to="/login">Connexion</Link>
          ) : (
            <>
              <Link to="/profil">Profil</Link>
              <Link to="/panier">Panier</Link>
              <button onClick={handleLogout}>Déconnexion</button>
            </>
          )}
        </nav>
      </header>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produit" element={<ProductsPage />} />
        <Route path="/produit/*" element={<ProductsPage />} />
        <Route path="/produit/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profil"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/panier"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
