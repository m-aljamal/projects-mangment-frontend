import {
  FindAllProjectsQuery,
  FindDiscountsQuery,
  FindProjectQuery,
  useCreateDiscountMutation,
  useDeleteDiscountMutation,
  useFindAllProjectsQuery,
  useFindDiscountsQuery,
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
      queryClient.invalidateQueries("findAllProjects");
    },
    onError: (error: Error) => {
      console.log(error);
    },
    onSettled: () => queryClient.invalidateQueries("findAllProjects"),
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

function useCreateDiscount() {
  const queryClient = useQueryClient();
  const client = useAuthClient();
  const { mutate, error } = useCreateDiscountMutation<Error>(client(), {
    onSettled: () => queryClient.invalidateQueries("findAllProjects"),
  });
  return { mutate, error };
}

function useEmployeesListDiscounts(projectId?: string, sortBy?: Sort) {
  const client = useAuthClient();
  const { data, error } = useFindDiscountsQuery<FindDiscountsQuery, Error>(
    client(),
    {
      projectId,
      sortBy,
    }
  );
  return {
    discounts: data?.findDiscounts || [],
    error,
  };
}

function useDeleteDiscount() {
  const queryClient = useQueryClient();
  const client = useAuthClient();
  const { mutate, error } = useDeleteDiscountMutation<Error>(client(), {
    onSettled: () => queryClient.invalidateQueries("findDiscounts"),
  });
  return { mutate, error };
}

export {
  useProjectsList,
  useCreateProject,
  useProject,
  useCreateDiscount,
  useEmployeesListDiscounts,
  useDeleteDiscount,
};
