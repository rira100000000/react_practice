import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const changeLoginStatus = () => setIsLogin(!isLogin);

  return (
    <LoginContext.Provider value={{ isLogin, changeLoginStatus }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};
