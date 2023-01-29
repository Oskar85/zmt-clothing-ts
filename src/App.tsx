import React from 'react';
import './App.scss';
import Home from "./Routes/Home/Home.component";
import { Route, Routes } from "react-router-dom";

const App = () => {

    const Shop = () => {
        return (
            <h1>I am the Shop page</h1>
        )
    }

    return (
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/shop' element={ <Shop/> }/>
        </Routes>
    )

}

export default App;
