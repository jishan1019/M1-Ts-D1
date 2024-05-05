{
  // utility type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  interface Add {
    (num1: number, num2: number): number;
  }

  const add1: Add = function (num1, num2) {
    return num1 + num2;
  };

  const result: number = add1(1, 2);
}
