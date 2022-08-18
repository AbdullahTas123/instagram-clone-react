import { createContext } from "react";

const FirebaseContext = createContext(null);

export default FirebaseContext;

// provider -------component 1------- (firebase init here)
// -------component 2-------
// -------component 3-------
// consumer -------component 4------- (firebase init here)
// -------component 5-------
// -------component 6-------
// -------component 7-------
// -------component 8-------
// consumer -------component 9------- (firebase init here)