import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Calendar, User, Search, Tag, Clock, Heart, MessageCircle, Share } from 'lucide-react';
import { blogPosts } from '../mock/data';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Turismo', 'Natureza', 'Cultura', 'Gastronomia', 'Eventos'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
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

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog Guarapari
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Descubra histórias, dicas e novidades sobre a Capital Nacional da Biodiversidade Marinha. 
              Conteúdo exclusivo sobre praias, cultura e natureza.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar artigos..."
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

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Artigo em Destaque
              </h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className={`mb-4 ${
                    filteredPosts[0].category === 'Turismo' ? 'bg-blue-500' :
                    filteredPosts[0].category === 'Natureza' ? 'bg-green-500' :
                    filteredPosts[0].category === 'Cultura' ? 'bg-purple-500' :
                    'bg-orange-500'
                  } text-white`}>
                    {filteredPosts[0].category}
                  </Badge>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarFallback>
                          {filteredPosts[0].author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-800">{filteredPosts[0].author}</div>
                        <div className="text-sm text-gray-500">{formatDate(filteredPosts[0].date)}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {getReadingTime(filteredPosts[0].content)} min de leitura
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white">
                    Ler Artigo Completo
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Últimos Artigos
            </h2>
            <p className="text-xl text-gray-600">
              Fique por dentro das novidades de Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <Badge className={`absolute top-4 left-4 ${
                    post.category === 'Turismo' ? 'bg-blue-500' :
                    post.category === 'Natureza' ? 'bg-green-500' :
                    post.category === 'Cultura' ? 'bg-purple-500' :
                    'bg-orange-500'
                  } text-white`}>
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  {/* Author and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarFallback className="text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{post.author}</div>
                        <div className="text-xs text-gray-500">{formatDate(post.date)}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {getReadingTime(post.content)} min
                    </div>
                  </div>
                  
                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>24</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>8</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                      <Share className="h-4 w-4 mr-1" />
                      Compartilhar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                Nenhum artigo encontrado com os critérios selecionados.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Não Perca Nenhuma Novidade
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Inscreva-se em nossa newsletter e receba os melhores conteúdos sobre Guarapari 
            diretamente em seu e-mail
          </p>
          
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Seu melhor e-mail"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white whitespace-nowrap">
                Inscrever-se
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Tag className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Conteúdo Exclusivo</h3>
              <p className="text-indigo-100 text-sm">
                Artigos e dicas que você não encontra em nenhum outro lugar
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Novidades Semanais</h3>
              <p className="text-indigo-100 text-sm">
                Receba as últimas novidades sobre eventos e atrações
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <User className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Comunidade Ativa</h3>
              <p className="text-indigo-100 text-sm">
                Faça parte de uma comunidade apaixonada por Guarapari
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;