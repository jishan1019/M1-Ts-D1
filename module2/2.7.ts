{
  // constrains with key of oparator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Ownar1 = "bike" | "car" | "ship";

  type Ownar2 = keyof Vehicle;

  const person1: Ownar1 = "bike";
  const person2: Ownar2 = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "MR.S",
    age: 35,
    address: "Dhaka",
  };

  const car = {
    name: "COROLLA",
    year: 2023,
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "name");
}
