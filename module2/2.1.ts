{
  //type assertion

  let anything: any;

  anything = "Next level web development";

  anything = 123;

  (anything as number).toFixed(2);

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return `The converted value is ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result = kgToGm(100) as number;
  const result2 = kgToGm("10") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
