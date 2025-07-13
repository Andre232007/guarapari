import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Fish, Waves, Camera, Award, TreePine, Microscope } from 'lucide-react';

const Biodiversity = () => {
  const marineSpecies = [
    { name: 'Peixes Tropicais', count: '200+', description: 'Diferentes espécies de peixes coloridos' },
    { name: 'Corais', count: '50+', description: 'Tipos diversos de corais e recifes' },
    { name: 'Crustáceos', count: '80+', description: 'Caranguejos, lagostas e outros crustáceos' },
    { name: 'Moluscos', count: '120+', description: 'Conchas, polvos e lulas' },
    { name: 'Equinodermos', count: '30+', description: 'Estrelas-do-mar e ouriços' },
    { name: 'Algas Marinhas', count: '100+', description: 'Diferentes tipos de algas e vegetação marinha' }
  ];

  const conservationProjects = [
    {
      title: 'Projeto Tamar',
      description: 'Proteção e conservação de tartarugas marinhas',
      impact: '1000+ tartarugas protegidas/ano',
      badge: 'Ativo'
    },
    {
      title: 'Coral Vivo',
      description: 'Restauração e preservação de recifes de corais',
      impact: '500m² de recifes restaurados',
      badge: 'Ativo'
    },
    {
      title: 'Pesca Sustentável',
      description: 'Programa de pesca responsável e sustentável',
      impact: '200+ pescadores capacitados',
      badge: 'Ativo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-yellow-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Capital Nacional da
              </h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
              Biodiversidade Marinha
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Guarapari foi oficialmente reconhecida como a Capital Nacional da Biodiversidade Marinha, 
              abrigando uma das maiores diversidades de vida marinha do litoral brasileiro
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-yellow-400 text-blue-800 text-lg px-6 py-2">
                Título Federal Oficial
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">
                Reconhecimento Internacional
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Life Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vida Marinha de Guarapari
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a incrível diversidade de espécies que habitam as águas cristalinas de Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marineSpecies.map((species, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-800">{species.name}</CardTitle>
                    <Fish className="h-6 w-6 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {species.count}
                  </div>
                  <p className="text-gray-600">
                    {species.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Species */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Espécies em Destaque
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conheça algumas das espécies mais emblemáticas que fazem de Guarapari um paraíso da biodiversidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/96389/pexels-photo-96389.jpeg" 
                  alt="Tartaruga Marinha"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                  Protegida
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Tartaruga Marinha</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Cinco espécies de tartarugas marinhas frequentam as águas de Guarapari, 
                  incluindo a tartaruga-cabeçuda e a tartaruga-verde.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg" 
                  alt="Corais"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                  Endêmica
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Recifes de Corais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Formações coralinas únicas que abrigam centenas de espécies de peixes 
                  tropicais e outros organismos marinhos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544945582-052b29cd29e4" 
                  alt="Peixes Tropicais"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                  Abundante
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white">Peixes Tropicais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Mais de 200 espécies de peixes coloridos habitam os recifes e águas 
                  costeiras, criando um verdadeiro aquário natural.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conservation Projects */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Projetos de Conservação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iniciativas que protegem e preservam a biodiversidade marinha de Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conservationProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                    <Badge className="bg-green-500 text-white">
                      {project.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <TreePine className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-semibold text-green-800">
                        Impacto: {project.impact}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research and Education */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pesquisa e Educação
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Guarapari é um centro de pesquisa marinha, atraindo cientistas do mundo inteiro 
                para estudar sua rica biodiversidade. Diversos programas educacionais promovem 
                a conscientização sobre a importância da conservação marinha.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Microscope className="h-6 w-6 text-yellow-400 mr-2" />
                      <span className="text-white font-semibold">Pesquisa Científica</span>
                    </div>
                    <p className="text-purple-100 text-sm">
                      Mais de 50 estudos científicos publicados sobre a biodiversidade local
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Camera className="h-6 w-6 text-yellow-400 mr-2" />
                      <span className="text-white font-semibold">Educação Ambiental</span>
                    </div>
                    <p className="text-purple-100 text-sm">
                      Programas que atingem mais de 10.000 estudantes anualmente
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1653492007298-e88b2d72a84b" 
                alt="Pesquisa Marinha"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seja Parte da Conservação
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ajude a preservar a biodiversidade marinha de Guarapari para as futuras gerações
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <Waves className="h-6 w-6 text-blue-500 mr-3" />
                <span className="text-gray-800 font-semibold">Turismo Responsável</span>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <Fish className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-800 font-semibold">Apoie Projetos Locais</span>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <Camera className="h-6 w-6 text-purple-500 mr-3" />
                <span className="text-gray-800 font-semibold">Documente a Natureza</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biodiversity;