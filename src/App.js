import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./components/RegisterAndLogin";
import HomeScreen from "./components/Home"; 
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";


function App(){
    
    return(

        <BrowserRouter>
            <div className="App">
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
