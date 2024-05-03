{
  // Generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //   const mentors: string[] = ["x", "y", "z"];
  //   const mentors: Array<string> = ["x", "y", "z"];
  const mentors: GenericArray<string> = ["x", "y", "z"];

  //   const bolArray: boolean[] = [true, false, false];
  //   const bolArray: Array<boolean> = [true, false, false];
  const bolArray: GenericArray<boolean> = [true, false, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "mezba",
      age: 30,
    },

    {
      name: "Jhankar",
      age: 40,
    },
  ];

  //   generic tuplue

  type GenericTuple<X, Y> = [X, Y];

  const man: GenericTuple<string, string> = ["MR.X", "MR.Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    {
      name: "mezba",
      email: "info@mezba.com",
    },
  ];
}
