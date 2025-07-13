
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Plane, Car, Bus, MapPin, Clock, DollarSign, Navigation, Phone, Info } from 'lucide-react';

const HowToGet = () => {
  const [activeTransport, setActiveTransport] = useState('car');

  const transportOptions = {
    car: {
      icon: Car,
      title: 'De Carro',
      description: 'A forma mais flexível de chegar a Guarapari',
      routes: [
        {
          from: 'Vitória',
          distance: '54 km',
          time: '50-70 min',
          route: 'BR-101 Sul → Saída para Guarapari',
          tips: 'Melhor rota. Evite horários de pico (7h-9h e 17h-19h)'
        },
        {
          from: 'Rio de Janeiro',
          distance: '470 km',
          time: '5-6 horas',
          route: 'BR-101 Norte → Guarapari',
          tips: 'Viagem longa. Faça paradas para descanso.'
        },
        {
          from: 'Belo Horizonte',
          distance: '480 km',
          time: '5-6 horas',
          route: 'BR-040 → BR-101 Sul → Guarapari',
          tips: 'Estrada boa. Cuidado com pedágios.'
        },
        {
          from: 'São Paulo',
          distance: '950 km',
          time: '10-12 horas',
          route: 'Rodovia Presidente Dutra → BR-101',
          tips: 'Considere fazer a viagem em 2 dias.'
        }
      ]
    },
    plane: {
      icon: Plane,
      title: 'De Avião',
      description: 'Opção mais rápida para longas distâncias',
      info: {
        airport: 'Aeroporto Eurico de Aguiar Salles (Vitória)',
        distance: '60 km de Guarapari',
        transferTime: '1 hora',
        companies: ['Azul', 'Gol', 'LATAM'],
        tips: [
          'Aeroporto de Vitória é o mais próximo',
          'Transfer disponível por ônibus ou carro',
          'Reserve com antecedência para melhores preços',
          'Voos diretos de principais capitais'
        ]
      }
    },
    bus: {
      icon: Bus,
      title: 'De Ônibus',
      description: 'Opção econômica e confortável',
      companies: [
        {
          name: 'Viação Kaissara',
          routes: ['Vitória', 'Cachoeiro', 'Vila Velha'],
          frequency: 'A cada 30-60 min',
          price: 'R$ 8-15'
        },
        {
          name: 'Viação Águia Branca',
          routes: ['Rio de Janeiro', 'São Paulo', 'BH'],
          frequency: 'Diário',
          price: 'R$ 80-200'
        }
      ],
      terminals: [
        'Terminal Rodoviário de Guarapari (Centro)',
        'Terminal de Vila Velha (conexões)',
        'Terminal Rodoviário de Vitória'
      ]
    }
  };

  const accommodationTypes = [
    {
      type: 'Hotéis de Luxo',
      priceRange: 'R$ 300-800/noite',
      description: 'Resorts e hotéis 4-5 estrelas',
      examples: ['Resort Meaípe', 'Hotel Praia']
    },
    {
      type: 'Pousadas',
      priceRange: 'R$ 120-300/noite',
      description: 'Acomodações aconchegantes',
      examples: ['Pousada das Castanheiras', 'Pousada Areia Branca']
    },
    {
      type: 'Hostels',
      priceRange: 'R$ 40-100/noite',
      description: 'Opções econômicas para jovens',
      examples: ['Hostel Guarapari', 'Albergue da Praia']
    },
    {
      type: 'Airbnb',
      priceRange: 'R$ 80-400/noite',
      description: 'Casas e apartamentos',
      examples: ['Apartamentos na orla', 'Casas próximas às praias']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Como Chegar a Guarapari
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Todas as informações que você precisa para planejar sua viagem para a 
              Capital Nacional da Biodiversidade Marinha
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">
                54 km de Vitória
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">
                Acesso fácil por rodovia
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-6 py-2">
                Transporte público disponível
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Opções de Transporte
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a melhor forma de chegar até Guarapari
            </p>
          </div>

          <Tabs value={activeTransport} onValueChange={setActiveTransport}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="car" className="flex items-center">
                <Car className="mr-2 h-4 w-4" />
                Carro
              </TabsTrigger>
              <TabsTrigger value="plane" className="flex items-center">
                <Plane className="mr-2 h-4 w-4" />
                Avião
              </TabsTrigger>
              <TabsTrigger value="bus" className="flex items-center">
                <Bus className="mr-2 h-4 w-4" />
                Ônibus
              </TabsTrigger>
            </TabsList>

            <TabsContent value="car">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Car className="mr-3 h-6 w-6 text-blue-500" />
                    {transportOptions.car.title}
                  </CardTitle>
                  <p className="text-gray-600">{transportOptions.car.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {transportOptions.car.routes.map((route, index) => (
                      <Card key={index} className="border-l-4 border-blue-500">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">{route.from}</h3>
                            <Badge variant="outline">{route.distance}</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{route.time}</span>
                            </div>
                            <div className="flex items-start">
                              <Navigation className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                              <span>{route.route}</span>
                            </div>
                            <div className="flex items-start">
                              <Info className="h-4 w-4 mr-2 text-blue-500 mt-0.5" />
                              <span className="text-blue-600">{route.tips}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="plane">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Plane className="mr-3 h-6 w-6 text-blue-500" />
                    {transportOptions.plane.title}
                  </CardTitle>
                  <p className="text-gray-600">{transportOptions.plane.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4">Informações do Aeroporto</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                          <div>
                            <div className="font-semibold">{transportOptions.plane.info.airport}</div>
                            <div className="text-sm text-gray-600">
                              {transportOptions.plane.info.distance} • {transportOptions.plane.info.transferTime}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Companhias Aéreas:</div>
                          <div className="flex flex-wrap gap-2">
                            {transportOptions.plane.info.companies.map((company, index) => (
                              <Badge key={index} variant="outline">{company}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-4">Dicas Importantes</h3>
                      <ul className="space-y-2">
                        {transportOptions.plane.info.tips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bus">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Bus className="mr-3 h-6 w-6 text-blue-500" />
                    {transportOptions.bus.title}
                  </CardTitle>
                  <p className="text-gray-600">{transportOptions.bus.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4">Empresas de Ônibus</h3>
                      <div className="space-y-4">
                        {transportOptions.bus.companies.map((company, index) => (
                          <Card key={index} className="border-l-4 border-green-500">
                            <CardContent className="p-4">
                              <div className="font-semibold text-lg mb-2">{company.name}</div>
                              <div className="space-y-1 text-sm">
                                <div><strong>Rotas:</strong> {company.routes.join(', ')}</div>
                                <div><strong>Frequência:</strong> {company.frequency}</div>
                                <div className="flex items-center">
                                  <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                                  <strong>{company.price}</strong>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-4">Terminais Rodoviários</h3>
                      <ul className="space-y-2">
                        {transportOptions.bus.terminals.map((terminal, index) => (
                          <li key={index} className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                            <span className="text-sm">{terminal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Onde Ficar
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Opções de hospedagem para todos os gostos e orçamentos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationTypes.map((accommodation, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">{accommodation.type}</CardTitle>
                  <Badge className="bg-yellow-400 text-blue-800 w-fit">
                    {accommodation.priceRange}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">{accommodation.description}</p>
                  <div className="space-y-1">
                    {accommodation.examples.map((example, idx) => (
                      <div key={idx} className="text-sm text-blue-200">
                        • {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Emergency Info */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Informações Úteis
            </h2>
            <p className="text-xl text-gray-600">
              Contatos importantes para sua viagem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-green-500" />
                  Emergências
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>SAMU:</strong> 192</div>
                  <div><strong>Bombeiros:</strong> 193</div>
                  <div><strong>Polícia:</strong> 190</div>
                  <div><strong>Polícia Rodoviária:</strong> 191</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-blue-500" />
                  Turismo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>Secretaria de Turismo:</strong> (27) 3361-1323</div>
                  <div><strong>Centro de Informações:</strong> Praia do Morro</div>
                  <div><strong>Site:</strong> www.guarapari.es.gov.br</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-red-500" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div><strong>CEP:</strong> 29200-000</div>
                  <div><strong>Estado:</strong> Espírito Santo</div>
                  <div><strong>Região:</strong> Sudeste</div>
                  <div><strong>Fuso:</strong> UTC-3 (Brasília)</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToGet;