export const siteMeta = {
  brand: "Mont Blanc Carbone",
  siteName: "Mont Blanc Carbone",
  siteUrl: "https://montblanccarbone.com",
  phoneDisplay: "06 80 42 30 31",
  phoneHref: "tel:+33680423031",
  email: "contact@montblanccarbone.com",
  emailHref: "mailto:contact@montblanccarbone.com",
  address: "Bonneville 74130, Haute-Savoie",
  heroImage: "/images/mont-blanc-carbone-showroom.png",
  mascotImage: "/images/mont-blanc-carbone-showroom.png",
};

export const navigationItems = [
  { label: "Plaques Carbone", href: "/plaques-carbone" },
  { label: "Tissus Carbone", href: "/tissus-carbone" },
  { label: "Applications", href: "/applications" },
  { label: "Zones", href: "/zones-desservies-haute-savoie" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const navigationMenu = {
  label: "Catalogue Carbone",
  items: [{ label: "Accueil", href: "/" }, ...navigationItems],
};

export const homeContent = {
  hero: {
    eyebrow: "Plaques et tissus en fibre de carbone - Bonneville 74130",
    titleTop: "MONT BLANC",
    titleBottom: "CARBONE",
    mobileTitleLines: ["Mont Blanc", "Carbone", "Haute Savoie"],
    intro:
      "Plaques carbone 600 x 600 mm de 1 a 7 mm et tissus techniques pour professionnels, artisans, fabricants et particuliers exigeants.",
    bullets: ["Plaques 1 a 7 mm", "Format 600 x 600 mm", "Conseil technique"],
    primaryCta: "Demander un devis",
    secondaryCta: "Appeler",
  },
  intro: {
    title: "Des materiaux composites choisis pour la rigidite, la legerete et la precision.",
    left:
      "Mont Blanc Carbone fournit des plaques en fibre de carbone rigides et des tissus carbone destines aux projets ou le poids, la resistance et la finition comptent vraiment.",
    right:
      "Base a Bonneville, nous accompagnons les besoins industriels, automobiles, nautiques, aeronautiques, sportifs et les fabrications sur mesure en Haute-Savoie et autour de Geneve.",
  },
  services: [
    {
      slug: "plaques-carbone-600",
      image: "/images/mont-blanc-carbone-showroom.png",
      title: "Plaques Carbone",
      subtitle: "1 a 7 mm - 600 x 600 mm",
      delay: 0,
      offset: false,
    },
    {
      slug: "tissus-carbone-techniques",
      image: "/images/mont-blanc-carbone-showroom.png",
      title: "Tissus Techniques",
      subtitle: "Selection performance",
      delay: 0.1,
      offset: true,
    },
    {
      slug: "conseil-composite",
      image: "/images/mont-blanc-carbone-showroom.png",
      title: "Conseil Materiau",
      subtitle: "Epaisseur, usage, finition",
      delay: 0.2,
      offset: false,
    },
  ],
  process: [
    {
      title: "Preciser l'application",
      description:
        "Indiquez l'usage, les contraintes, l'epaisseur souhaitee, la quantite, la finition attendue et le delai ideal.",
    },
    {
      title: "Choisir plaque ou tissu",
      description:
        "Nous orientons vers une plaque carbone rigide 600 x 600 mm ou vers un tissu carbone adapte a la stratification et a la fabrication composite.",
    },
    {
      title: "Recevoir une reponse claire",
      description:
        "Vous recevez un retour professionnel avec disponibilite, conseil technique, prix et modalites de retrait ou d'expedition.",
    },
  ],
  solutions: [
    {
      name: "Plaques 1-3 mm",
      price: "Fines",
      description:
        "Pour habillage, protection, pieces legeres, gabarits, supports, prototypes et finitions carbone visibles.",
      features: ["Legerete", "Finition nette", "Facile a integrer"],
      featured: false,
      delay: 0,
      href: "/plaques-carbone",
    },
    {
      name: "Plaques 4-7 mm",
      price: "Rigides",
      description:
        "Pour supports techniques, pieces structurelles, renforts, outillage, automobile, nautisme et industrie.",
      features: ["Haute rigidite", "Format 600 x 600 mm", "Conseil epaisseur"],
      featured: true,
      delay: 0.1,
      href: "/contact",
    },
    {
      name: "Tissus carbone",
      price: "Technique",
      description:
        "Pour stratification, moulage, reparation, renfort, fabrication composite et pieces sur mesure.",
      features: ["Tissus selectionnes", "Usage pro ou atelier", "Projet sur mesure"],
      featured: false,
      delay: 0.2,
      href: "/tissus-carbone",
    },
  ],
  proof: {
    quote:
      "Un interlocuteur local, des materiaux serieux et une reponse technique avant la commande.",
    author: "Mont Blanc Carbone",
    meta: "Bonneville - Haute-Savoie - Geneve",
  },
};

export const productHighlights = [
  {
    title: "Plaques carbone 600 x 600 mm",
    text: "Epaisseurs disponibles de 1 mm a 7 mm pour choisir entre legerete, rigidite et tenue mecanique.",
  },
  {
    title: "Tissus en fibre de carbone",
    text: "Tissus techniques pour stratification, renforts, moulage, reparation composite et fabrication sur mesure.",
  },
  {
    title: "Clients professionnels et exigeants",
    text: "Industrie, artisanat, bureaux d'etudes, automobile, aeronautique, nautisme, sport et particuliers avertis.",
  },
  {
    title: "Conseil avant commande",
    text: "Aide au choix de l'epaisseur, du type de materiau et de la quantite selon votre application reelle.",
  },
];

export const thicknesses = [
  { value: "1 mm", use: "Habillage, decoration technique, caches, protections legeres." },
  { value: "2 mm", use: "Pieces legeres, supports fins, panneaux de finition, prototypes." },
  { value: "3 mm", use: "Bon compromis rigidite/poids pour projets atelier et automobile." },
  { value: "4 mm", use: "Plaque rigide polyvalente pour supports, renforts et pieces techniques." },
  { value: "5 mm", use: "Rigidite renforcee pour outillage, assemblage et contraintes elevees." },
  { value: "6 mm", use: "Pieces structurelles, platines, gabarits robustes et usages intensifs." },
  { value: "7 mm", use: "Plaque epaisse pour demandes exigeantes et forte tenue mecanique." },
];

export const applications = [
  "Automobile et sport mecanique",
  "Aeronautique et drones",
  "Nautisme et environnement humide",
  "Industrie et bureaux d'etudes",
  "Sport, loisirs et competition",
  "Fabrication sur mesure",
  "Prototypage et outillage",
  "Decoration technique haut de gamme",
];

export const localAreas = [
  "Bonneville",
  "Cluses",
  "Sallanches",
  "La Roche-sur-Foron",
  "Annecy",
  "Geneve",
  "Chamonix",
  "Haute-Savoie",
  "Vallée de l'Arve",
];

export const deepPages = [
  {
    href: "/plaques-carbone",
    title: "Plaques carbone 1 a 7 mm",
    text: "Detail des epaisseurs, usages conseilles et format 600 x 600 mm pour projets techniques.",
  },
  {
    href: "/tissus-carbone",
    title: "Tissus en fibre de carbone",
    text: "Tissus techniques pour stratification, moulage, renfort et fabrication composite.",
  },
  {
    href: "/applications",
    title: "Applications carbone",
    text: "Automobile, aeronautique, nautisme, industrie, sport, prototypage et pieces sur mesure.",
  },
  {
    href: "/zones-desservies-haute-savoie",
    title: "Bonneville, Geneve, Haute-Savoie",
    text: "Presence locale et demandes autour de Bonneville, Cluses, Sallanches, Annecy et Geneve.",
  },
  {
    href: "/faq",
    title: "Questions techniques",
    text: "Choix de l'epaisseur, difference plaque/tissu, commande, devis et conseils pratiques.",
  },
  {
    href: "/contact",
    title: "Demande de devis",
    text: "Formulaire de capture pour envoyer une demande claire par mail a Mont Blanc Carbone.",
  },
];

export const pointsFortsContent = {
  eyebrow: "Points forts",
  title: "Des plaques et tissus carbone selectionnes pour les projets exigeants.",
  intro:
    "Mont Blanc Carbone met l'accent sur la qualite des materiaux, la lisibilite de la gamme et le conseil technique.",
  items: [
    {
      number: "01",
      title: "Gamme claire",
      text: "Plaques carbone 600 x 600 mm disponibles de 1 mm a 7 mm pour choisir rapidement la bonne epaisseur.",
    },
    {
      number: "02",
      title: "Materiaux performants",
      text: "Fibre de carbone reconnue pour son excellent rapport rigidite, poids et resistance.",
    },
    {
      number: "03",
      title: "Usage professionnel",
      text: "Solutions adaptees aux ateliers, fabricants, bureaux d'etudes et particuliers qui veulent un resultat propre.",
    },
    {
      number: "04",
      title: "Contact direct",
      text: "Un interlocuteur base a Bonneville pour cadrer votre besoin, votre delai et votre application.",
    },
  ],
};

export const faqContent = [
  {
    question: "Quelle epaisseur de plaque carbone choisir ?",
    answer:
      "Pour une finition legere, 1 a 3 mm suffit souvent. Pour une plaque rigide ou un support technique, 4 a 7 mm offre davantage de tenue. Le choix depend de la charge, de la portee, des fixations et de l'usage.",
  },
  {
    question: "Quel est le format des plaques carbone ?",
    answer:
      "Mont Blanc Carbone propose des plaques en fibre de carbone au format 600 x 600 mm, avec des epaisseurs de 1 mm a 7 mm.",
  },
  {
    question: "Vendez-vous aussi du tissu en fibre de carbone ?",
    answer:
      "Oui. Nous proposons des tissus techniques en fibre de carbone pour stratification, moulage, reparation, renfort et fabrication composite sur mesure.",
  },
  {
    question: "Les materiaux conviennent-ils a l'automobile ou au nautisme ?",
    answer:
      "Oui. Les plaques et tissus carbone peuvent convenir a l'automobile, au sport mecanique, au nautisme, a l'aeronautique, a l'industrie et aux projets sportifs, selon la conception de la piece.",
  },
  {
    question: "Puis-je demander un conseil avant de commander ?",
    answer:
      "Oui. Envoyez votre application, l'epaisseur envisagee, la quantite, les dimensions utiles et vos contraintes. Nous vous repondons avec une orientation claire.",
  },
  {
    question: "Mont Blanc Carbone est-il proche de Geneve ?",
    answer:
      "Oui. L'entreprise est basee a Bonneville 74130, en Haute-Savoie, avec des demandes possibles autour de Cluses, Sallanches, Annecy, Geneve et la Vallee de l'Arve.",
  },
];
