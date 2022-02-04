import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import {
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables,
  CreateProjectMutationVariables,
  FindAllEmployeeQuery,
  useCreateEmployeeMutation,
  useFindAllEmployeeQuery,
} from "../generated/generates";
import graphqlRequestClient from "../lib/graphqlRequestClient";

const AllEmployees = () => {
  const { data, error } = useFindAllEmployeeQuery<FindAllEmployeeQuery, Error>(
    graphqlRequestClient
  );

  return (
    <div>
      <CreateEmployee />
      <h2>جميع الموظفين</h2>
      {data?.employees.map((employee) => (
        <div key={employee.id}>
          <h2>{employee.name}</h2>
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
  }
  const queryClient = useQueryClient();
  const { mutate, error } = useCreateEmployeeMutation<Error>(
    graphqlRequestClient,
    {
      onSuccess: (
        data: CreateEmployeeMutation,
        _variables: CreateEmployeeMutationVariables,
        _context: unknown
      ) => {
        queryClient.invalidateQueries("findAllEmployee");
        if (data.createEmployee) {
          console.log(data);
        }
      },
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  const { register, handleSubmit } = useForm<IEmployee>();

  const onSubmit = (data: IEmployee) => {
    mutate({ ...data, salary: +data.salary });
  };

  return (
    <div>
      <h2>إضافة موظف</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("projectId")} placeholder="ProjectId" />
        <input {...register("salary")} placeholder="Salary" type="number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
