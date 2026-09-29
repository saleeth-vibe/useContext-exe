import { useAuth } from "./auth/AuthContext";

function App() {
  const { user, accessToken, dispatch } = useAuth();

  function login() {
    dispatch({
      type: "LOGIN",
      payload: {
        user: {
          id: 1,
          name: "Saleeth",
        },
        accessToken: "demo-token-123",
      },
    });
  }

  function logout() {
    dispatch({
      type: "LOGOUT",
    });
  }

  function refreshToken() {
    dispatch({
      type: "TOKEN_REFRESHED",
      payload: {
        accessToken: "new-demo-token-456",
      },
    });
  }

  return (
    <div>
      <h1>AuthContext Demo</h1>

      <p>
        User: {user ? user.name : "Not logged in"}
      </p>

      <p>
        Token: {accessToken || "No token"}
      </p>

      <button onClick={login}>
        Login
      </button>

      <button onClick={refreshToken}>
        Refresh Token
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default App;