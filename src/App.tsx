import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Импортируем Route и Routes
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} /> {/* Используем Route вместо Routes */}
            </Routes>
        </Router>
    );
};

export default App;
