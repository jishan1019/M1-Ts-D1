{
  // function with generic

  const createArr = (param: string): string[] => {
    return [param];
  };

  const createArr1 = <T>(param: T): T[] => {
    return [param];
  };

  type User = {
    name: string;
    email: string;
  };

  const result1 = createArr("Bangladeshi");
  const result2 = createArr1<boolean>(true);
  const result3 = createArr1<string>("Bangladeshi");

  const result4 = createArr1<User>({ name: "Hello", email: "i@gmail.com" });

  const creatArrWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result5 = creatArrWithTuple<string, number>("Bangladeshi", 20);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web dev";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "MR.Xbox",
    email: "i@gmail.com",
    devType: "NEXT LEVEL DEVELOPMENT",
  });

  const student2 = addCourseToStudent({
    name: "MR.Y",
    email: "i@gmail.com",
    hashWas: true,
  });
}
