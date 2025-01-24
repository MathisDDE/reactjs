// src/components/SearchList.js

import React from 'react';

import Detail from './Detail';

function SearchList({ filteredproducts }) {
  const filtered = filteredproducts.map(product =>  <Detail key={product.id} product={product} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;