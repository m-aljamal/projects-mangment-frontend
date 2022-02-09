import React from "react";
import { useAuth } from "src/context/auth-context";

const AuthApp = () => {
  const { user, logout }: any = useAuth();

  return (
    <div>
      <p>التطبيق</p>
      <div style={{ display: "flex" }}>
        <p>الاسم:</p>
        <p>{user.name}</p>
      </div>
      <div>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
};

export default AuthApp;
