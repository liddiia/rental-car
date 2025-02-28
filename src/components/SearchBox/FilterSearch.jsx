
// import css from'./FilterSearch.module.css';

// import { selectBrands } from '../../redux/cars/selectors';
// import { useSelector } from 'react-redux';
// import React from 'react';

// import AsyncCreatableSelect from 'react-select/async-creatable';
// import { ColourOption, colourOptions } from '../data';

// const filterColors = (inputValue: string) => {
  
//   return colourOptions.filter((i) =>
//     i.label.toLowerCase().includes(inputValue.toLowerCase())
//   );
// };

// const promiseOptions = (inputValue: string) =>
//   new Promise<ColourOption[]>((resolve) => {
//     setTimeout(() => {
//       resolve(filterColors(inputValue));
//     }, 1000);
//   });

// export default () => (
//   <AsyncCreatableSelect
//     cacheOptions
//     defaultOptions
//     loadOptions={promiseOptions}
//   />
// );



// export const FilterSearch = () => {
  
// const brands = useSelector(selectBrands);

//   return (
//     <div className={css.filterContainer}>
//        <h2>Brands</h2>
       
//       <ul >
//         {brands.length===0 ? (
//           <p>There are no brands in your search!</p>
//         ):(brands.map((brand) => (
//           <li key={brand}>
//            <p>{brand}</p>
//           </li>
//         )))}
//       </ul> 
   
//       <button className={css.searchButton} >
//         Search
//       </button> 
//     </div>
//   );
// };

