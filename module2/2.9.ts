{
  // conditional type

  type a1 = null;

  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditonal type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheike = {
    bikes: string;
    cars: string;
    ship: string;
  };

  type CheckVechicle<T> = T extends keyof Sheike ? true : false;

  type HasBike = CheckVechicle<"bikes">;
}
