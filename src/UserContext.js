import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const storeUserData = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, storeUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
