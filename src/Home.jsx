import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item';
const Home = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchShopList();
  }, []);

  const fetchShopList = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const shops = await data.json();
    console.log(shops)
    setItem(shops);
  }

  // fetch('https://fakestoreapi.com/products?limit=5')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  return (
    <div className='home-content'>
      <div className='searchBar'>
        <h2>Search Bar</h2>
        <input></input>
      </div>
      <div className='filter-section'>
        <h3>Emotion Filter</h3>
        <input type="checkbox" id="feeling-1" />
        <label for="feeling-1">Cold</label>
        <input type="checkbox" id="feeling-2" />
        <label for="feeling-2">Rich</label>
        <input type="checkbox" id="feeling-3" />
        <label for="feeling-3">Techy</label>
      </div>
      <div className='displayed-items'>
        {item.map((product) => {
          return <Item key={product.id} product={product}/>
        })}
      </div>
    </div>
  )
}

export default Home