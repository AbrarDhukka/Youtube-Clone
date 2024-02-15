// import { createContext, useContext, useState } from "react";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(true);
//   const menuHandler = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <DataContext.Provider value={{ isMenuOpen, menuHandler }}>
//       {children}
//     </DataContext.Provider>
//   );
// };
// export const useData = () => {
//     return useContext(DataContext);
//   };