import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../../../Frontend/Screens/Login/Login.Screen";
import { Register } from "../../../Frontend/Screens/Register/Register.Screen";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};