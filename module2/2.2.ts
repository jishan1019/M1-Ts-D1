{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "Akib",
    age: 20,
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user2: User2 = {
    name: "Akib",
    age: 20,
  };

  type UserWithRole1 = User1 & { role: string };

  const user3: UserWithRole1 = {
    name: "Jishan",
    age: 21,
    role: "Admin",
  };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user4: UserWithRole2 = {
    name: "Sakib",
    age: 65,
    role: "Admin",
  };

  //js ---> object  ---> object , array ---> object , funtion ---> object

  type Roll = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll = [1, 2, 3, 4, 5, 6, 7, 8];

  const rollNumber2: Roll2 = [1, 2, 3, 4, 5, 6, 7, 8];

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;

  const add2: Add2 = (num1, num2) => num1 + num2;
}
