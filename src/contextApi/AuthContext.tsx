

import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie'
// https://areveibackend.onrender.com/api/v1/users/get-user

export type User = {
  name: string;
  GoogleId: string;
  GooglePic: string;
  authority: string;
  email: string;
  country: string;
  phone: string;
  userid: string;
  access : string;
  refresh : string
};

export const INITIAL_USER = {
  name: "",
  GoogleId: "",
  GooglePic: "",
  authority: "",
  email: "",
  country: "",
  phone: "",
  userid: "",
  access : "",
  refresh : ""
};


const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  darkTheme: true,
  setDarkTheme: () => { },
  sideBarOpen: true,
  setSideBarOpen: () => { },
  setUser: () => { },
  setIsAuthenticated: () => { },
  checkAuthUser: async () => false as boolean,
};

type IContextType = {
  user: User;
  isLoading: boolean;
  isAuthenticated: boolean;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: (userToken:string) => Promise<boolean>;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const checkAuthUser = async (userToken:string) => {
    setIsLoading(true);
    try {
      const respone = await fetch("https://areveibackend.onrender.com/api/v1/users/get-user", {
        method: 'GET',
        headers: {
          'Authorisation': `Bearer ${userToken}`
        },
        credentials: "include"
      });
      const currentAccount = await respone.json();
      if (currentAccount.success === true) {
        setUser({
          name: currentAccount.data.name,
          GoogleId: currentAccount.data.GoogleId,
          GooglePic: currentAccount.data.GooglePic,
          authority: currentAccount.data.authority,
          email: currentAccount.data.email,
          country: currentAccount.data.country,
          phone: currentAccount.data.phone,
          userid: currentAccount.data._id,
          access : currentAccount.data.accessToken,
          refresh : currentAccount.data.refreshToken
        });
        setIsAuthenticated(true);

        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const userToken = localStorage.getItem("accessTokenArevei");
        if (userToken!==null) {
          checkAuthUser(userToken);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial check when the component mounts
    const userToken = localStorage.getItem("accessTokenArevei");
    if (userToken!==null) {
      checkAuthUser(userToken);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
    darkTheme,
    setDarkTheme,
    sideBarOpen,
    setSideBarOpen
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);