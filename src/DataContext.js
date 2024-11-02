import { createContext } from "react"; // Correct import statement

const DataContext = createContext({}); // Create the context
export const DataContextProvider = DataContext.Provider; // Export the Provider component
export default DataContext; // Export the context itself
