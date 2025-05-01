import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserData } from '../services/getUserData/getUserData';

type UserData = {
  curso?: string;
  name?: string;
  email?: string;
  password?: string;
  nivel?: number;
  fase?: number;
};

type UserContextType = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
};

const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await getUserData();
      if (data) setUserData(data);
    };

    loadUser();
  }, []);

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
