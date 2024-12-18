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
import City from "./components/City";
import Form  from "./components/Form";
import { CitiesProvider } from "./contexts/CityContext";


function App() {

  return (
    <CitiesProvider>
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
              element={<CityList />}/>
            <Route path="cities/:id" element={<City />}/>
            < Route path="countries" element={<CountryList />}/>
            < Route path="form" element={<Form />}/>
          </Route>
          <Route path ="*" element={<PageNotFound/>}/>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter> 
    </CitiesProvider>
  )
}

export default App
