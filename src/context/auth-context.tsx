import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import * as auth from "src/utils/auth-provider";
import { useAsync } from "src/utils/hook";

async function bootstrapAppData() {
  let user = null;
  const accessToken = await auth.getToken();
  if (accessToken) {
    user = await auth.currentUser(accessToken);
  }

  return user;
}

const AuthContext = createContext(null);

function AuthProvider(props: any) {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    setData,
    run,
  } = useAsync();

  useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const login = useCallback(
    (form) => auth.login(form).then((user) => setData(user)),
    [setData]
  );

  const logout = useCallback(() => {
    auth.logout();
    setData(null);
  }, [setData]);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  if (isLoading || isIdle) return <p>loading.....</p>;

  if (isError) return <p>error {isError}</p>;

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }
  throw new Error(`unexpected state ${status}`);
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
