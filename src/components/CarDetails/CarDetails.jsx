import css from "./CarDetails.module.css";

import { useSelector } from "react-redux";
import { selectSelectedCar } from "../../redux/cars/selectors";
import Loader from "../Loader/Loader";
import CarAddress from "../CarCard/CarAdress";
import CarPropeties from "./CarPropeties";
import RentalForma from "../RentalForma/RentalForma";
import FormatProductId from "./FormatProductId";

const CarDetails = () => {
  const car = useSelector(selectSelectedCar);
  if (!car) return <Loader />;
  const { city, country } = CarAddress(car.address);
  

  return (
    <div className={css.mainContainer}>
      <ul className={css.container}>
        <li>
          <img className={css.carImg} src={car.img} alt={car.model} />
          <div className={css.conteinerForma}>
            <RentalForma />
          </div>
        </li>

        <li>
          <div className={css.titleContainer}>
            <h2 className={css.title}>
              {" "}
              {car.brand} {car.model}, {car.year}{" "}
              <span className={css.idStyle}>id: {FormatProductId(car.id)}</span>
            </h2>
            <div className={css.locationStyle}>
              {" "}
              <p>
                {" "}
                <svg width="16" height="16">
                  <use xlinkHref="/images/symbol-defs.svg#icon-Location"></use>
                </svg>
                {city},{country}
              </p>{" "}
              <p> Mileage: {car.mileage.toLocaleString("uk-UA")}</p>
            </div>

            <h2 className={css.rentalPriceStyle}>${car.rentalPrice}</h2>
            <p className={css.descriptionStyle}>{car.description}</p>
          </div>
          <CarPropeties car={car} />
        </li>
      </ul>
    </div>
  );
};

export default CarDetails;
