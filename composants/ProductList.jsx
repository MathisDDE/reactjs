function Catalogue({ filteredProducts, highlightedProduct }) {
    return (
        <div className="catalogue-container">
            <h1>Catalogue de Produits</h1>
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className={`product-card ${highlightedProduct === product.id ? 'highlighted' : ''}`} // Ajoute une classe 'highlighted' si le produit est mis en avant
                    >
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Exportation du composant Catalogue
export default Catalogue;