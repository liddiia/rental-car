import { useSelector } from "react-redux";
import CarDetails from "../components/CarDetails/CarDetails";
import { selectIsLoading } from "../redux/cars/selectors";
import Loader from "../components/Loader/Loader";
import GoBackButton from "../components/GoBackButton/GoBackButton";

const CarPage = () => {
  const loading = useSelector(selectIsLoading);
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <CarDetails />
          <GoBackButton/>
        </div>
      )}
    </>
  );
};

export default CarPage;
