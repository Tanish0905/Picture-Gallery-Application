import React, { useState } from 'react'
import SearchBar from "./components/SearchBar";
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages]=useState([]);

  const handleSubmit = async (term) => {
    console.log("do a search with ",term);

    const result =await searchImages(term);

    setImages(result);
  };

  return (
    <div className='App ' >
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  )
}

export default App;