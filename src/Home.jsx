import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item';
import Filter from './Filter';


const Home = () => {
  const [item, setItem] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeEmotion, setActiveEmotion] = useState(0);

  useEffect(() => {
    fetchShopList();
  }, []);

  const fetchShopList = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const shops = await data.json();
    console.log(shops);
    setItem(shops);
    setFiltered(shops);
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
        <Filter item={item} setFiltered={setFiltered} activeEmotion={activeEmotion} setActiveEmotion={setActiveEmotion}/>
        
      </div>
      <div className='displayed-items'>
        {filtered.map((product) => {
          return <Item key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default Home