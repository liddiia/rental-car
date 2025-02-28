import CarDetails from "../components/CarDetails/CarDetails"


const CarPage = () => {
  return (
    <CarDetails/>
  )
}

export default CarPage;

// import { useSelector } from 'react-redux';
// import { selectSelectedCar } from '../redux/cars/selectors';

// const CarDetailsComponent = () => {
//   const selectedCar = useSelector(selectSelectedCar);
  
//   // Відображення даних конкретного автомобіля
//   return selectedCar ? (
//     <div>
//       <h2>{selectedCar.brand} {selectedCar.model}</h2>
//       <p>Rental Price: {selectedCar.rentalPrice}</p>
//       {/* Інші деталі автомобіля */}
//     </div>
//   ) : (
//     <p>Loading car details...</p>
//   );
// };
// export default CarDetailsComponent;