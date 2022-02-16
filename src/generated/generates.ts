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

export type CurrentMonthDiscount = {
  __typename?: 'CurrentMonthDiscount';
  absence?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  employee: Employee;
  employeeId: Scalars['String'];
  id: Scalars['String'];
  late?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  punishment?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
};

export type CurrentMonthDiscountDto = {
  absence?: InputMaybe<Scalars['Float']>;
  date: Scalars['DateTime'];
  employeeId: Scalars['String'];
  late?: InputMaybe<Scalars['Float']>;
  notes?: InputMaybe<Scalars['String']>;
  punishment?: InputMaybe<Scalars['Float']>;
};

export type Employee = {
  __typename?: 'Employee';
  createdAt: Scalars['DateTime'];
  currentMonthDiscounts: Array<CurrentMonthDiscount>;
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
  createDiscount: CurrentMonthDiscount;
  createEmployee: Employee;
  createProject: Project;
  deleteDiscount: CurrentMonthDiscount;
  login: LoginResponse;
};


export type MutationCreateDiscountArgs = {
  discount: CurrentMonthDiscountDto;
};


export type MutationCreateEmployeeArgs = {
  employee: EmployeeDto;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectDto;
};


export type MutationDeleteDiscountArgs = {
  id: Scalars['String'];
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
  findAllEmployees: Array<Employee>;
  findAllProjects: Array<Project>;
  findEmployeeById: Employee;
  findEmployeesByProjectId: Array<Employee>;
  findProject: Project;
  findProjectEmployeesSalaries: Array<Salaries>;
};


export type QueryFindAllEmployeesArgs = {
  projectId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sortBy?: InputMaybe<Sort>;
};


export type QueryFindAllProjectsArgs = {
  sortBy?: InputMaybe<Sort>;
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


export type QueryFindProjectEmployeesSalariesArgs = {
  projectId: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Manger = 'MANGER',
  Teacher = 'TEACHER'
}

export type Salaries = {
  __typename?: 'Salaries';
  absence?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  late?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  punishment?: Maybe<Scalars['String']>;
  salary: Scalars['Float'];
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

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
  type: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string, name: string, type: string, createdAt: any, updatedAt: any } };

export type FindAllProjectsQueryVariables = Exact<{
  sortBy?: InputMaybe<Sort>;
}>;


export type FindAllProjectsQuery = { __typename?: 'Query', findAllProjects: Array<{ __typename?: 'Project', createdAt: any, id: string, name: string, type: string, updatedAt: any }> };

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
export const FindAllProjectsDocument = `
    query findAllProjects($sortBy: Sort) {
  findAllProjects(sortBy: $sortBy) {
    createdAt
    id
    name
    type
    updatedAt
  }
}
    `;
export const useFindAllProjectsQuery = <
      TData = FindAllProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: FindAllProjectsQueryVariables,
      options?: UseQueryOptions<FindAllProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindAllProjectsQuery, TError, TData>(
      variables === undefined ? ['findAllProjects'] : ['findAllProjects', variables],
      fetcher<FindAllProjectsQuery, FindAllProjectsQueryVariables>(client, FindAllProjectsDocument, variables, headers),
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