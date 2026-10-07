export interface Experience {
  icon: string;
  title: string;
  description: string;
}

export interface VisitStep {
  number: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
  size?: "normal" | "large" | "tall";
}

export const parkInfo = {
  name: "Parque Avestruz",
  location: "Hacienda El Diamante · Puerto López, Meta",
  schedule: "Todos los días · 9:00 AM — 4:00 PM",
  price: "$42.000",
  whatsapp: "573000000000",
};

export const experiences: Experience[] = [
  {
    icon: "🦤",
    title: "Interactúa",
    description:
      "Acércate a nuestros avestruces, aprende sobre ellos y vive una experiencia diferente.",
  },
  {
    icon: "🌿",
    title: "Explora",
    description:
      "Descubre los senderos, paisajes y espacios naturales de la Hacienda El Diamante.",
  },
  {
    icon: "📸",
    title: "Comparte",
    description:
      "Llévate fotografías y recuerdos de una experiencia que difícilmente olvidarás.",
  },
];

export const visitSteps: VisitStep[] = [
  {
    number: "01",
    title: "Llegada",
    description:
      "Llega a la Hacienda El Diamante y prepárate para comenzar la experiencia.",
  },
  {
    number: "02",
    title: "Bienvenida",
    description:
      "Recibe las indicaciones necesarias antes de iniciar el recorrido.",
  },
  {
    number: "03",
    title: "Conoce los avestruces",
    description:
      "Acércate, aprende sobre ellos y disfruta de la interacción con estos increíbles animales.",
  },
  {
    number: "04",
    title: "Explora",
    description:
      "Recorre los espacios naturales y disfruta del entorno del parque.",
  },
  {
    number: "05",
    title: "Disfruta",
    description:
      "Completa tu visita con gastronomía, fotografías y recuerdos para compartir.",
  },
];

export const gallery: GalleryItem[] = [
  {
    image: "/images/gallery/ostrich-01.jpg",
    alt: "Visitantes interactuando con un avestruz",
    size: "large",
  },
  {
    image: "/images/gallery/ostrich-02.jpg",
    alt: "Avestruz en el parque",
    size: "normal",
  },
  {
    image: "/images/gallery/ostrich-03.jpg",
    alt: "Paisaje natural del parque",
    size: "tall",
  },
  {
    image: "/images/gallery/ostrich-04.jpg",
    alt: "Experiencia familiar en el parque",
    size: "normal",
  },
  {
    image: "/images/gallery/ostrich-05.jpg",
    alt: "Avestruz caminando",
    size: "normal",
  },
  {
    image: "/images/gallery/ostrich-06.jpg",
    alt: "Naturaleza del Meta",
    size: "large",
  },
];