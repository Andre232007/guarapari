import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Waves, Camera, Star, Users, Calendar } from 'lucide-react';
import { beaches, events, blogPosts } from '../mock/data';

const Home = () => {
  const { t } = useLanguage();
  
  const featuredBeaches = beaches.slice(0, 3);
  const upcomingEvents = events.slice(0, 2);
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${beaches[0].image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-cyan-800/60" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fade-in-delay">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
            {t('heroDescription')}
          </p>
          <Link to="/beaches">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <MapPin className="mr-2 h-5 w-5" />
              {t('exploreBeaches')}
            </Button>
          </Link>
        </div>

        {/* Floating statistics */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center text-white">
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm">Praias</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center text-white">
            <div className="text-2xl font-bold">4.8★</div>
            <div className="text-sm">Avaliação</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center text-white">
            <div className="text-2xl font-bold">1M+</div>
            <div className="text-sm">Visitantes</div>
          </div>
        </div>
      </section>

      {/* Featured Beaches Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Praias em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra as praias mais populares de Guarapari com suas características únicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBeaches.map((beach, index) => (
              <Card key={beach.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative">
                  <img 
                    src={beach.image} 
                    alt={beach.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{beach.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{beach.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">{beach.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {beach.reviews} avaliações
                    </div>
                    <Link to={`/beach/${beach.id}`}>
                      <Button variant="outline" size="sm" className="hover:bg-blue-50">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Biodiversity Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Capital Nacional da Biodiversidade Marinha
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Guarapari é reconhecida nacionalmente por sua rica biodiversidade marinha. 
                Suas águas cristalinas abrigam centenas de espécies de peixes, corais e 
                vida marinha única na costa brasileira.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">200+</div>
                  <div className="text-blue-100">Espécies de Peixes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">50+</div>
                  <div className="text-blue-100">Tipos de Corais</div>
                </div>
              </div>
              <Link to="/biodiversity">
                <Button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold">
                  <Waves className="mr-2 h-5 w-5" />
                  Explorar Biodiversidade
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/96389/pexels-photo-96389.jpeg" 
                alt="Biodiversidade Marinha"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Eventos Próximos
            </h2>
            <p className="text-xl text-gray-600">
              Não perca os eventos e festivais que acontecem em Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
                Ver Todos os Eventos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Últimas do Blog
            </h2>
            <p className="text-xl text-gray-600">
              Fique por dentro das novidades e dicas sobre Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Camera className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold">
                Ver Todos os Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Guarapari</h3>
              <p className="text-gray-300">
                Capital Nacional da Biodiversidade Marinha
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/beaches" className="hover:text-white">Praias</Link></li>
                <li><Link to="/events" className="hover:text-white">Eventos</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/how-to-get" className="hover:text-white">Como Chegar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-gray-300">
                Prefeitura de Guarapari<br />
                Espírito Santo - Brasil
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footerText')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;