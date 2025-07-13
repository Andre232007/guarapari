import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { MapPin, Star, Users, Heart, Search, Thermometer, Cloud, Filter } from 'lucide-react';
import { beaches } from '../mock/data';

const Beaches = () => {
  const { t, currentLanguage } = useLanguage();
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const getBeachName = (beach) => {
    switch(currentLanguage) {
      case 'en': return beach.nameEn;
      case 'es': return beach.nameEs;
      default: return beach.name;
    }
  };

  const getBeachDescription = (beach) => {
    switch(currentLanguage) {
      case 'en': return beach.descriptionEn;
      case 'es': return beach.descriptionEs;
      default: return beach.description;
    }
  };

  const filteredBeaches = beaches.filter(beach => {
    const matchesSearch = getBeachName(beach).toLowerCase().includes(searchTerm.toLowerCase()) ||
                         getBeachDescription(beach).toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'favorites' && isFavorite(beach.id)) ||
                         (selectedFilter === 'popular' && beach.rating >= 4.5);
    
    return matchesSearch && matchesFilter;
  });

  const handleFavoriteToggle = (beachId) => {
    if (!user) {
      alert('Faça login para adicionar favoritos');
      return;
    }
    
    if (isFavorite(beachId)) {
      removeFromFavorites(beachId);
    } else {
      addToFavorites(beachId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('allBeaches')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore todas as praias de Guarapari, cada uma com suas características únicas e belezas naturais
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar praias..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={selectedFilter === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedFilter('all')}
                    className="flex items-center"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Todas
                  </Button>
                  <Button 
                    variant={selectedFilter === 'popular' ? 'default' : 'outline'}
                    onClick={() => setSelectedFilter('popular')}
                    className="flex items-center"
                  >
                    <Star className="mr-2 h-4 w-4" />
                    Populares
                  </Button>
                  {user && (
                    <Button 
                      variant={selectedFilter === 'favorites' ? 'default' : 'outline'}
                      onClick={() => setSelectedFilter('favorites')}
                      className="flex items-center"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Favoritas
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beaches Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBeaches.map((beach) => (
              <Card key={beach.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative">
                  <img 
                    src={beach.image} 
                    alt={getBeachName(beach)}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{beach.rating}</span>
                    </div>
                  </div>
                  
                  {/* Favorite Button */}
                  {user && (
                    <button
                      onClick={() => handleFavoriteToggle(beach.id)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`h-5 w-5 ${
                          isFavorite(beach.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                        }`} 
                      />
                    </button>
                  )}
                  
                  {/* Weather Info */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center text-sm">
                      <Thermometer className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="font-semibold">{beach.weather.temp}°C</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 flex items-center justify-between">
                    {getBeachName(beach)}
                    <Badge variant="secondary" className="ml-2">
                      {beach.reviews} {t('beachReviews')}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">{getBeachDescription(beach)}</p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {beach.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Activities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {beach.activities.slice(0, 2).map((activity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Hotel and Restaurant Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div>
                      <div className="font-semibold">Hospedagem</div>
                      <div>A partir de R$ {beach.hotels[0]?.price || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Restaurantes</div>
                      <div>{beach.restaurants.length} opções</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Guarapari, ES</span>
                    </div>
                    <Link to={`/beach/${beach.id}`}>
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                        {t('viewDetails')}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredBeaches.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                Nenhuma praia encontrada com os critérios selecionados.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white">{beaches.length}</div>
              <div className="text-blue-100">Praias Catalogadas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white">4.7★</div>
              <div className="text-blue-100">Avaliação Média</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white">1.2M+</div>
              <div className="text-blue-100">Visitantes/Ano</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white">365</div>
              <div className="text-blue-100">Dias de Sol</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beaches;