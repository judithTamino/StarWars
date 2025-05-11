import { FunctionComponent } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home";
import SuggestMovies from "../pages/SuggestMovies/SuggestMovies";

interface AppRoutesProps {}
 
const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
  return (  
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/movies" element={<SuggestMovies />} />
    </Routes>
  );
}
 
export default AppRoutes;