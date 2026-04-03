import { createContext, useState } from "react";

// Create Context
export const SearchContext = createContext();

// Provider
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;