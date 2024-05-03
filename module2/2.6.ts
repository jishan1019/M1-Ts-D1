{
  // consttrains

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level web dev";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 123,
    name: "MR.Xbox",
    email: "i@gmail.com",
    devType: "NEXT LEVEL DEVELOPMENT",
  });

  const student2 = addCourseToStudent({
    id: 456,
    name: "MR.Y",
    email: "i@gmail.com",
    hashWas: true,
  });
}
