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
  hasDiscount: Scalars['Boolean'];
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
  password: Scalars['String'];
  project: Project;
  projectId?: Maybe<Scalars['String']>;
  role: Role;
  salary?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type EmployeeDto = {
  name: Scalars['String'];
  password: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  salary?: InputMaybe<Scalars['Float']>;
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: Employee;
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDailyDiscount: DailyDiscount;
  createEmployee: Employee;
  createProject: Project;
  login: LoginResponse;
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


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
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
  currentUser?: Maybe<Employee>;
  dailyDiscounts: Array<DailyDiscount>;
  dailyDiscountsByCurrentMonth: Array<Discount>;
  employees: Array<Employee>;
  findEmployeeById: Employee;
  findEmployeesByProjectId: Array<Employee>;
  findProject: Project;
  projects: Array<Project>;
  salariesbycurrentMonth: Array<Salaries>;
};


export type QueryEmployeesArgs = {
  role?: InputMaybe<Role>;
};


export type QueryFindEmployeeByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindEmployeesByProjectIdArgs = {
  projectId: Scalars['String'];
  sortBy?: InputMaybe<Sort>;
};


export type QueryFindProjectArgs = {
  id: Scalars['String'];
};


export type QueryProjectsArgs = {
  sortBy?: InputMaybe<Sort>;
};


export type QuerySalariesbycurrentMonthArgs = {
  projectId: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Manger = 'MANGER',
  Teacher = 'TEACHER'
}

export type Salaries = {
  __typename?: 'Salaries';
  discount?: Maybe<Scalars['String']>;
  employee_id: Scalars['String'];
  employee_name: Scalars['String'];
  employee_projectId: Scalars['String'];
  employee_salary: Scalars['Float'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'Employee', name: string, id: string, username: string } } };

export type CreateDiscountMutationVariables = Exact<{
  date: Scalars['DateTime'];
  discount: Scalars['Float'];
  employeeId: Scalars['String'];
  notes: Scalars['String'];
  hasDiscount: Scalars['Boolean'];
}>;


export type CreateDiscountMutation = { __typename?: 'Mutation', createDailyDiscount: { __typename?: 'DailyDiscount', date: any, id: string, discount: number, notes?: string | null, hasDiscount: boolean } };

export type CreateEmployeeMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['Float']>;
  username: Scalars['String'];
  role?: InputMaybe<Role>;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: { __typename?: 'Employee', createdAt: any, id: string, name: string, username: string, salary?: number | null } };

export type EmployeesSalariesCurrentMonthQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type EmployeesSalariesCurrentMonthQuery = { __typename?: 'Query', salariesbycurrentMonth: Array<{ __typename?: 'Salaries', employee_salary: number, discount?: string | null, employee_id: string, employee_projectId: string, employee_name: string }> };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'Employee', name: string, id: string, role: Role, username: string } | null };

export type FindAllEmployeeQueryVariables = Exact<{
  role?: InputMaybe<Role>;
}>;


export type FindAllEmployeeQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', name: string, username: string, salary?: number | null, id: string, role: Role }> };

export type FindEmployeeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindEmployeeByIdQuery = { __typename?: 'Query', findEmployeeById: { __typename?: 'Employee', createdAt: any, id: string, name: string, salary?: number | null, username: string } };

export type FindEmployeesByProjectIdQueryVariables = Exact<{
  projectId: Scalars['String'];
  sortBy?: InputMaybe<Sort>;
}>;


export type FindEmployeesByProjectIdQuery = { __typename?: 'Query', findEmployeesByProjectId: Array<{ __typename?: 'Employee', name: string, id: string, password: string, createdAt: any, salary?: number | null, username: string }> };

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
  type: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string, name: string, type: string, createdAt: any, updatedAt: any } };

export type GetAllProjectsQueryVariables = Exact<{
  sortBy?: InputMaybe<Sort>;
}>;


export type GetAllProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string }> };

export type FindProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindProjectQuery = { __typename?: 'Query', findProject: { __typename?: 'Project', id: string, name: string, createdAt: any, type: string } };


