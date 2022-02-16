// import {
//   FindEmployeeByIdQuery,
//   FindEmployeesByProjectIdQuery,
//   Role,
//   Sort,
//   useFindEmployeeByIdQuery,
//   useFindEmployeesByProjectIdQuery,
// } from "src/generated/generates";
// import { useAuthClient } from "src/context/auth-context";
// import {
//   EmployeesSalariesCurrentMonthQuery,
//   FindAllEmployeeQuery,
//   useEmployeesSalariesCurrentMonthQuery,
//   useFindAllEmployeeQuery,
// } from "./../generated/generates";
// import { useQueryClient } from "react-query";
// import {
//   CreateEmployeeMutation,
//   CreateEmployeeMutationVariables,
//   useCreateEmployeeMutation,
// } from "../generated/generates";

// import graphqlRequestClient from "../lib/graphqlRequestClient";

// function useFindProjectsEmployees(projectId: string) {
//   const { data, error, isLoading } = useFindEmployeesByProjectIdQuery<
//     FindEmployeesByProjectIdQuery,
//     Error
//   >(graphqlRequestClient(), {
//     projectId,
//     sortBy: Sort.Desc,
//   });
//   return {
//     employees: data?.findEmployeesByProjectId || [],
//     error,
//     isLoading,
//   };
// }

// function useSalariesList() {
//   const { data, error, isLoading } = useEmployeesSalariesCurrentMonthQuery<
//     EmployeesSalariesCurrentMonthQuery,
//     Error
//   >(graphqlRequestClient(), {
//     projectId: "4e677f32-f6da-418a-a662-deb252e10a46",
//   });
//   return {
//     salaries: data?.salariesbycurrentMonth || [],
//     error,
//     isLoading,
//   };
// }

// function useCreateEmployee() {
//   const queryClient = useQueryClient();
//   const { mutate, error } = useCreateEmployeeMutation<Error>(
//     graphqlRequestClient(),
//     {
//       onSuccess: (
//         data: CreateEmployeeMutation,
//         _variables: CreateEmployeeMutationVariables,
//         _context: unknown
//       ) => {
//         queryClient.invalidateQueries("findEmployeesByProjectId");
//       },
//       onError: (error: Error) => {
//         console.log(error);
//       },
//     }
//   );
//   return { mutate, error };
// }

// function useFindAllEmployees(role?: Role) {
//   const client = useAuthClient();
//   const { data, error, status } = useFindAllEmployeeQuery<
//     FindAllEmployeeQuery,
//     Error
//   >(client(), { role });
//   return {
//     employees: data?.employees || [],
//     error,
//     status,
//   };
// }

// function useFindEmployee(id: string) {
//   const client = useAuthClient();
//   const { data, status } = useFindEmployeeByIdQuery<
//     FindEmployeeByIdQuery,
//     Error
//   >(client(), {
//     id,
//   });
//   return {
//     employee: data?.findEmployeeById,
//     status,
//   };
// }

// export {
//   useFindProjectsEmployees,
//   useCreateEmployee,
//   useSalariesList,
//   useFindAllEmployees,
//   useFindEmployee,
// };

export {}