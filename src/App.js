import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./components/RegisterAndLogin";
import HomeScreen from "./components/Home"; 
import ForgotPassword from "./components/ForgotPassword";

function App(){

    return(


        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<HomeScreen/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App;