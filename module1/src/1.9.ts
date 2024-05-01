{
  // type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Master",
    age: 25,
    gender: "Male",
    contactNo: "9876543210",
    address: "Mumbai",
  };

  const student2: Student = {
    name: "Bosss",
    age: 20,
    gender: "Male",
    address: "Dilli",
  };

  type Admin = string;

  const name: Admin = "Admin";

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
