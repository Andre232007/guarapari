import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { User, Heart, Star, MapPin, Calendar, Users, BarChart3, Settings } from 'lucide-react';
import { beaches, reviews, users } from '../mock/data';

const Dashboard = () => {
  const { user } = useAuth();
  const { favorites } = useFavorites();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const favoriteBeaches = beaches.filter(beach => favorites.includes(beach.id));
  const userReviews = reviews.filter(review => review.userId === user.id);
  const totalUsers = users.length;

  // Admin stats (mock data)
  const adminStats = {
    totalBeaches: beaches.length,
    totalUsers: totalUsers,
    totalReviews: reviews.length,
    avgRating: (beaches.reduce((sum, beach) => sum + beach.rating, 0) / beaches.length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Olá, {user.name}!</h1>
                <p className="text-blue-100">Bem-vindo de volta ao seu painel pessoal</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Membro desde</div>
              <div className="text-lg font-semibold">
                {new Date(user.registrationDate).toLocaleDateString('pt-BR')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            <TabsTrigger value="reviews">Minhas Avaliações</TabsTrigger>
            <TabsTrigger value="admin">Administração</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Praias Favoritas
                  </CardTitle>
                  <Heart className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{favorites.length}</div>
                  <p className="text-xs text-muted-foreground">
                    praias marcadas como favoritas
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avaliações
                  </CardTitle>
                  <Star className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userReviews.length}</div>
                  <p className="text-xs text-muted-foreground">
                    avaliações enviadas
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Praias Visitadas
                  </CardTitle>
                  <MapPin className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userReviews.length}</div>
                  <p className="text-xs text-muted-foreground">
                    praias com avaliações
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Tempo de Membro
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.ceil((new Date() - new Date(user.registrationDate)) / (1000 * 60 * 60 * 24))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    dias como membro
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Praias Favoritas Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {favoriteBeaches.slice(0, 3).map((beach) => (
                      <div key={beach.id} className="flex items-center space-x-4">
                        <img 
                          src={beach.image} 
                          alt={beach.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{beach.name}</div>
                          <div className="text-sm text-gray-500">
                            {beach.rating}★ • {beach.reviews} avaliações
                          </div>
                        </div>
                        <Link to={`/beach/${beach.id}`}>
                          <Button variant="outline" size="sm">
                            Ver
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                  {favoriteBeaches.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Você ainda não tem praias favoritas
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userReviews.slice(0, 3).map((review) => {
                      const beach = beaches.find(b => b.id === review.beachId);
                      return (
                        <div key={review.id} className="flex items-start space-x-4">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <div className="text-sm">
                              Você avaliou <strong>{beach?.name}</strong>
                            </div>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {new Date(review.date).toLocaleDateString('pt-BR')}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {userReviews.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Você ainda não fez avaliações
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Suas Praias Favoritas</CardTitle>
              </CardHeader>
              <CardContent>
                {favoriteBeaches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteBeaches.map((beach) => (
                      <div key={beach.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <img 
                          src={beach.image} 
                          alt={beach.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{beach.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm">{beach.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {beach.description}
                        </p>
                        <Link to={`/beach/${beach.id}`}>
                          <Button className="w-full" variant="outline">
                            Ver Detalhes
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      Nenhuma praia favorita ainda
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Explore as praias de Guarapari e adicione suas favoritas!
                    </p>
                    <Link to="/beaches">
                      <Button>Explorar Praias</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Suas Avaliações</CardTitle>
              </CardHeader>
              <CardContent>
                {userReviews.length > 0 ? (
                  <div className="space-y-6">
                    {userReviews.map((review) => {
                      const beach = beaches.find(b => b.id === review.beachId);
                      return (
                        <div key={review.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-lg">{beach?.name}</h3>
                              <div className="flex items-center mt-1">
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
                            <Badge variant="outline">
                              {new Date(review.date).toLocaleDateString('pt-BR')}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{review.comment}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              {review.likes} pessoas acharam útil
                            </div>
                            <Link to={`/beach/${beach?.id}`}>
                              <Button variant="outline" size="sm">
                                Ver Praia
                              </Button>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      Nenhuma avaliação ainda
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Visite as praias e compartilhe suas experiências!
                    </p>
                    <Link to="/beaches">
                      <Button>Explorar Praias</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admin" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total de Praias
                  </CardTitle>
                  <MapPin className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adminStats.totalBeaches}</div>
                  <p className="text-xs text-muted-foreground">
                    praias catalogadas
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total de Usuários
                  </CardTitle>
                  <Users className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adminStats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">
                    usuários registrados
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total de Avaliações
                  </CardTitle>
                  <Star className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adminStats.totalReviews}</div>
                  <p className="text-xs text-muted-foreground">
                    avaliações enviadas
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avaliação Média
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adminStats.avgRating}★</div>
                  <p className="text-xs text-muted-foreground">
                    média geral das praias
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Usuários Registrados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((userData) => (
                    <div key={userData.id} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">{userData.name}</div>
                          <div className="text-sm text-gray-500">{userData.email}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">
                          Membro desde {new Date(userData.registrationDate).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="text-sm">
                          {userData.favoriteBeaches.length} favoritas • {userData.reviews.length} avaliações
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;