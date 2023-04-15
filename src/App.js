import React from "react";

import Home from "./Pages/Home";

import { Route, Routes } from "react-router-dom";

const App = () => {
    return(
        <>
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
        </>
    )
}

export default App;