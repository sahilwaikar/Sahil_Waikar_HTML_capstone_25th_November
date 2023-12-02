
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./Components/Navigation";
import Home from "./Components/Home";
import Favourite from "./components/Favourite";

let MainComponent = () => {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <Outlet />
      </Provider>
    </div>
  )
}
const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favourites",
        element: <Favourite />
      }
    ]
  }
])
let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);
root.render(<RouterProvider router={mainRouter} />);
reportWebVitals();