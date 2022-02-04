import { useQueryClient } from "react-query";
import {
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables,
  DicByCurrentMonthQuery,
  FindAllEmployeeQuery,
  useCreateEmployeeMutation,
  useDicByCurrentMonthQuery,
  useFindAllEmployeeQuery,
} from "../generated/generates";

import graphqlRequestClient from "../lib/graphqlRequestClient";

function useEmployeesList() {
  const { data, error, isLoading } = useFindAllEmployeeQuery<
    FindAllEmployeeQuery,
    Error
  >(graphqlRequestClient);
  return {
    employees: data?.employees || [],
    error,
    isLoading,
  };
}

function useCreateEmployee() {
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
      },
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );
  return { mutate, error };
}

function useDiscByMonth() {
  const { data } = useDicByCurrentMonthQuery<DicByCurrentMonthQuery, Error>(
    graphqlRequestClient
  );

  return { data };
}

export { useEmployeesList, useCreateEmployee, useDiscByMonth };
