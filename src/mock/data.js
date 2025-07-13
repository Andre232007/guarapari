// Mock data for the Guarapari tourism website
export const beaches = [
  {
    id: 1,
    name: "Praia do Morro",
    nameEn: "Morro Beach",
    nameEs: "Playa del Morro",
    description: "Uma das mais famosas e movimentadas. Fica no centro da cidade. Tem quiosques, restaurantes, ciclovia e orla iluminada.",
    descriptionEn: "One of the most famous and busy beaches. Located in the city center. Has kiosks, restaurants, bike path and illuminated waterfront.",
    descriptionEs: "Una de las más famosas y concurridas. Ubicada en el centro de la ciudad. Tiene quioscos, restaurantes, carril bici y paseo marítimo iluminado.",
    image: "https://images.unsplash.com/photo-1613200490958-acbb44189c7b",
    rating: 4.8,
    reviews: 156,
    coordinates: { lat: -20.6525, lng: -40.4931 },
    streetView: "https://www.google.com/maps/embed?pb=!4v1719945061062!6m8!1m7!1sCAoSLEFGMVFpcE5IRFFLRXhFYzZ3Y0hzZGoxdzV1eEVrX0djS1o2cnhRaUQ2ZGZx!2m2!1d-20.6525!2d-40.4931!3f90!4f0!5f0.7820865974627469",
    amenities: ["Quiosques", "Restaurantes", "Ciclovia", "Orla iluminada"],
    activities: ["Caminhada", "Ciclismo", "Esportes aquáticos", "Pesca"],
    weather: { temp: 28, condition: "Ensolarado" },
    hotels: [
      { name: "Hotel Morro", price: 180, rating: 4.2 },
      { name: "Pousada Central", price: 120, rating: 4.0 }
    ],
    restaurants: [
      { name: "Restaurante Vista Mar", cuisine: "Frutos do mar", rating: 4.5 },
      { name: "Pizzaria do Morro", cuisine: "Pizza", rating: 4.3 }
    ]
  },
  {
    id: 2,
    name: "Praia das Castanheiras",
    nameEn: "Castanheiras Beach",
    nameEs: "Playa de las Castañeiras",
    description: "Pequena e charmosa, cercada por castanheiras, com mar calmo.",
    descriptionEn: "Small and charming, surrounded by chestnut trees, with calm sea.",
    descriptionEs: "Pequeña y encantadora, rodeada de castaños, con mar tranquilo.",
    image: "https://images.unsplash.com/photo-1707024263718-95078cb54199",
    rating: 4.6,
    reviews: 89,
    coordinates: { lat: -20.6746, lng: -40.4975 },
    streetView: "https://www.google.com/maps/embed?pb=!4v1751659668802!6m8!1m7!1s_E1i3Z6ui88tg9RCTylzsQ!2m2!1d-20.6746!2d-40.4975!3f25!4f0!5f0.7820865974627469",
    amenities: ["Sombra natural", "Mar calmo", "Ambiente tranquilo"],
    activities: ["Relaxamento", "Leitura", "Contemplação"],
    weather: { temp: 27, condition: "Parcialmente nublado" },
    hotels: [
      { name: "Pousada das Castanheiras", price: 160, rating: 4.4 }
    ],
    restaurants: [
      { name: "Bar das Castanheiras", cuisine: "Petiscos", rating: 4.2 }
    ]
  },
  {
    id: 3,
    name: "Praia de Meaípe",
    nameEn: "Meaípe Beach",
    nameEs: "Playa de Meaípe",
    description: "Situada a cerca de 6 km do centro. Popular entre turistas e moradores. Com estrutura de bares, restaurantes e hotéis.",
    descriptionEn: "Located about 6 km from the center. Popular among tourists and locals. With structure of bars, restaurants and hotels.",
    descriptionEs: "Ubicada a unos 6 km del centro. Popular entre turistas y residentes. Con estructura de bares, restaurantes y hoteles.",
    image: "https://images.unsplash.com/photo-1565310104425-8cb0ae3228d2",
    rating: 4.7,
    reviews: 234,
    coordinates: { lat: -20.7380, lng: -40.5414 },
    streetView: "https://www.google.com/maps/embed?pb=!4v1751660148069!6m8!1m7!1s6BLHqD3UhOqyPnVp9vT48A!2m2!1d-20.7380!2d-40.5414!3f101!4f-4!5f0.7820865974627469",
    amenities: ["Bares", "Restaurantes", "Hotéis", "Estacionamento"],
    activities: ["Surf", "Stand up paddle", "Gastronomia", "Vida noturna"],
    weather: { temp: 29, condition: "Ensolarado" },
    hotels: [
      { name: "Resort Meaípe", price: 320, rating: 4.8 },
      { name: "Hotel Praia", price: 280, rating: 4.5 }
    ],
    restaurants: [
      { name: "Moqueca da Praia", cuisine: "Frutos do mar", rating: 4.7 },
      { name: "Churrascaria do Mar", cuisine: "Carnes", rating: 4.4 }
    ]
  },
  {
    id: 4,
    name: "Praia de Bacutia",
    nameEn: "Bacutia Beach",
    nameEs: "Playa de Bacutia",
    description: "Localizada após Meaípe. Mais tranquila e com pouca estrutura. Ideal para quem busca sossego.",
    descriptionEn: "Located after Meaípe. Quieter and with little structure. Ideal for those seeking peace.",
    descriptionEs: "Ubicada después de Meaípe. Más tranquila y con poca estructura. Ideal para quienes buscan tranquilidad.",
    image: "https://images.pexels.com/photos/96389/pexels-photo-96389.jpeg",
    rating: 4.4,
    reviews: 67,
    coordinates: { lat: -20.7485, lng: -40.5520 },
    streetView: "",
    amenities: ["Natureza preservada", "Tranquilidade", "Pouca movimentação"],
    activities: ["Contemplação", "Caminhada", "Fotografia"],
    weather: { temp: 27, condition: "Ensolarado" },
    hotels: [
      { name: "Pousada Bacutia", price: 140, rating: 4.1 }
    ],
    restaurants: [
      { name: "Restaurante Simples", cuisine: "Caseira", rating: 4.0 }
    ]
  },
  {
    id: 5,
    name: "Praia de Areia Branca",
    nameEn: "White Sand Beach",
    nameEs: "Playa de Arena Blanca",
    description: "Área mais afastada e natural. Ponto de encontro de surfistas. Boa infraestrutura com pousadas e restaurantes.",
    descriptionEn: "More remote and natural area. Meeting point for surfers. Good infrastructure with inns and restaurants.",
    descriptionEs: "Área más alejada y natural. Punto de encuentro de surfistas. Buena infraestructura con posadas y restaurantes.",
    image: "https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg",
    rating: 4.9,
    reviews: 178,
    coordinates: { lat: -20.7892, lng: -40.5834 },
    streetView: "",
    amenities: ["Areia branca", "Ondas para surf", "Pousadas", "Restaurantes"],
    activities: ["Surf", "Windsurf", "Mergulho", "Esportes aquáticos"],
    weather: { temp: 30, condition: "Ensolarado" },
    hotels: [
      { name: "Pousada Areia Branca", price: 220, rating: 4.6 },
      { name: "Surf Lodge", price: 180, rating: 4.3 }
    ],
    restaurants: [
      { name: "Restaurante do Surfista", cuisine: "Internacional", rating: 4.5 },
      { name: "Bar da Praia", cuisine: "Petiscos", rating: 4.4 }
    ]
  }
];

