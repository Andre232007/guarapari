import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, MapPin, Users, Scroll } from 'lucide-react';

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              História de Guarapari
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Uma jornada através dos séculos, desde os povos tupiniquins até os dias atuais
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* Pre-Colonization */}
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-5/12 lg:pr-8 mb-8 lg:mb-0">
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-amber-800">
                          Período Pré-Colonial
                        </CardTitle>
                        <Calendar className="h-5 w-5 text-amber-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-amber-600 mb-4">
                        Antes de 1500
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        A região era habitada pelos povos tupiniquins, que conheciam profundamente 
                        as características das praias e da biodiversidade marinha local. Eles 
                        deram origem ao nome "Guarapari", que significa "rio dos guarás" em tupi.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-6/12 lg:pl-8">
                  <img 
                    src="https://images.unsplash.com/photo-1613200490958-acbb44189c7b" 
                    alt="Período Pré-Colonial"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              {/* Portuguese Colonization */}
              <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
                <div className="lg:w-5/12 lg:pl-8 mb-8 lg:mb-0">
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-blue-800">
                          Colonização Portuguesa
                        </CardTitle>
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600 mb-4">
                        1585 - 1679
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Em 1585, os portugueses estabeleceram os primeiros assentamentos na região. 
                        A área foi oficialmente elevada à categoria de vila em 1679, marcando o 
                        início da colonização formal e o desenvolvimento da infraestrutura portuária.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-6/12 lg:pr-8">
                  <img 
                    src="https://images.unsplash.com/photo-1707024263718-95078cb54199" 
                    alt="Colonização Portuguesa"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              {/* Coffee Era */}
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-5/12 lg:pr-8 mb-8 lg:mb-0">
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-green-800">
                          Era do Café
                        </CardTitle>
                        <Scroll className="h-5 w-5 text-green-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600 mb-4">
                        1800 - 1950
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Durante o século XIX e início do XX, Guarapari se desenvolveu 
                        significativamente graças ao cultivo e exportação de café. O porto 
                        da cidade foi fundamental para o escoamento da produção cafeeira 
                        do interior do Espírito Santo.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-6/12 lg:pl-8">
                  <img 
                    src="https://images.unsplash.com/photo-1565310104425-8cb0ae3228d2" 
                    alt="Era do Café"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              {/* Tourism Development */}
              <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
                <div className="lg:w-5/12 lg:pl-8 mb-8 lg:mb-0">
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-purple-800">
                          Desenvolvimento Turístico
                        </CardTitle>
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-purple-600 mb-4">
                        1950 - Presente
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        A partir da década de 1950, Guarapari se transformou em um importante 
                        destino turístico. As propriedades terapêuticas das areias monazíticas 
                        e a beleza natural das praias atraíram visitantes de todo o Brasil, 
                        consolidando a cidade como a "Capital Nacional da Biodiversidade Marinha".
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-6/12 lg:pr-8">
                  <img 
                    src="https://images.pexels.com/photos/96389/pexels-photo-96389.jpeg" 
                    alt="Desenvolvimento Turístico"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Patrimônio Cultural
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Marcos históricos e culturais que contam a história de Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Igreja Matriz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Igreja centenária dedicada a Nossa Senhora da Conceição, 
                  construída no século XIX e marco arquitetônico da cidade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Centro Histórico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Conjunto de construções coloniais e do século XIX que 
                  preservam a arquitetura tradicional capixaba.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Museu da Cidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Acervo que conta a história da cidade desde a época 
                  pré-colonial até os tempos modernos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Curiosidades Históricas
            </h2>
            <p className="text-xl text-gray-600">
              Fatos interessantes sobre a história de Guarapari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-4">30+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Praias Catalogadas
                </h3>
                <p className="text-gray-600">
                  Guarapari possui mais de 30 praias, cada uma com características 
                  únicas e propriedades terapêuticas das areias monazíticas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-4">500+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Anos de História
                </h3>
                <p className="text-gray-600">
                  Mais de 500 anos de história documentada, desde os primeiros 
                  contatos com os povos indígenas até os dias atuais.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4">1M+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Visitantes Anuais
                </h3>
                <p className="text-gray-600">
                  Mais de 1 milhão de turistas visitam Guarapari anualmente, 
                  atraídos pela beleza natural e patrimônio histórico.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">1º</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Capital da Biodiversidade
                </h3>
                <p className="text-gray-600">
                  Primeira cidade brasileira a receber o título de "Capital 
                  Nacional da Biodiversidade Marinha" pelo governo federal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;