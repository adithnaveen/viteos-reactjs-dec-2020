import React from 'react'
import ProductCardJson from './ProductCardJson'; 
import loading from '../hoc/loading'; 

const ProductListHOC =({products}) => {
  let list=products.map(p => 
    <ProductCardJson product={p} key={p.id} />); 

  return <div>
      {list}
  </div>

}

export default loading('products')(ProductListHOC);  