export const events = [
  {
    id: 1,
    title: "Festival de Verão de Guarapari",
    titleEn: "Guarapari Summer Festival",
    titleEs: "Festival de Verano de Guarapari",
    date: "2025-01-15",
    description: "Grande festival de música e cultura na orla da cidade.",
    descriptionEn: "Big music and culture festival on the city's waterfront.",
    descriptionEs: "Gran festival de música y cultura en el paseo marítimo de la ciudad.",
    location: "Praia do Morro",
    category: "Festival",
    image: "https://images.unsplash.com/photo-1544945582-052b29cd29e4"
  },
  {
    id: 2,
    title: "Torneio de Surf de Meaípe",
    titleEn: "Meaípe Surf Tournament",
    titleEs: "Torneo de Surf de Meaípe",
    date: "2025-02-20",
    description: "Campeonato estadual de surf com participação de atletas nacionais.",
    descriptionEn: "State surf championship with participation of national athletes.",
    descriptionEs: "Campeonato estatal de surf con participación de atletas nacionales.",
    location: "Praia de Meaípe",
    category: "Esporte",
    image: "https://images.unsplash.com/photo-1653492007298-e88b2d72a84b"
  },
  {
    id: 3,
    title: "Feira de Artesanato Local",
    titleEn: "Local Handicraft Fair",
    titleEs: "Feria de Artesanía Local",
    date: "2025-03-10",
    description: "Exposição e venda de artesanatos locais e produtos típicos.",
    descriptionEn: "Exhibition and sale of local handicrafts and typical products.",
    descriptionEs: "Exposición y venta de artesanías locales y productos típicos.",
    location: "Centro da Cidade",
    category: "Cultura",
    image: "https://images.unsplash.com/photo-1709178539190-9816d690b57a"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Descobrindo as Praias Secretas de Guarapari",
    titleEn: "Discovering the Secret Beaches of Guarapari",
    titleEs: "Descubriendo las Playas Secretas de Guarapari",
    excerpt: "Conheça as praias menos conhecidas mas igualmente belas da cidade.",
    excerptEn: "Discover the lesser-known but equally beautiful beaches of the city.",
    excerptEs: "Conoce las playas menos conocidas pero igualmente hermosas de la ciudad.",
    content: "Guarapari possui mais de 30 praias, cada uma com suas características únicas...",
    contentEn: "Guarapari has more than 30 beaches, each with its unique characteristics...",
    contentEs: "Guarapari tiene más de 30 playas, cada una con sus características únicas...",
    author: "Maria Silva",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1613200490958-acbb44189c7b",
    category: "Turismo"
  },
  {
    id: 2,
    title: "A Biodiversidade Marinha de Guarapari",
    titleEn: "The Marine Biodiversity of Guarapari",
    titleEs: "La Biodiversidad Marina de Guarapari",
    excerpt: "Por que Guarapari é conhecida como a Capital Nacional da Biodiversidade Marinha.",
    excerptEn: "Why Guarapari is known as the National Capital of Marine Biodiversity.",
    excerptEs: "Por qué Guarapari es conocida como la Capital Nacional de la Biodiversidad Marina.",
    content: "As águas de Guarapari abrigam uma rica diversidade de vida marinha...",
    contentEn: "The waters of Guarapari house a rich diversity of marine life...",
    contentEs: "Las aguas de Guarapari albergan una rica diversidad de vida marina...",
    author: "João Santos",
    date: "2025-01-08",
    image: "https://images.pexels.com/photos/96389/pexels-photo-96389.jpeg",
    category: "Natureza"
  }
];

