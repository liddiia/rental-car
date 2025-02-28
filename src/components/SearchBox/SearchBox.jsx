import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetBrands, apiGetCars } from "../../redux/cars/operations";
import {
  selectBrands,
  selectFilters,
  selectIsLoading,
} from "../../redux/cars/selectors";
import Loader from "../Loader/Loader";

const SearchBox = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(apiGetBrands());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(apiGetCars(filters));
  };

  return (
    <div className="search-box">
      <select
        value={filters.brand}
        onChange={(e) => dispatch({ type: "cars/brand", payload: { brand: e.target.value } })}
      >
        <option value="">Choose a brand</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
      
      <select
        value={filters.rentalPrice}
        onChange={(e) => dispatch({ type: "cars/setFilter", payload: { rentalPrice: e.target.value } })}
      >
        <option value="">Choose a price</option>
        {[30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150].map((p) => (
          <option key={p} value={p}>
            ${p}
          </option>
        ))}
      </select>
      
      <input
        type="number"
        placeholder="From (km)"
        value={filters.minMileage}
        onChange={(e) => dispatch({ type: "cars/setFilter", payload: { minMileage: e.target.value } })}
      />
      <input
        type="number"
        placeholder="To (km)"
        value={filters.maxMileage}
        onChange={(e) => dispatch({ type: "cars/setFilter", payload: { maxMileage: e.target.value } })}
      />
      
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? <Loader/> : "Search"}
      </button>
    </div>
  );
};

export default SearchBox;
