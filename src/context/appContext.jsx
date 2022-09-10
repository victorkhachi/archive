import { createContext, useState } from "react";

export const appContext = createContext();

const AppContext = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <appContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
      }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
