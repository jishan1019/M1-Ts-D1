{
  const searchName = (value: string) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("Theere is nothing to search");
    }
  };

  searchName("Some");

  const getSpeed = (value: unknown) => {
    if (typeof value === "number") {
      console.log(value * 100);
    } else {
      console.log("Theere is nothing to search");
    }
  };

  getSpeed(20);

  const throwError = (err: string): never => {
    throw new Error(err);
  };

  throwError("Something went wrong");
}
