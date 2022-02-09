import { useAuth } from "./context/auth-context";
import AuthApp from "./screen/AuthApp";
import UnAuthApp from "./screen/UnAuthApp";

function App() {
  const { user }: any = useAuth();

  return user ? <AuthApp /> : <UnAuthApp />;
}

export default App;
