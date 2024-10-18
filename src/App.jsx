import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/appLayout";
import Login from "./pages/Login";
import "./index.css"
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import City from "./components/City";
import Form  from "./components/Form";


const BASE_URL = 'http://localhost:8000';

function App() {
  const [cities, setCities] = useState([]); 
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(function() {
    async function fetchCities() {
      try {
        SetIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data ....");
      } finally {
        SetIsLoading(false);
      }
    }
    fetchCities();
  }, [])


  return (

    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Homepage/>}/>
        <Route  path="product" element={<Product/>} />
        <Route path ="pricing" element={<Pricing/>}/>
        <Route path ="app" element={<AppLayout />}>
          <Route
            index 
            element={<Navigate to='cities' replace/>}/>
          < Route 
            path="cities" 
            element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path="cities/:id" element={<City />}/>
          < Route path="countries" element={<CountryList 
          cities={cities} isLoading={isLoading}/>}/>
          < Route path="form" element={<Form />}/>
        </Route>
        <Route path ="*" element={<PageNotFound/>}/>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
