type UserType = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  function createOrUpdateUser(data: Partial<UserType>): UserType {
    const defaultUser: UserType = {
      name: "",
      surname: "",
      email: "",
      password: "",
    };
  
    return { ...defaultUser, ...data };
  }
  
  const newUser = createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
  });