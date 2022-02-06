import AuthApp from "./screen/AuthApp";
import UnAuthApp from "./screen/UnAuthApp";

function App() {
  const user = true;
  return user ? <AuthApp /> : <UnAuthApp />;
}

export default App;
