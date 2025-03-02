import { FadeLoader } from "react-spinners";

import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.container}>
      <FadeLoader
        color="#0B44CD"
        height={15}
        margin={0}
        radius={10}
        speedMultiplier={1}
        width={8}
      />
    </div>
  );
};

export default Loader;
