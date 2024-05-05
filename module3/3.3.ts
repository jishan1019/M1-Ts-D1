{
  //typegurd with typeof and in
  //typeof ----> runtime

  type Params = string | number;

  const add = (param1: Params, param2: Params): Params => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(1, 2);
  const result2 = add("5", 2);

  // in guird

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log("Admin user");
    } else {
      console.log("Normal user");
    }
  };

  const user1: NormalUser = {
    name: "Akib",
  };

  const user2: AdminUser = {
    name: "Akib",
    role: "Admin",
  };
}
