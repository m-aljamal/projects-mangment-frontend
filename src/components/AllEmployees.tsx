import React from "react";
import { useForm } from "react-hook-form";
import { Role } from "src/generated/generates";
import { useCreateEmployee, useEmployeesList } from "src/utils/employees";

const AllEmployees = () => {
  const { employees, error, isLoading } = useEmployeesList();

  return (
    <div>
      <CreateEmployee />
      <h2>جميع الموظفين</h2>
      {employees?.map((employee) => (
        <div key={employee.id}>
          <h2>{employee.name}</h2>
          <p>id: {employee.id}</p>
        </div>
      ))}
    </div>
  );
};

export default AllEmployees;

const CreateEmployee = () => {
  interface IEmployee {
    name: string;
    salary: number;
    projectId: string;
    role: Role;
    password: string;
    username: string;
  }

  const { error, mutate } = useCreateEmployee();

  const { register, handleSubmit } = useForm<IEmployee>();

  const onSubmit = (data: IEmployee) => {
    mutate({
      name: data.name,
      username: data.name,
      password: data.password,
      role: Role.Admin,
      projectId: data.projectId,
      salary: +data.salary,
    });
  };

  return (
    <div>
      <h2>إضافة موظف</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("projectId")} placeholder="ProjectId" />
        <input {...register("salary")} placeholder="Salary" type="number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
