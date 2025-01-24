

function Detail({product}) {
    return(
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img className="br-100 h3 w3 dib" alt={product.name} src={  product.imgPath} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.prix}</p>
        </div>
      </div>
    );
  }
  
  export default Detail;