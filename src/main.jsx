import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Hotels from "./components/pages/Hotels";
import Landmarks from "./components/pages/Landmarks";
import Bars from "./components/pages/Bars";
import Restaurants from "./components/pages/Restaurants";
import apiData from "./data.json";

const { data } = apiData;
const { bars, hotels, landmarks, restaurants } = data;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="hotels" element={<Hotels data={hotels} />} />
        <Route
          path="restaurants"
          element={<Restaurants data={restaurants} />}
        />
        <Route path="landmarks" element={<Landmarks data={landmarks} />} />
        <Route path="bars" element={<Bars data={bars} />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
