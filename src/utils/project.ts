import {
  FindAllProjectsQuery,
  FindProjectQuery,
  useFindAllProjectsQuery,
  useFindProjectQuery,
} from "./../generated/generates";
import { useQueryClient } from "react-query";
import { useAuthClient } from "src/context/auth-context";
import {
  CreateProjectMutation,
  CreateProjectMutationVariables,
  Sort,
  useCreateProjectMutation,
} from "src/generated/generates";

function useProjectsList(sortBy: Sort) {
  const clien = useAuthClient();
  const { status, data, error, isFetching, isLoading } =
    useFindAllProjectsQuery<FindAllProjectsQuery, Error>(clien(), {
      sortBy,
    });
  return {
    projects: data?.findAllProjects || [],
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

function useProject(id: string) {
  const client = useAuthClient();

  const { data, status, error } = useFindProjectQuery<FindProjectQuery, Error>(
    client(),
    { id }
  );
  return {
    project: data?.findProject,
    status,
    error,
  };
}
export { useProjectsList, useCreateProject, useProject };
