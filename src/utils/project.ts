import { useQueryClient } from "react-query";
import { useAuthClient } from "src/context/auth-context";
import {
  CreateProjectMutation,
  CreateProjectMutationVariables,
  GetAllProjectsQuery,
  Sort,
  useCreateProjectMutation,
  useGetAllProjectsQuery,
} from "src/generated/generates";

function useProjectsList(sortBy: Sort) {
  const clien = useAuthClient();
  const { status, data, error, isFetching, isLoading } = useGetAllProjectsQuery<
    GetAllProjectsQuery,
    Error
  >(clien(), {
    sortBy,
  });
  return {
    projects: data?.projects || [],
    error,
    isFetching,
    status,
    isLoading,
  };
}

function useCreateProject() {
  const queryClient = useQueryClient();
  const client = useAuthClient();
  const { mutate, error } = useCreateProjectMutation<Error>(client(), {
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
  });
  return { mutate, error };
}

export { useProjectsList, useCreateProject };
