import {
  Employee,
  FindAllEmployeesQuery,
  FindEmployeeByIdQuery,
  FindEmployeesByProjectIdQuery,
  FindProjectEmployeesSalariesQuery,
  Role,
  Sort,
  useFindAllEmployeesQuery,
  useFindEmployeeByIdQuery,
  useFindEmployeesByProjectIdQuery,
  useFindProjectEmployeesSalariesQuery,
} from "src/generated/generates";
import { useAuthClient } from "src/context/auth-context";

import { useQueryClient } from "react-query";
import {
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables,
  useCreateEmployeeMutation,
} from "../generated/generates";

import graphqlRequestClient from "../lib/graphqlRequestClient";

function useFindProjectsEmployees() {
  const { client, projectId } = useAuthClient();
  const { data, error, isLoading } = useFindEmployeesByProjectIdQuery<
    FindEmployeesByProjectIdQuery,
    Error
  >(client(), {
    projectId: projectId,
    sortBy: Sort.Desc,
  });
  return {
    employees: data?.findEmployeesByProjectId || [],
    error,
    isLoading,
  };
}

function useFindProjectEmployeeSortByJobTitle() {
  const data = useFindProjectsEmployees();
 
  // const groupedByJobTitle = data.employees.reduce((acc, curr) => {
  //   if (!acc[curr.jobTitle]) {
  //     acc[curr.jobTitle] = [];
  //   }
  //   acc[curr.jobTitle].push(curr);
  //   return acc;
  // }, {});
  const usedData = {
    "الكادر الاداري": [
      {
        id: "0506ec34-36c2-fc",
        name: "محمد عبدالله بن عبدالرحمن الشيخ",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
      {
        id: "0506ec34-36c2-46d3-fd27f4cc",
        name: "محمد عبدالله بن عبدالرحمن الشيخ",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
      {
        id: "0506ec34-gfg2-64085d27f4cc",
        name: "محمد عبدالله بن عبدالرحمن الشيخ",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
    ],
    "الكادر التدريسي": [
      {
        id: "0506fdf-64085d27f4cc",
        name: "التدريسي",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
      {
        id: "dfd4085d27f4cc",
        name: "التدريسي",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
      {
        id: "ge4cc",
        name: "التدريسي",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
    ],
    "الكادر الخدمي": [
      {
        id: "0506ec34-3gcc",
        name: "الاداري",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
      {
        id: "0fdf2-46d3-9c72-64085d27f4cc",
        name: "الاداري",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
      {
        id: "0506fdc72-64085d27f4cc",
        name: "الاداري",
        jobTitle: "الكادر الاداري",
        salary: 0,
      },
    ],
  };

  return {
    data,
    usedData,
  };
}

function useCreateEmployee() {
  const queryClient = useQueryClient();
  const { mutate, error } = useCreateEmployeeMutation<Error>(
    graphqlRequestClient(),
    {
      onSuccess: (
        data: CreateEmployeeMutation,
        _variables: CreateEmployeeMutationVariables,
        _context: unknown
      ) => {
        queryClient.invalidateQueries("findEmployeesByProjectId");
      },
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );
  return { mutate, error };
}

function useFindAllEmployees(role?: Role) {
  const { client } = useAuthClient();
  const { data, error, status } = useFindAllEmployeesQuery<
    FindAllEmployeesQuery,
    Error
  >(client(), { role });
  return {
    employees: data?.findAllEmployees || [],
    error,
    status,
  };
}

function useFindEmployee(id: string) {
  const { client } = useAuthClient();
  const { data, status } = useFindEmployeeByIdQuery<
    FindEmployeeByIdQuery,
    Error
  >(client(), {
    id,
  });
  return {
    employee: data?.findEmployeeById,
    status,
  };
}

function useFindEmployeesSalaries(projectId: string) {
  const { client } = useAuthClient();
  const { data, status, isLoading } = useFindProjectEmployeesSalariesQuery<
    FindProjectEmployeesSalariesQuery,
    Error
  >(client(), {
    projectId,
  });
  return {
    employees: data?.findProjectEmployeesSalaries || [],
    status,
    isLoading,
  };
}

export {
  useFindProjectsEmployees,
  useCreateEmployee,
  useFindAllEmployees,
  useFindEmployee,
  useFindEmployeesSalaries,
  useFindProjectEmployeeSortByJobTitle,
};
