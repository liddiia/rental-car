import { useState, useEffect } from 'react';
import Select from 'react-select';
import css from'./FilterSearch.module.css';
import axios from 'axios';

const FilterSearch = () => {
  // Стан для зберігання обраних значень
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [brandOptions, setBrandOptions] = useState(null);

  // Опції для випадаючих списків
  // const brandOptions = [
  //   { value: 'aston-martin', label: 'Aston Martin' },
  //   { value: 'audi', label: 'Audi' },
  //   { value: 'bmw', label: 'BMW' },
  //   { value: 'bentley', label: 'Bentley' },
  //   { value: 'buick', label: 'Buick' },
  //   { value: 'chevrolet', label: 'Chevrolet' },
  //   { value: 'chrysler', label: 'Chrysler' },
  //   { value: 'gmc', label: 'GMC' },
  //   { value: 'hummer', label: 'HUMMER' },
  // ];

  const priceOptions = [
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
  ];
   useEffect(() => {
      async function fetchCarBrands() {
        const response = await axios.get(
          "https://car-rental-api.goit.global/brands"
        );
        setBrandOptions(response);
        console.log("brands", response)
      }
  
      fetchCarBrands();
    }, []);
  // Обробник пошуку
  const handleSearch = () => {
    const filters = {
      brand: selectedBrand?.value,
      price: selectedPrice?.value,
      mileageFrom: mileageFrom || undefined,
      mileageTo: mileageTo || undefined,
    };
    
    console.log('Пошук з фільтрами:', filters);
    // Тут буде запит до API з фільтрами
    // https://car-rental-api.goit.global/ };
  }


 

  return (
    <div className={css.filterContainer}>
      <div className={css.filterItem}>
        <label className={css.filterLabel}>Car brand</label>
        <Select
          className={css.reactSelectContainer}
          classNamePrefix={css.reactSelect}
          options={brandOptions}
          value={selectedBrand}
          onChange={setSelectedBrand}
          placeholder="Choose a brand"
          isClearable
        />
      </div>

      <div className={css.filterItem}>
        <label className={css.filterLabel}>Price/1 hour</label>
        <Select
          className={css.reactSelectContainer}
          classNamePrefix={css.reactSelect}
          options={priceOptions}
          value={selectedPrice}
          onChange={setSelectedPrice}
          placeholder="Choose a price"
          isClearable
        />
      </div>

      <div className={css.filterItem}>
        <label className={css.filterLabel}>Car mileager / km</label>
        <div className={css.mileageInputs}>
          <input
            type="number"
            className={css.mileageInput}
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
          <input
            type="number"
            className={css.mileageInput}
            placeholder="To"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </div>
      </div>

      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterSearch;