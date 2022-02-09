import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useAuthClient } from "src/context/auth-context";
import {
  CreateProjectMutation,
  CreateProjectMutationVariables,
  GetAllProjectsQuery,
  useCreateProjectMutation,
  useGetAllProjectsQuery,
} from "../generated/generates";
import graphqlRequestClient from "../lib/graphqlRequestClient";

const AllProjects = () => {
  const clien = useAuthClient();
  const { status, data, error, isFetching } = useGetAllProjectsQuery<
    GetAllProjectsQuery,
    Error
  >(clien());

  return (
    <div>
      <h2>جميع المشاريع</h2>
      <CreateProject />
      <div className="mt-8">
        {data?.projects.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;

const CreateProject = () => {
  interface IProject {
    name: string;
    type: string;
  }

  const queryClient = useQueryClient();

  const { mutate, error } = useCreateProjectMutation<Error>(
    graphqlRequestClient(),
    {
      onSuccess: (
        data: CreateProjectMutation,
        _variables: CreateProjectMutationVariables,
        _context: unknown
      ) => {
        queryClient.invalidateQueries("getAllProjects");
      },
      onError: (error: Error) => {
        console.log(error);
      },
      onSettled: () => queryClient.invalidateQueries("getAllProjects"),
    }
  );

  const { register, handleSubmit } = useForm<IProject>();

  const onSubmit = (data: IProject) => {
    mutate(data);
  };

  return (
    <div>
      <h2>انشاء مشروع</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="الاسم" />
        <input {...register("type")} placeholder="النوع" />
        <button type="submit">انشاء</button>
      </form>
    </div>
  );
};
