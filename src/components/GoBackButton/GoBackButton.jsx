import { useNavigate } from "react-router-dom";

import css from "./GoBackButton.module.css"
const GoBackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleGoBack} className={css.backButton}>
      Go Back
    </button>
  );
};

export default GoBackButton;
