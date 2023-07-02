const flightsData = [
  {
    id: 1,
    airline: "Air India",
    departureTime: "10:00 AM",
    landingTime: "12:00 PM",
    oneWayPrice: 2000,
    stops: 0,
    stopsFromPune: 0,
    popular: true,
    popularity: 5,
  },
  {
    id: 2,
    airline: "IndiGo",
    departureTime: "12:30 PM",
    landingTime: "02:30 PM",
    oneWayPrice: 2500,
    stops: 1,
    stopsFromPune: 1,
    popular: true,
    popularity: 4,
  },
  {
    id: 3,
    airline: "Vistara",
    departureTime: "03:00 PM",
    landingTime: "05:00 PM",
    oneWayPrice: 3000,
    stops: 0,
    stopsFromPune: 0,
    popular: false,
    popularity: 3,
  },
  // Add more flights here
];

export default flightsData;
