import { useState } from "react";
import "./main.css";

function SearchBar({ onSubmit }) {
  const [term,setTerm]=useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) =>{
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar ">
      <form onSubmit={handleFormSubmit} >
        <div className="search-class">
        <label>Enter search term</label>
        <div>
        <input property={{display:"inline"}} onChange={handleChange} value={term}/>
        <button property={{display:"inline"}} type="submit"  value={term} shape="circle" icon="search"> Search </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;