import css from "./CarDetails.module.css";

const CarPropeties = ({ car }) => {
  const acsAndFunc = car.accessories.concat(car.functionalities);
  
  
  return (
    <ul className={css.propetiesContainer}>
      <li>
        {" "}
        <h3 className={css.proppetiesTitle}>
        Rental Conditions:
        </h3>
        <ul  className={css.propetiesItemCont} >
          {Array.isArray(car.rentalConditions) &&
            car.rentalConditions.map((item) => (
              <li key={item}>
                <svg width="16" height="16">
                  <use xlinkHref="/images/symbol-defs.svg#icon-check-circle"></use>
                </svg>
                {item}
              </li>
            ))}
        </ul>
      </li>

      <li>
        {" "}
        <h3 className={css.proppetiesTitle}>Car Specifications</h3>
        <ul className={css.propetiesItemCont}>
          <li>
            <svg width="16" height="16">
              <use xlinkHref="/images/symbol-defs.svg#icon-calendar"></use>
            </svg>
            <p>Year: {car.year}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use xlinkHref="/images/symbol-defs.svg#icon-car"></use>
            </svg>
            <p> Type: {car.type}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use xlinkHref="/images/symbol-defs.svg#icon-fuel-pump"></use>
            </svg>
            <p>Fuel Consumption: {car.fuelConsumption}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use xlinkHref="/images/symbol-defs.svg#icon-gear"></use>
            </svg>
            <p>Engine Size: {car.engineSize}</p>
          </li>
        </ul>
      </li>
      <li >
        <h3 className={css.proppetiesTitle}>Accessories and functionalities</h3>
        <ul className={css.propetiesItemCont}>
          {acsAndFunc.map((item) => (
            <li key={item} >
              <svg width="16" height="16">
                <use xlinkHref="/images/symbol-defs.svg#icon-check-circle"></use>
              </svg>
              <p> {item}</p>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default CarPropeties;