export const users = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    registrationDate: "2025-01-01",
    favoriteBeaches: [1, 3, 5],
    reviews: [
      { beachId: 1, rating: 5, comment: "Praia maravilhosa! Muito bem estruturada." },
      { beachId: 3, rating: 4, comment: "Ótima para prática de esportes aquáticos." }
    ]
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@email.com",
    registrationDate: "2025-01-02",
    favoriteBeaches: [2, 4],
    reviews: [
      { beachId: 2, rating: 5, comment: "Lugar perfeito para relaxar!" }
    ]
  }
];

export const reviews = [
  {
    id: 1,
    beachId: 1,
    userId: 1,
    userName: "João Silva",
    rating: 5,
    comment: "Praia maravilhosa! Muito bem estruturada com ótimos restaurantes.",
    commentEn: "Wonderful beach! Very well structured with great restaurants.",
    commentEs: "¡Playa maravillosa! Muy bien estructurada con excelentes restaurantes.",
    date: "2025-01-05",
    likes: 12
  },
  {
    id: 2,
    beachId: 1,
    userId: 2,
    userName: "Maria Santos",
    rating: 4,
    comment: "Muito movimentada, mas tem tudo que precisa.",
    commentEn: "Very busy, but has everything you need.",
    commentEs: "Muy concurrida, pero tiene todo lo que necesitas.",
    date: "2025-01-03",
    likes: 8
  },
  {
    id: 3,
    beachId: 2,
    userId: 1,
    userName: "João Silva",
    rating: 5,
    comment: "Lugar perfeito para relaxar! Muito tranquilo.",
    commentEn: "Perfect place to relax! Very peaceful.",
    commentEs: "¡Lugar perfecto para relajarse! Muy tranquilo.",
    date: "2025-01-04",
    likes: 15
  }
];

