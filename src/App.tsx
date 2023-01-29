import React from 'react';
import './App.scss';
import Home from "./Routes/Home/Home.component";
import { Route, Routes } from "react-router-dom";

const App = () => {

    return (
        <Routes>
            <Route path='/' element={ <Home/> }/>
        </Routes>
    )

}

export default App;
