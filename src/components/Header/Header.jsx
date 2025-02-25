import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.wrapper}>
          <svg width="102" height="16" className={css.logo}>
            <use  href="../../../public/images/symbol-defs.svg#icon-RentalCar"></use>
          </svg>

          <nav>
            <ul className={css.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
