import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css"

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={css.container}>
        <div className={css.titleCont}>
        <p className={css.subTitle}>404</p>
      <h2 className={css.title} >
        Page not found. Returning to Home...
        </h2>
        </div>
    </div>
  );
};

export default NotFound;
