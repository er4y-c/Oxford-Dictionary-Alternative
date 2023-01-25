import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dict, Login } from "./pages";

const App = () => (
        <Router>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/:word" element={<Dict />} />
                <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
)

export default App;