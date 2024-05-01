{
  const age: number = 15;

  if (age > 15) {
    console.log("Adult age");
  } else {
    console.log("Child age");
  }

  const isAdult = age > 15 ? "Adult" : "Child";

  //   Nulish qualishin oparator
  // numm | undifind --- > descition making

  const isAuthnticate = undefined;

  const result1 = isAuthnticate ?? "Guiest";

  console.log(result1);
}
