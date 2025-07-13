import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Star, Heart, Thermometer, Camera, MessageCircle, ThumbsUp, Users, Utensils, Bed, ArrowLeft } from 'lucide-react';
import { beaches, reviews } from '../mock/data';

const BeachDetail = () => {
  const { id } = useParams();
  const { t, currentLanguage } = useLanguage();
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { user } = useAuth();
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [activeTab, setActiveTab] = useState('overview');

  const beach = beaches.find(b => b.id === parseInt(id));
  const beachReviews = reviews.filter(r => r.beachId === parseInt(id));

  if (!beach) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Praia não encontrada</h1>
          <Link to="/beaches">
            <Button>Voltar para Praias</Button>
          </Link>
        </div>
      </div>
    );
  }

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

  const handleFavoriteToggle = () => {
    if (!user) {
      alert('Faça login para adicionar favoritos');
      return;
    }
    
    if (isFavorite(beach.id)) {
      removeFromFavorites(beach.id);
    } else {
      addToFavorites(beach.id);
    }
  };

  const handleSubmitReview = () => {
    if (!user) {
      alert('Faça login para avaliar');
      return;
    }
    
    if (newReview.trim()) {
      // In a real app, this would submit to the backend
      alert('Avaliação enviada com sucesso!');
      setNewReview('');
      setNewRating(5);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/beaches">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Praias
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={beach.image} 
              alt={getBeachName(beach)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {getBeachName(beach)}
                  </h1>
                  <div className="flex items-center text-white/90 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">Guarapari, Espírito Santo</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-white font-semibold">{beach.rating}</span>
                      <span className="text-white/80 ml-1">({beach.reviews} avaliações)</span>
                    </div>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <Thermometer className="h-5 w-5 text-blue-400 mr-1" />
                      <span className="text-white font-semibold">{beach.weather.temp}°C</span>
                      <span className="text-white/80 ml-1">{beach.weather.condition}</span>
                    </div>
                  </div>
                </div>
                
                {user && (
                  <button
                    onClick={handleFavoriteToggle}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                  >
                    <Heart 
                      className={`h-8 w-8 ${
                        isFavorite(beach.id) ? 'fill-red-500 text-red-500' : 'text-white'
                      }`} 
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="amenities">Comodidades</TabsTrigger>
              <TabsTrigger value="hotels">Hospedagem</TabsTrigger>
              <TabsTrigger value="restaurants">Gastronomia</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Camera className="mr-2 h-5 w-5" />
                        Sobre a Praia
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {getBeachDescription(beach)}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Atividades Populares</h3>
                          <div className="flex flex-wrap gap-2">
                            {beach.activities.map((activity, index) => (
                              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Características</h3>
                          <div className="flex flex-wrap gap-2">
                            {beach.amenities.map((amenity, index) => (
                              <Badge key={index} variant="outline">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Mapa e Street View</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Mapa Interativo</span>
                        </div>
                        {beach.streetView && (
                          <iframe
                            src={beach.streetView}
                            className="w-full h-48 rounded-lg"
                            allowFullScreen
                            loading="lazy"
                          />
                        )}
                        <div className="text-sm text-gray-500">
                          Coordenadas: {beach.coordinates.lat}, {beach.coordinates.lng}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Comodidades e Infraestrutura</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {beach.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hotels" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bed className="mr-2 h-5 w-5" />
                    Opções de Hospedagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {beach.hotels.map((hotel, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{hotel.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span>{hotel.rating}</span>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-2">
                          R$ {hotel.price}
                        </div>
                        <div className="text-sm text-gray-500">por noite</div>
                        <Button className="w-full mt-3" variant="outline">
                          Ver Disponibilidade
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="restaurants" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Utensils className="mr-2 h-5 w-5" />
                    Gastronomia Local
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {beach.restaurants.map((restaurant, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span>{restaurant.rating}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="mb-2">
                          {restaurant.cuisine}
                        </Badge>
                        <Button className="w-full mt-3" variant="outline">
                          Ver Cardápio
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Avaliações dos Visitantes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {beachReviews.map((review) => (
                          <div key={review.id} className="border-b pb-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="font-semibold">{review.userName}</div>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-4 w-4 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString('pt-BR')}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-2">{review.comment}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {review.likes} pessoas acharam útil
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Deixe sua Avaliação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {user ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Sua Avaliação
                            </label>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => setNewRating(i + 1)}
                                  className={`${
                                    i < newRating ? 'text-yellow-400' : 'text-gray-300'
                                  } hover:text-yellow-400 transition-colors`}
                                >
                                  <Star className="h-6 w-6 fill-current" />
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Comentário
                            </label>
                            <Textarea
                              placeholder="Conte sua experiência nesta praia..."
                              value={newReview}
                              onChange={(e) => setNewReview(e.target.value)}
                              rows={4}
                            />
                          </div>
                          
                          <Button 
                            onClick={handleSubmitReview}
                            className="w-full"
                            disabled={!newReview.trim()}
                          >
                            Enviar Avaliação
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 mb-4">
                            Faça login para deixar sua avaliação
                          </p>
                          <Link to="/login">
                            <Button>Fazer Login</Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default BeachDetail;