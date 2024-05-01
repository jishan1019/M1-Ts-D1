{
  // Spread  Oparator
  const bros1: string[] = ["Mir", "Mezba", "Abedin"];
  const bros2: string[] = ["Korim", "rohim", "Hamim"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Sakib",
    tonmoy: "Rakib",
    cloud: "Akib",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   Rest Oparator

  //   const gridFriends = (friend1: string, friend2: string, friend3: string) => {
  //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  //   };

  const gridFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  gridFriends("Abul", "Kaabul", "Babul");
}
