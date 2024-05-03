{
  // map type

  const arrOfNumber: number[] = [1, 2, 3, 4, 5];

  const arrOfString: string[] = arrOfNumber.map((number) => number.toString());

  console.log(arrOfString);

  type ArrayNumber = {
    height: number;
    width: number;
  };

  type ArrString = {
    [key in keyof ArrayNumber]: string;
  };
}
