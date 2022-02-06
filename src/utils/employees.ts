import {
  EmployeesSalariesCurrentMonthQuery,
  FindEmployeesByProjectQuery,
  useEmployeesSalariesCurrentMonthQuery,
  useFindEmployeesByProjectQuery,
} from "./../generated/generates";
import { useQueryClient } from "react-query";
import {
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables,
  useCreateEmployeeMutation,
} from "../generated/generates";

import graphqlRequestClient from "../lib/graphqlRequestClient";

function useEmployeesList() {
  const { data, error, isLoading } = useFindEmployeesByProjectQuery<
    FindEmployeesByProjectQuery,
    Error
  >(graphqlRequestClient, {
    projectId: "4e677f32-f6da-418a-a662-deb252e10a46",
  });
  return {
    employees: data?.employeesByProject || [],
    error,
    isLoading,
  };
}

function useSalariesList() {
  const { data, error, isLoading } = useEmployeesSalariesCurrentMonthQuery<
    EmployeesSalariesCurrentMonthQuery,
    Error
  >(graphqlRequestClient, {
    projectId: "4e677f32-f6da-418a-a662-deb252e10a46",
  });
  return {
    salaries: data?.salariesbycurrentMonth || [],
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
        queryClient.invalidateQueries("findEmployeesByProject");
      },
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );
  return { mutate, error };
}

export { useEmployeesList, useCreateEmployee, useSalariesList };
