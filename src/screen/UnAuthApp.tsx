import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "src/context/auth-context";
import { useAsync } from "src/utils/hook";

interface ILogin {
  username: string;
  password: string;
}

const UnAuthApp = () => {
  const { login }: any = useAuth();
  const { isLoading, run } = useAsync();
  const onSubmit = (data: ILogin) => {
    run(login(data));
  };

  const { register, handleSubmit } = useForm<ILogin>();
  return (
    <div>
      Login form
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="username" />
        <input {...register("password")} placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UnAuthApp;
