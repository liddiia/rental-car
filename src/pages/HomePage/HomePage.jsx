import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <h2 className={css.subTitle}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <NavLink to="/catalog" className={css.viewCatalogeBtn}>
          <p> View Catalog</p>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
