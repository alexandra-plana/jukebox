import React from 'react';

const AuthContext = React.createContext({ Token: '' });
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
export const useAuthContext = () => React.useContext(AuthContext);
