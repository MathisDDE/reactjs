import React, { useState } from 'react';
import '../composants/catalogue.css';
import ProductList from '../composants/ProductList';
import Header from '../composants/header'; 
import { products } from '../data/catalogue'; 


function CatalogueProducts() {
    // État pour le produit mis en avant (highlighted)
    const [highlightedProduct, setHighlightedProduct] = useState(null);
    // État pour les produits filtrés
    const [filteredProducts, setFilteredProducts] = useState(products);

    return (
        <div className="catalogue-container">
            <Header 
              products={products} 
              setHighlightedProduct={setHighlightedProduct} // Passe la fonction pour mettre en avant un produit
              setFilteredProducts={setFilteredProducts} // Passe la fonction pour mettre à jour les produits filtrés 
            />
            <ProductList 
              filteredProducts={filteredProducts} // Passe les produits filtrés 
              highlightedProduct={highlightedProduct} 
            />
        </div>
    );
}

export default CatalogueProducts;
