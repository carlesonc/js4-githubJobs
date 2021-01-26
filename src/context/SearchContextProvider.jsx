import React, { useState, createContext } from "react";

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [jobContext, setJobContext] = useState({});
  return <SearchContext.Provider value={{ jobContext, setJobContext }}>{children}</SearchContext.Provider>;
}
