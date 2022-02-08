import { createContext, useEffect } from "react";
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
    data,
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

  
}
