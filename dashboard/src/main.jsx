import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import "./index.css"; */
import Home from "./components/Home";
import Holdings from "./components/Holdings";



createRoot(document.getElementById('root')).render(
 <StrictMode>
   <Home/>
   <Holdings/>
   

 </StrictMode>
);