import React from "react";
import { useAuth } from "src/context/auth-context";
import AdminApp from "./AdminApp";
import UserApp from "./UserApp";

const AuthApp = () => {
  const { user }: any = useAuth();
  return user.role === "ADMIN" ? <AdminApp /> : <UserApp />;
};

export default AuthApp;
