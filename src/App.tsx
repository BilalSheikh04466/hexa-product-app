import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home, Layout } from './components';
import { RequireAuth } from './features/auth/RequireAuth';
import { Login } from './pages/Login';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path="welcome" element={<Home />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
