// learning function

// Normal Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 5);

// Arrpw Function

const arrowFunction = (num1: number, num2: number = 10): number => num1 + num2;

arrowFunction(2, 10);

// obj ---> function ----> method
const poorUser = {
  name: "Akib",
  balance: 0,
  addBalance(balance: number): string {
    return `My New balance :  ${(this.balance += balance)}`;
  },
};

const arr: number[] = [1, 2, 3, 4, 5, 6];

const newArr = arr.map((ele: number): number => ele * ele);
