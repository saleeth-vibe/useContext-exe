import { createContext, useContext, useReducer } from "react";

// Context
const AuthContext = createContext(null);

// Initial state
const initialState = {
  user: null,
  accessToken: null,
};

// Reducer
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };

    case "LOGOUT":
      return {
        user: null,
        accessToken: null,
      };

    case "TOKEN_REFRESHED":
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };

    default:
      return state;
  }
}

// Provider
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}