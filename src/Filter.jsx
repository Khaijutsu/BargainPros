import { useEffect } from "react"

function Filter( {setActiveEmotion, activeEmotion, setFiltered, item} ) {
  useEffect(() => {
    if (activeEmotion === 0) {
      setFiltered(item);
      return;
    }
    const filtered = item.filter((p) =>
      p.category.includes(activeEmotion)
    );
    setFiltered(filtered);
  }, [activeEmotion])
  
  return (
    <div className='filter-container'>
      <button onClick={() => setActiveEmotion("clothing")}>Cold</button>
      <button onClick={() => setActiveEmotion("jewelery")}>Rich </button>
      <button onClick={() => setActiveEmotion("electronics")}>Techy</button>
    </div>
  )
}

export default Filter