import { NavLink } from "react-router-dom";
import css from "./CarCard.module.css";
import CarAddress from "./CarAdress";
import { useDispatch } from "react-redux";
import { getCarById } from "../../redux/cars/operations";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const { city, country } = CarAddress(car.address);

  const handleClick = () => {
    console.log(`Перехід до автомобіля з ID: ${car.id}`);
    dispatch(getCarById(car.id));
  };

  return (
    <div className={css.wrapper}>
      <li>
        <img className={css.carImg} src={car.img} alt={car.model} />
        <div className={css.carDataTitle}>
          <h3 className={css.cardTitle}>
            {car.brand}
            <span className={css.carModelColor}> {car.model}</span>, {car.year}
          </h3>
          <p>${car.rentalPrice}</p>
        </div>

        <ul className={css.carData}>
          <li className={css.carDataItem}>{city}</li>
          <li className={css.carDataItem}>{country}</li>
          <li className={css.carDataItem}>{car.rentalCompany}</li>
          <li className={css.break}></li>
          <li className={css.carDataItem}>{car.type}</li>
          <li className={css.carDataItem}>
            {car.mileage.toLocaleString("uk-UA")}
          </li>
        </ul>

        <NavLink
          to={`/catalog/${car.id}`}
          className={css.viewMoreBtn}
          onClick={handleClick}
        >
          <p>Read more</p>
        </NavLink>
      </li>
    </div>
  );
};

export default CarCard;
