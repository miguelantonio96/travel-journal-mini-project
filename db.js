const travelData = [
    {
      id: 1,
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Saona_Island_December_2020.jpg/1920px-Saona_Island_December_2020.jpg",
      location: "REPUBLICA DOMINICANA",
      mapLink: "View on Google Maps",
      mapGoogleLink: "https://www.google.com/maps/place/Saona+Island/@18.1543555,-68.841857,11z/data=!3m1!4b1!4m6!3m5!1s0x8ea61a8fade41217:0x7436be13a91a411c!8m2!3d18.1530876!4d-68.6797264!16zL20vMDczZnhq?entry=ttu",
      title: "Isla Saona",
      dates: {
        start: "12 Jan, 2021",
        end: "24 Jan, 2021",
      },
      description:
        "La Isla Saona es una de las más grandes de la República Dominicana que se encuentra ubicada frente a las costas de la provincia La Altagracia pero pertenece a la provincia La Romana. Es parte del parque nacional Cotubanamá (Antiguo parque nacional Del Este). La isla también es de gran atractivo turístico por sus hermosas playas y bellezas naturales.",
    },
    {
      id: 2,
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Dominicana-Altos_de_Chavon.jpg",
      location: "REPUBLICA DOMINICANA, La Romana",
      mapLink: "View on Google Maps",
      mapGoogleLink: "https://www.google.com/maps/place/Altos+de+Chav%C3%B3n/@18.4223473,-68.8938483,17z/data=!3m1!4b1!4m6!3m5!1s0x8ea8ab4459555555:0xee02e87a28f1e626!8m2!3d18.4223422!4d-68.8912734!16s%2Fm%2F03c1dx6?entry=ttu",
      title: "Altos de Chavón",
      dates: {
        start: "27 May, 2021",
        end: "8 Jun, 2021",
      },
      description:
        "Altos de Chavón is a tourist attraction, a re-creation of a 16th-century Mediterranean–style village, located atop the Chavón River in the city of La Romana, Dominican Republic. It is the most popular attraction in the city and hosts a cultural center, an archeological museum, and an amphitheater.",
    },
    {
      id: 3,
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/4/41/Santa_Barbara_de_Saman%C3%A1_%28Dominican_Republic%29.jpeg",
      location: "REPUBLICA DOMINICANA, Samaná",
      mapLink: "View on Google Maps",
      mapGoogleLink: "https://www.google.com/maps/place/32000+Samana/@19.2076586,-69.3446936,16z/data=!4m6!3m5!1s0x8eaee72b27c60421:0xde564e1f6d9013!8m2!3d19.2030757!4d-69.3387664!16s%2Fm%2F025vdzl?entry=ttu",
      title: "Santa Barbara de Samaná",
      dates: {
        start: "01 Oct, 2021",
        end: "18 Nov, 2021",
      },
      description:
        "Por disposición del gobernador español Francisco Rubio y Peñaranda fue fundada definitivamente la ciudad de Santa Bárbara de Samaná en 1756, siendo sus primeros pobladores familias españolas, concretamente de Islas Canarias. Fue elevada a la categoría de municipio en 1845 al crearse el Distrito Marítimo de Samaná.",
    },{
      id: 1,
      imgURL: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTNaXuiIJFin8HLH8DrUur90AkCh2gS_IWqn60uOJrnYNt9PYxD8D2oCd6bj-0Jbvqji4M_kgBByxbcqtP2ly5E4ldcJ0QdPzA-EiHgHQ",
      location: "REPUBLICA DOMINICANA, Puerto Plata",
      mapLink: "View on Google Maps",
      mapGoogleLink: "https://www.google.com/maps/place/Puerto+Plata+Cable+Car/@19.7881348,-70.7125474,17z/data=!3m1!4b1!4m6!3m5!1s0x8eb1ee7a1042d7d1:0x13f61b4461237ff2!8m2!3d19.7881298!4d-70.7099725!16s%2Fg%2F1tp902vj?entry=ttu",
      title: "Teleferico Puerto Plata Cable Car",
      dates: {
        start: "12 Jan, 2021",
        end: "24 Jan, 2021",
      },
      description:
        "Explorar Puerto Plata se torna incompleto sin experimentar el teleférico, el único en toda la región caribeña que ha estado operando de manera continua desde 1975. Este emocionante viaje de 10 minutos te transporta a 800 metros sobre el paisaje mágico de Puerto Plata, brindándote vistas panorámicas del mar al norte y las exuberantes llanuras que, al final de la travesía, te conducen a la majestuosa Loma Isabel de Torres.",
    },
    {
      id: 2,
      imgURL: "https://lh3.googleusercontent.com/p/AF1QipOcC99QWqHOcOkSRtQiVGCZIeEp1AYGx7IbLtF6=s680-w680-h510",
      location: "REPUBLICA DOMINICANA, Santo Domingo",
      mapLink: "View on Google Maps",
      mapGoogleLink: "https://www.google.com/maps/place/Alc%C3%A1zar+de+Col%C3%B3n/@18.4775087,-69.8853257,17z/data=!3m1!4b1!4m6!3m5!1s0x8eaf881591b34221:0x7878c2285851cb91!8m2!3d18.4775036!4d-69.8827508!16s%2Fm%2F04n5skk?entry=ttu",
      title: "Alcázar de Colón",
      dates: {
        start: "27 May, 2021",
        end: "8 Jun, 2021",
      },
      description:
        "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    },
    {
      id: 3,
      imgURL: "https://www.senatorpuertoplatasparesort.com/wp-content/uploads/2019/10/playa-bavaro-punta-cana-1024x606.jpg",
      location: "REPUBLICA DOMINICANA, Punta Cana",
      mapLink: "View on Google Maps",
      mapGoogleLink: "https://www.google.com/maps/place/B%C3%A1varo,+23000+Punta+Cana/@18.6846123,-68.4818089,13z/data=!3m1!4b1!4m6!3m5!1s0x8ea8eb9681cb2fbd:0xd2f0b44f2d9fd047!8m2!3d18.6853385!4d-68.4501446!16s%2Fm%2F03gqw0s?entry=ttu",
      title: "PLAYA BÁVARO, PUNTA CANA",
      dates: {
        start: "01 Oct, 2021",
        end: "18 Nov, 2021",
      },
      description:
        "Bávaro Beach, la playa más famosa de Punta Cana y, probablemente, de toda la isla. Aunque es una playa muy concurrida, está considerada una de las mejores por la infinidad de servicios que ofrece como restaurantes, bares, resorts de lujo y todo incluido, así como actividades recreativas y excursiones.",
    },
  ];
  
  export default travelData;


