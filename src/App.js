import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Beaches from './pages/Beaches';
import History from './pages/History';
import Biodiversity from './pages/Biodiversity';
import Events from './pages/Events';
import HowToGet from './pages/HowToGet';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BeachDetail from './pages/BeachDetail';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beaches" element={<Beaches />} />
                <Route path="/beach/:id" element={<BeachDetail />} />
                <Route path="/history" element={<History />} />
                <Route path="/biodiversity" element={<Biodiversity />} />
                <Route path="/events" element={<Events />} />
                <Route path="/how-to-get" element={<HowToGet />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </Router>
        </FavoritesProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;