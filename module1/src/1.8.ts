{
  //Object discructure

  const user = {
    id: 123,
    name: {
      firstName: "John",
      middleName: "Von",
      lastName: "Newman",
    },

    contactNo: "0171111111",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { firstName: midName },
  } = user;

  //Array discructure

  const arr = ["Rose", "John", "Mon", "Sagor", "racel", "Sakib", "John"];

  const [, , bestFriend, ...rest] = arr;
}
