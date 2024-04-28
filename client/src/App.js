import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./app.scss"
const Layout = ()=>{
  return(
  <div className="app">
    <NavBar/>
    <Outlet/>
    <Footer/>
  </div>)
}//all pages (whether product, products or home have same footer and navBar)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
    ]
  }
])
function App() {
  return (
    <div >
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
