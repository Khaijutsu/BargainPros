import React from 'react'

const Item = ( {product} ) => {
  /* If css has '-' in the variable type, then make it a string then : stinrg value */
  const styles = {
    "font-size": '30px',
    "font-weight": "bold",
  };
  return (
    <div>
      <h2>{product.title}</h2>
      <h4>{product.category}</h4>
      <img src={product.image} alt="p" className='items'/>
      <p className='item-description'>{product.description}</p>
      <p style={styles}>${product.price}</p>
      <button>Buy Now</button>
    </div>
  )
}

export default Item