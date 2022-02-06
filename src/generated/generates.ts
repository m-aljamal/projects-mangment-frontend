import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateProjectDto = {
  name: Scalars['String'];
  type: Scalars['String'];
};

export type DailyDiscount = {
  __typename?: 'DailyDiscount';
  date: Scalars['DateTime'];
  discount: Scalars['Float'];
  employee: Employee;
  employeeId: Scalars['String'];
  hasDiscount: Scalars['Boolean'];
  id: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
};

export type DailyDiscountDto = {
  date: Scalars['DateTime'];
  discount: Scalars['Float'];
  employeeId: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
};

export type Discount = {
  __typename?: 'Discount';
  dailyDiscount_employeeId: Scalars['String'];
  discount: Scalars['Float'];
  name: Scalars['String'];
  salary: Scalars['Float'];
};

export type Employee = {
  __typename?: 'Employee';
  createdAt: Scalars['DateTime'];
  dailyDiscounts: Array<DailyDiscount>;
  id: Scalars['String'];
  name: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  salary: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type EmployeeDto = {
  name: Scalars['String'];
  projectId: Scalars['String'];
  salary: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDailyDiscount: DailyDiscount;
  createEmployee: Employee;
  createProject: Project;
};


export type MutationCreateDailyDiscountArgs = {
  dailyDiscount: DailyDiscountDto;
};


export type MutationCreateEmployeeArgs = {
  employee: EmployeeDto;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectDto;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  employees?: Maybe<Array<Employee>>;
  id: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  dailyDiscounts: Array<DailyDiscount>;
  dailyDiscountsByCurrentMonth: Array<Discount>;
  employees: Array<Employee>;
  employeesByProject: Array<Employee>;
  projects: Array<Project>;
  salariesbycurrentMonth: Array<Salaries>;
};


export type QueryEmployeesByProjectArgs = {
  projectId: Scalars['String'];
};


export type QuerySalariesbycurrentMonthArgs = {
  projectId: Scalars['String'];
};

export type Salaries = {
  __typename?: 'Salaries';
  discount?: Maybe<Scalars['String']>;
  employee_id: Scalars['String'];
  employee_name: Scalars['String'];
  employee_projectId: Scalars['String'];
  employee_salary: Scalars['Float'];
};

export type CreateDiscountMutationVariables = Exact<{
  date: Scalars['DateTime'];
  discount: Scalars['Float'];
  employeeId: Scalars['String'];
  notes: Scalars['String'];
}>;


export type CreateDiscountMutation = { __typename?: 'Mutation', createDailyDiscount: { __typename?: 'DailyDiscount', date: any, id: string, discount: number, notes?: string | null } };

export type CreateEmployeeMutationVariables = Exact<{
  name: Scalars['String'];
  projectId: Scalars['String'];
  salary: Scalars['Float'];
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: { __typename?: 'Employee', id: string, name: string, salary: number } };

export type FindEmployeesByProjectQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type FindEmployeesByProjectQuery = { __typename?: 'Query', employeesByProject: Array<{ __typename?: 'Employee', name: string, salary: number, id: string, createdAt: any, updatedAt: any }> };

export type EmployeesSalariesCurrentMonthQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type EmployeesSalariesCurrentMonthQuery = { __typename?: 'Query', salariesbycurrentMonth: Array<{ __typename?: 'Salaries', employee_salary: number, discount?: string | null, employee_id: string, employee_projectId: string, employee_name: string }> };

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
  type: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string, name: string, type: string, createdAt: any, updatedAt: any } };

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', name: string, id: string, type: string }> };


export const CreateDiscountDocument = `
    mutation createDiscount($date: DateTime!, $discount: Float!, $employeeId: String!, $notes: String!) {
  createDailyDiscount(
    dailyDiscount: {date: $date, discount: $discount, employeeId: $employeeId, notes: $notes}
  ) {
    date
    id
    discount
    notes
  }
}
    `;
export const useCreateDiscountMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateDiscountMutation, TError, CreateDiscountMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateDiscountMutation, TError, CreateDiscountMutationVariables, TContext>(
      ['createDiscount'],
      (variables?: CreateDiscountMutationVariables) => fetcher<CreateDiscountMutation, CreateDiscountMutationVariables>(client, CreateDiscountDocument, variables, headers)(),
      options
    );
export const CreateEmployeeDocument = `
    mutation createEmployee($name: String!, $projectId: String!, $salary: Float!) {
  createEmployee(employee: {name: $name, projectId: $projectId, salary: $salary}) {
    id
    name
    salary
  }
}
    `;
export const useCreateEmployeeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateEmployeeMutation, TError, CreateEmployeeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateEmployeeMutation, TError, CreateEmployeeMutationVariables, TContext>(
      ['createEmployee'],
      (variables?: CreateEmployeeMutationVariables) => fetcher<CreateEmployeeMutation, CreateEmployeeMutationVariables>(client, CreateEmployeeDocument, variables, headers)(),
      options
    );
export const FindEmployeesByProjectDocument = `
    query findEmployeesByProject($projectId: String!) {
  employeesByProject(projectId: $projectId) {
    name
    salary
    id
    createdAt
    updatedAt
  }
}
    `;
export const useFindEmployeesByProjectQuery = <
      TData = FindEmployeesByProjectQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindEmployeesByProjectQueryVariables,
      options?: UseQueryOptions<FindEmployeesByProjectQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindEmployeesByProjectQuery, TError, TData>(
      ['findEmployeesByProject', variables],
      fetcher<FindEmployeesByProjectQuery, FindEmployeesByProjectQueryVariables>(client, FindEmployeesByProjectDocument, variables, headers),
      options
    );
export const EmployeesSalariesCurrentMonthDocument = `
    query employeesSalariesCurrentMonth($projectId: String!) {
  salariesbycurrentMonth(projectId: $projectId) {
    employee_salary
    discount
    employee_id
    employee_projectId
    employee_name
  }
}
    `;
export const useEmployeesSalariesCurrentMonthQuery = <
      TData = EmployeesSalariesCurrentMonthQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: EmployeesSalariesCurrentMonthQueryVariables,
      options?: UseQueryOptions<EmployeesSalariesCurrentMonthQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<EmployeesSalariesCurrentMonthQuery, TError, TData>(
      ['employeesSalariesCurrentMonth', variables],
      fetcher<EmployeesSalariesCurrentMonthQuery, EmployeesSalariesCurrentMonthQueryVariables>(client, EmployeesSalariesCurrentMonthDocument, variables, headers),
      options
    );
export const CreateProjectDocument = `
    mutation createProject($name: String!, $type: String!) {
  createProject(project: {name: $name, type: $type}) {
    id
    name
    type
    createdAt
    updatedAt
  }
}
    `;
export const useCreateProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>(
      ['createProject'],
      (variables?: CreateProjectMutationVariables) => fetcher<CreateProjectMutation, CreateProjectMutationVariables>(client, CreateProjectDocument, variables, headers)(),
      options
    );
export const GetAllProjectsDocument = `
    query getAllProjects {
  projects {
    name
    id
    type
  }
}
    `;
export const useGetAllProjectsQuery = <
      TData = GetAllProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllProjectsQueryVariables,
      options?: UseQueryOptions<GetAllProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllProjectsQuery, TError, TData>(
      variables === undefined ? ['getAllProjects'] : ['getAllProjects', variables],
      fetcher<GetAllProjectsQuery, GetAllProjectsQueryVariables>(client, GetAllProjectsDocument, variables, headers),
      options
    );