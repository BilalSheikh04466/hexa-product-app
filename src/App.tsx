// import axios from "axios";
// import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/component';
import Layout from './components/Layout/component';
import RequireAuth from './features/auth/RequireAuth';
import Login from './pages/Login/Login';
import Welcome from './pages/Welcome/Welcome';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path="welcome" element={<Welcome />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
