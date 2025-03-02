import { useSelector, useDispatch } from "react-redux";
import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";
import {
  selectCars,
  selectError,
  selectFilters,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/cars/selectors";
import { apiGetCars } from "../../redux/cars/operations";
import { useEffect } from "react";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Loader from "../Loader/Loader";
import { updateFilters } from "../../redux/cars/carsSlice";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);
  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = Number(page) + 1;
    if (nextPage <= totalPages && !loading) {
      const params = {
        filters,
        page: String(nextPage),
      };
      dispatch(updateFilters(params));
      dispatch(apiGetCars(params));
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p className={css.errorMessage}> Error: {error}</p>}

      {cars.length === 0 && !loading && !error ? (
        <p className={css.noCarsMessage}>
          No cars found matching your criteria
        </p>
      ) : (
        <ul className={css.wrapper}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </ul>
      )}
      {page < totalPages && !loading && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </>
  );
};

export default CarsList;

// //=================
// import { useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loader from '../Loader/Loader';
// import CarCard from '../CarCard/CarCard';
// import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
// import css from './YourComponent.module.css';

// const CatalogList = ({ cars, loading, error, page, totalPages, handleLoadMore }) => {
//   // Show error toast when error occurs
//   useEffect(() => {
//     if (error) {
//       toast.error(`Error: ${error}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     }
//   }, [error]);

//   // Show "No cars found" toast when cars array is empty
//   useEffect(() => {
//     if (cars.length === 0 && !loading && !error) {
//       toast.info('No cars found matching your criteria', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     }
//   }, [cars, loading, error]);

//   return (
//     <>
//       {loading && <Loader />}
      
//       {cars.length > 0 && (
//         <ul className={css.wrapper}>
//           {cars.map((car) => (
//             <CarCard key={car.id} car={car} />
//           ))}
//         </ul>
//       )}
      
//       {page < totalPages && !loading && (
//         <LoadMoreButton onClick={handleLoadMore} />
//       )}
      
//       <ToastContainer />
//     </>
//   );
// };

// export default CatalogList;
