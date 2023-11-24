import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/home.jsx";
import todo from "./todo/todo.jsx";
import Detalhe from "./Detalhe/detalhe.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<todo />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Detalhe/:id' element={<Detalhe/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)