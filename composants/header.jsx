import './header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ products, setHighlightedProduct, setFilteredProducts }) {

  const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche
  const [suggestions, setSuggestions] = useState([]); // Suggestions basées sur la recherche

  // Fonction déclenchée lorsqu'on tape dans la barre de recherche
  const handleSearchChange = (event) => {
    const value = event.target.value; // Récupère la valeur de l'input
    setSearchTerm(value); // Met à jour l'état du terme de recherche

    // Si le champ de recherche n'est pas vide
    if (value) {
      // Filtre les produits dont le titre commence par le terme de recherche
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions); // Met à jour les suggestions
      setFilteredProducts(filteredSuggestions); // Met à jour les produits filtrés
    } else {
      // Si la barre de recherche est vide, réinitialise les suggestions et affiche tous les produits
      setSuggestions([]);
      setFilteredProducts(products);
    }
  };

  // Fonction déclenchée lors de la soumission de la recherche
  const handleSearchSubmit = () => {
    // Trouve le produit correspondant exactement au terme de recherche
    const foundProduct = products.find(
      (product) => product.title.toLowerCase() === searchTerm.toLowerCase()
    );
    
    // Si un produit est trouvé, le met en évidence (highlighted)
    if (foundProduct) {
      setHighlightedProduct(foundProduct.id); // Définit le produit à entourer en rouge
    } else {
      setHighlightedProduct(null); // Réinitialise l'état si aucun produit trouvé
    }
  };

  return (
    <header>
      <nav>
        {/* Liens de navigation */}
        <ul className="nav-links">
          <li><Link to="/#">Home</Link></li>
          <li><Link to="/inscription">Inscription</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/service">Service</Link></li>
        </ul>

        {/* Barre de recherche */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher..." // Texte dans l'input quand il est vide
            value={searchTerm} // Valeur de l'input
            onChange={handleSearchChange} // Appelle la fonction handleSearchChange quand on tape
          /> 
          <button type="submit" onClick={handleSearchSubmit}>Rechercher</button>

          {/* Liste des suggestions basées sur la recherche */}
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {/* Affiche chaque suggestion sous forme de liste */}
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                  <div className="suggestion-item">
                    {/* Image et titre du produit suggéré */}
                    <img src={suggestion.image} alt={suggestion.title} className="suggestion-image" />
                    <span>{suggestion.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
