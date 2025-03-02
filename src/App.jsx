import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const CarPage = lazy(() => import('./pages/CarPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const  Catalog = lazy(() => import('./pages/Catalog'));


const App = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loader />}>
         <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarPage />} />
        <Route path="*" element={<HomePage  />} />
      </Routes>
      </Suspense>
    </div>
  );
};
export default App;
