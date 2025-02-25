import { Routes, Route } from "react-router-dom";

import Catalog from "./pages/Catalog";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound";
import CarPage from "./pages/CarPage";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header/>
         <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;