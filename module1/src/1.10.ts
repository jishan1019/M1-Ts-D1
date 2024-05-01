{
  // Union Type
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "frontendDeveloper" | "exportDeveloper";
  //   type Developer = FrontendDeveloper | FullStackDeveloper;
  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";
  //   type User = {
  //     name: string;
  //     email: string;
  //     gender: string;
  //     bloodGroups: "O+" | "A+";
  //   };
  //   const user: User = {
  //     name: "juniorDeveloper",
  //     email: "ik@gmail.com",
  //     gender: "male",
  //     bloodGroups: "O+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const newDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JavaScript"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
