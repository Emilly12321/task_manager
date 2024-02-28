import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "../../../Frontend/Screens/Login/Login.Screen";
import { Register } from "../../../Frontend/Screens/Register/Register.Screen";
import EditarPerfil from "../../../Frontend/Screens/Edit_user/EditarPerfil";



export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/perfil" element={<EditarPerfil />} />
            </Routes>
        </Router>
    );
};