export const LoginDocument = `
    mutation login($username: String!, $password: String!) {
  login(loginUserInput: {password: $password, username: $username}) {
    accessToken
    user {
      name
      id
      username
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const CreateDiscountDocument = `
    mutation createDiscount($date: DateTime!, $discount: Float!, $employeeId: String!, $notes: String!, $hasDiscount: Boolean!) {
  createDailyDiscount(
    dailyDiscount: {date: $date, discount: $discount, employeeId: $employeeId, notes: $notes, hasDiscount: $hasDiscount}
  ) {
    date
    id
    discount
    notes
    hasDiscount
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
    mutation createEmployee($name: String!, $password: String!, $projectId: String, $salary: Float, $username: String!, $role: Role) {
  createEmployee(
    employee: {name: $name, username: $username, password: $password, projectId: $projectId, salary: $salary, role: $role}
  ) {
    createdAt
    id
    name
    username
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
export const CurrentUserDocument = `
    query currentUser {
  currentUser {
    name
    id
    role
    username
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: CurrentUserQueryVariables,
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['currentUser'] : ['currentUser', variables],
      fetcher<CurrentUserQuery, CurrentUserQueryVariables>(client, CurrentUserDocument, variables, headers),
      options
    );
export const FindAllEmployeeDocument = `
    query findAllEmployee($role: Role) {
  employees(role: $role) {
    name
    username
    salary
    id
    role
  }
}
    `;
export const useFindAllEmployeeQuery = <
      TData = FindAllEmployeeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: FindAllEmployeeQueryVariables,
      options?: UseQueryOptions<FindAllEmployeeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindAllEmployeeQuery, TError, TData>(
      variables === undefined ? ['findAllEmployee'] : ['findAllEmployee', variables],
      fetcher<FindAllEmployeeQuery, FindAllEmployeeQueryVariables>(client, FindAllEmployeeDocument, variables, headers),
      options
    );
export const FindEmployeeByIdDocument = `
    query findEmployeeById($id: String!) {
  findEmployeeById(id: $id) {
    createdAt
    id
    name
    salary
    username
  }
}
    `;
export const useFindEmployeeByIdQuery = <
      TData = FindEmployeeByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindEmployeeByIdQueryVariables,
      options?: UseQueryOptions<FindEmployeeByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindEmployeeByIdQuery, TError, TData>(
      ['findEmployeeById', variables],
      fetcher<FindEmployeeByIdQuery, FindEmployeeByIdQueryVariables>(client, FindEmployeeByIdDocument, variables, headers),
      options
    );
export const FindEmployeesByProjectIdDocument = `
    query findEmployeesByProjectId($projectId: String!, $sortBy: Sort) {
  findEmployeesByProjectId(projectId: $projectId, sortBy: $sortBy) {
    name
    id
    password
    createdAt
    salary
    username
  }
}
    `;
export const useFindEmployeesByProjectIdQuery = <
      TData = FindEmployeesByProjectIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindEmployeesByProjectIdQueryVariables,
      options?: UseQueryOptions<FindEmployeesByProjectIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindEmployeesByProjectIdQuery, TError, TData>(
      ['findEmployeesByProjectId', variables],
      fetcher<FindEmployeesByProjectIdQuery, FindEmployeesByProjectIdQueryVariables>(client, FindEmployeesByProjectIdDocument, variables, headers),
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
    query getAllProjects($sortBy: Sort) {
  projects(sortBy: $sortBy) {
    id
    name
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
export const FindProjectDocument = `
    query findProject($id: String!) {
  findProject(id: $id) {
    id
    name
    createdAt
    type
  }
}
    `;
export const useFindProjectQuery = <
      TData = FindProjectQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindProjectQueryVariables,
      options?: UseQueryOptions<FindProjectQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindProjectQuery, TError, TData>(
      ['findProject', variables],
      fetcher<FindProjectQuery, FindProjectQueryVariables>(client, FindProjectDocument, variables, headers),
      options
    );