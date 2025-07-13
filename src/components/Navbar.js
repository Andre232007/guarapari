import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Globe, Menu, X, User, Heart, LogOut, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/beaches', label: t('beaches') },
    { path: '/history', label: t('history') },
    { path: '/biodiversity', label: t('biodiversity') },
    { path: '/events', label: t('events') },
    { path: '/how-to-get', label: t('howToGet') },
    { path: '/blog', label: t('blog') }
  ];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🏖️</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg">Guarapari</div>
              <div className="text-xs text-blue-100">Biodiversidade Marinha</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-yellow-300 transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Language, User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                  <Globe className="h-4 w-4 mr-2" />
                  {currentLanguage.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleLanguageChange('pt')}>
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('es')}>
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      {t('dashboard')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    {t('logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                    {t('login')}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                    {t('register')}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700 border-t border-blue-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-white hover:text-yellow-300 hover:bg-blue-600 rounded-md ${
                    location.pathname === item.path ? 'text-yellow-300 bg-blue-600' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2 border-t border-blue-500 mt-2">
                <div className="text-white text-sm font-medium mb-2">Idioma / Language</div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageChange('pt')}
                    className={`text-xs px-2 py-1 rounded ${
                      currentLanguage === 'pt' ? 'bg-yellow-300 text-blue-800' : 'bg-blue-600 text-white'
                    }`}
                  >
                    🇧🇷 PT
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`text-xs px-2 py-1 rounded ${
                      currentLanguage === 'en' ? 'bg-yellow-300 text-blue-800' : 'bg-blue-600 text-white'
                    }`}
                  >
                    🇺🇸 EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`text-xs px-2 py-1 rounded ${
                      currentLanguage === 'es' ? 'bg-yellow-300 text-blue-800' : 'bg-blue-600 text-white'
                    }`}
                  >
                    🇪🇸 ES
                  </button>
                </div>
              </div>

              {/* Mobile User Menu */}
              {user ? (
                <div className="px-3 py-2 border-t border-blue-500">
                  <div className="text-white text-sm font-medium mb-2">Olá, {user.name}</div>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-white hover:text-yellow-300 hover:bg-blue-600 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('dashboard')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-white hover:text-yellow-300 hover:bg-blue-600 rounded-md"
                  >
                    {t('logout')}
                  </button>
                </div>
              ) : (
                <div className="px-3 py-2 border-t border-blue-500 space-y-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-white hover:text-yellow-300 hover:bg-blue-600 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('login')}
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;