export const translations = {
  pt: {
    // Navigation
    home: "Início",
    beaches: "Praias",
    history: "História",
    biodiversity: "Biodiversidade",
    events: "Eventos",
    howToGet: "Como Chegar",
    blog: "Blog",
    login: "Entrar",
    register: "Cadastrar",
    dashboard: "Painel",
    logout: "Sair",
    
    // Home page
    heroTitle: "Descubra Guarapari",
    heroSubtitle: "Capital Nacional da Biodiversidade Marinha",
    heroDescription: "Explore as mais belas praias do Espírito Santo com suas areias monazíticas e águas cristalinas",
    exploreBeaches: "Explorar Praias",
    
    // Beaches
    allBeaches: "Todas as Praias",
    beachRating: "Avaliação",
    beachReviews: "avaliações",
    viewDetails: "Ver Detalhes",
    addToFavorites: "Adicionar aos Favoritos",
    removeFromFavorites: "Remover dos Favoritos",
    
    // Weather
    temperature: "Temperatura",
    condition: "Condição",
    
    // Common
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    save: "Salvar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    
    // Footer
    footerText: "Desenvolvido com ❤️ para Guarapari - ES"
  },
  en: {
    // Navigation
    home: "Home",
    beaches: "Beaches",
    history: "History",
    biodiversity: "Biodiversity",
    events: "Events",
    howToGet: "How to Get",
    blog: "Blog",
    login: "Login",
    register: "Register",
    dashboard: "Dashboard",
    logout: "Logout",
    
    // Home page
    heroTitle: "Discover Guarapari",
    heroSubtitle: "National Capital of Marine Biodiversity",
    heroDescription: "Explore the most beautiful beaches of Espírito Santo with their monazitic sands and crystal clear waters",
    exploreBeaches: "Explore Beaches",
    
    // Beaches
    allBeaches: "All Beaches",
    beachRating: "Rating",
    beachReviews: "reviews",
    viewDetails: "View Details",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    
    // Weather
    temperature: "Temperature",
    condition: "Condition",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    
    // Footer
    footerText: "Developed with ❤️ for Guarapari - ES"
  },
  es: {
    // Navigation
    home: "Inicio",
    beaches: "Playas",
    history: "Historia",
    biodiversity: "Biodiversidad",
    events: "Eventos",
    howToGet: "Cómo Llegar",
    blog: "Blog",
    login: "Iniciar Sesión",
    register: "Registrarse",
    dashboard: "Panel",
    logout: "Salir",
    
    // Home page
    heroTitle: "Descubre Guarapari",
    heroSubtitle: "Capital Nacional de la Biodiversidad Marina",
    heroDescription: "Explora las playas más hermosas de Espírito Santo con sus arenas monazíticas y aguas cristalinas",
    exploreBeaches: "Explorar Playas",
    
    // Beaches
    allBeaches: "Todas las Playas",
    beachRating: "Calificación",
    beachReviews: "reseñas",
    viewDetails: "Ver Detalles",
    addToFavorites: "Agregar a Favoritos",
    removeFromFavorites: "Quitar de Favoritos",
    
    // Weather
    temperature: "Temperatura",
    condition: "Condición",
    
    // Common
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    save: "Guardar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    
    // Footer
    footerText: "Desarrollado con ❤️ para Guarapari - ES"
  }
};