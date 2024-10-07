type Country = {
    name: string;
    population: string;
    capital: string;
  };
  
  const countries: { [key: string]: Country } = {
    Pakistan: {
      name: "Pakistan",
      population: "220 million",
      capital: "Islamabad",
    },
    Canada: {
      name: "Canada",
      population: "37 million",
      capital: "Ottawa",
    },
    Turkey: {
      name: "Turkey",
      population: "84 million",
      capital: "Ankara",
    },
    Egypt: {
      name: "Egypt",
      population: "100 million",
      capital: "Cairo",
    },
    Australia: {
      name: "Australia",
      population: "25 million",
      capital: "Canberra",
    },
  };
  
  export default countries;
  