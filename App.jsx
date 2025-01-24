import './App.css';
import Body from './composants/conteneur';
import Footer from './composants/footer';
import Header from './composants/header';
import FormulaireLogin from './composants/formulaireLogin';
import FormulaireInscription from './composants/formulaireInscription';
import CatalogueProducts from './composants/products';
import NotFound from './composants/PageNotFound';

import { BrowserRouter as BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);

  // Chargement des utilisateurs et état d'authentification depuis localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);

    const savedAuthState = JSON.parse(localStorage.getItem("isAuthenticated")) || false;
    setIsAuthenticated(savedAuthState);
  }, []);

  // Sauvegarde des utilisateurs et de l'état d'authentification dans localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleRegister = (userData) => {
    const userExists = users.some((user) => user.email === userData.email);
    if (userExists) {
      alert("Cet utilisateur existe déjà.");
    } else {
      setUsers((prevUsers) => [...prevUsers, userData]);
      alert("Inscription réussie !");
    }
  };

  const handleLogin = ({ email, password }) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      alert("Connexion réussie !");
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert("Vous êtes déconnecté.");
  };

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
          <Routes>
            <Route path="/inscription" element={<FormulaireInscription onRegister={handleRegister} />} />
            <Route path="/login" element={<FormulaireLogin onLogin={handleLogin} />} />
            <Route path="/" element={<ProtectedRoute element={<Body />} />} />
            <Route path="/catalogue" element={<ProtectedRoute element={<CatalogueProducts />} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
