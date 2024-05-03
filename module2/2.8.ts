{
  // async ts

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Somthing";

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const showData = async () => {
    const data: string = await createPromise();
    console.log(data);
  };

  showData();

  const getTodo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
  };

  getTodo();
}
