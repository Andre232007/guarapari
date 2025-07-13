import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Calendar, MapPin, Clock, Users, Music, Search, Filter } from 'lucide-react';
import { events } from '../mock/data';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Festival', 'Esporte', 'Cultura', 'Gastronomia', 'Música'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Eventos em Guarapari
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Descubra os festivais, eventos culturais e atividades que acontecem ao longo do ano 
              na Capital Nacional da Biodiversidade Marinha
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar eventos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                    >
                      {category === 'all' ? 'Todos' : category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <Badge className={`absolute top-4 left-4 ${
                    event.category === 'Festival' ? 'bg-red-500' :
                    event.category === 'Esporte' ? 'bg-green-500' :
                    event.category === 'Cultura' ? 'bg-blue-500' :
                    event.category === 'Gastronomia' ? 'bg-orange-500' :
                    'bg-purple-500'
                  } text-white`}>
                    {event.category}
                  </Badge>
                  
                  {/* Status Badge */}
                  {isUpcoming(event.date) && (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                      Próximo
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 line-clamp-2">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                Nenhum evento encontrado com os critérios selecionados.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Annual Calendar Highlights */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Calendário Anual
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Os principais eventos que acontecem durante o ano em Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Verão</CardTitle>
                  <Music className="h-6 w-6 text-yellow-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-sm mb-2">Dezembro - Março</p>
                <p className="text-blue-100">
                  Festival de Verão, shows na praia, competições de surf
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Outono</CardTitle>
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-sm mb-2">Março - Junho</p>
                <p className="text-blue-100">
                  Festivais gastronômicos, feira de artesanato
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Inverno</CardTitle>
                  <Calendar className="h-6 w-6 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-sm mb-2">Junho - Setembro</p>
                <p className="text-blue-100">
                  Eventos culturais, exposições, teatro
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Primavera</CardTitle>
                  <Clock className="h-6 w-6 text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-sm mb-2">Setembro - Dezembro</p>
                <p className="text-blue-100">
                  Preparação para a temporada, eventos esportivos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Submission CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organize um Evento
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Tem um evento interessante em Guarapari? Compartilhe com nossa comunidade!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calendar className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Divulgue Seu Evento</h3>
              <p className="text-gray-600 text-sm">
                Alcance milhares de pessoas interessadas em atividades em Guarapari
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Conecte-se com a Comunidade</h3>
              <p className="text-gray-600 text-sm">
                Faça parte da vibrante cena cultural e turística local
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Music className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Promova a Cultura</h3>
              <p className="text-gray-600 text-sm">
                Contribua para o desenvolvimento cultural de Guarapari
              </p>
            </Card>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg px-8 py-3">
            Cadastrar Evento
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;