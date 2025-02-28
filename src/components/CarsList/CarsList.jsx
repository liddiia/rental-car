import { useSelector, useDispatch } from "react-redux";
import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";
import { selectCars, selectError, selectIsLoading,} from "../../redux/cars/selectors";
import { apiGetCars } from "../../redux/cars/operations";
import { useEffect } from "react";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Loader from "../Loader/Loader";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log("cars:",cars);
  // const page = useSelector(selectPage);
  // const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(apiGetCars()); // Завантажуємо машини за фільтрами
  }, [dispatch]);

  // const handleLoadMore = () => {
  //   if (page < totalPages) {
  //     dispatch(apiGetCars({page: page + 1 }));
  //   }
  // };

  return (
    <>
      {loading && <Loader/>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {cars.length === 0 && !loading && !error ? (
        <p>No cars found matching your criteria</p>
      ) : (
        <ul className={css.wrapper}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </ul>
      )}

      <LoadMoreButton />
    </>
  );
};

export default CarsList;


