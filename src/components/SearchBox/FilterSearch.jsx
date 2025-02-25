
import { useState, useEffect } from 'react';

import css from'./FilterSearch.module.css';
import axios from 'axios';

const FilterSearch = () => {
  
  const [brandOptions, setBrandOptions] = useState([]);

   useEffect(() => {
      async function fetchCarBrands() {
        try{
        const response = await axios.get(
          "https://car-rental-api.goit.global/brands"
        );
        setBrandOptions(response.data);
        console.log("brands", response.data)
      } catch(error) {
        console.error("Error fetching brands:", error);
      }
     }
  
      fetchCarBrands();
    }, []);


  return (
    <div className={css.filterContainer}>
       <h2>Brands</h2>
       
      <ul >
        {brandOptions.length===0 ? (
          <p>There are no brands in your search!</p>
        ):(brandOptions.map((brand) => (
          <li key={brandOptions.indexOf(brand)}>
           <p>{brand}</p>
          </li>
        )))}
      </ul> 
   
      <button className={css.searchButton} >
        Search
      </button>
    </div>
  );
};

export default FilterSearch;
