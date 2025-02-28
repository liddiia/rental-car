import css from "./CarDetails.module.css";
import { useSelector } from "react-redux";
import { selectSelectedCar } from "../../redux/cars/selectors";
import Loader from "../Loader/Loader";
import CarAddress from "../CarCard/CarAdress";
//  {
//   "id": "11a3ab35-07b8-4336-b06b-602cdc309f2c",
//   "year": 2008,
//   "brand": "Buick",
//   "model": "Enclave",
//   "type": "SUV",
//   "img": "https://ac.goit.global/car-rental-task/9582-ai.jpg",
//   "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//   "fuelConsumption": "10.5",
//   "engineSize": "3.6L V6",
//   "accessories": [
//     "Leather seats",
//     "Panoramic sunroof",
//     "Premium audio system"
//   ],
//   "functionalities": [
//     "Power liftgate",
//     "Remote start",
//     "Blind-spot monitoring"
//   ],
//   "rentalPrice": "40",
//   "rentalCompany": "Luxury Car Rentals",
//   "address": "123 Example Street, Kiev, Ukraine",
//   "rentalConditions": [
//     "Minimum age: 25",
//     "Valid driver's license",
//     "Security deposit required"
//   ],
//   "mileage": 5858
// }

const CarDetails = () => {
  const car = useSelector(selectSelectedCar);
  const { city, country } = CarAddress(car.address);
  const acsAndFunc = car.accessories.concat(car.functionalities);
  if (!car) return <Loader />;

  return (
    <div className={css.container}>
      <ul>
        <li className={css.containerColumLeft}>
          <img className={css.carImg} src={car.img} alt={car.model} />
          <div className={css.conteinerForma}>Forma</div>
        </li>

        <li className={css.containerColumRight}>
          <div>
            {car.brand} {car.model}
            {city}
            {country}
            {car.year}
            <p>${car.rentalPrice}</p>
            {car.description}
          </div>
          <ul>
            {/* //------------------------------------------ */}
            <li>
              {" "}
              Rental Conditions:
             
                <ul>
                {car.rentalConditions.map((item) => (
                  <li key={item}>
                    <svg width="20" height="20">
                      <use xlinkHref="/public/images/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
           
            </li>
            <li>
              {" "}
              Car Specifications
              <ul>
                <li>
                <svg width="20" height="20">
                      <use xlinkHref="/public/images/symbol-defs.svg#icon-calendar"></use>
                    </svg>
                  Year: {car.year}</li>
                <li>
                <svg width="20" height="20">
                      <use xlinkHref="/public/images/symbol-defs.svg#icon-car"></use>
                    </svg>
                  Type: {car.type}</li>
                <li>
                <svg width="20" height="20">
                      <use xlinkHref="/public/images/symbol-defs.svg#icon-fuel-pump"></use>
                    </svg>
                  Fuel Consumption: {car.fuelConsumption}</li>
                <li>
                <svg width="20" height="20">
                      <use xlinkHref="/public/images/symbol-defs.svg#icon-gear"></use>
                    </svg>
                  Engine Size: {car.engineSize}</li>
              </ul>
            </li>
            <li>
              Accessories and functionalities
              <ul>
                {acsAndFunc.map((item) => (
                  <li key={item}>
                    <svg width="20" height="20">
                      <use xlinkHref="/public/images/symbol-defs.svg#icon-check-circle"></use>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
