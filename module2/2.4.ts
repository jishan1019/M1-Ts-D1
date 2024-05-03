{
  //generic with interface
  type GenericTuple<X, Y> = [X, Y];

  type User = {
    name: string;
    email: string;
  };

  interface User1 {
    name: string;
    email: string;
  }

  const userWithId: GenericTuple<number, User> = [
    123,
    {
      name: "mezba",
      email: "info@mezba.com",
    },
  ];

  const userWithId1: GenericTuple<number, User1> = [
    123,
    {
      name: "mezba",
      email: "info@mezba.com",
    },
  ];

  //   Generic interface
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  type PDeveloperSmartWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<PDeveloperSmartWatch> = {
    name: "Poor Developer",
    computer: {
      brand: "Dell",
      model: "Inspiron",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch",
      display: "LED",
    },
  };

  type RDeveloperSmartWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
  };

  const richDeveloper: Developer<RDeveloperSmartWatch> = {
    name: "Rich Developer",
    computer: {
      brand: "ROG",
      model: "RYZON",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Sumsung",
      model: "Apple Watch",
      heartTrack: false,
    },
  };
}
