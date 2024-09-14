import { BrowserRouter,Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/appLayout";
import Login from "./pages/Login";
import "./index.css"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Homepage/>}/>
        <Route  path="product" element={<Product/>} />
        <Route path ="pricing" element={<Pricing/>}/>
        <Route path ="app" element={<AppLayout/>}>
          <Route index element={<p>List Of Cities</p>}/>
          < Route path="cities" element={<p>List Of Cities</p>}/>
          < Route path="countries" element={<p>Countries</p>}/>
          < Route path="form" element={<p>Form</p>}/>
        </Route>
        <Route path ="*" element={<PageNotFound/>}/>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
