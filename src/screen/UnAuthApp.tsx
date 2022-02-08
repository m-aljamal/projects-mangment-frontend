import React from "react";
import { useForm } from "react-hook-form";
import { login } from "src/utils/auth-provider";

interface ILogin {
  username: string;
  password: string;
}

const UnAuthApp = () => {
  const onSubmit = (data: ILogin) => {
    login(data.username, data.password);
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
