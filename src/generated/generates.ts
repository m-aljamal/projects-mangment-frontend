import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
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
  id: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
};

export type DailyDiscountDto = {
  date: Scalars['DateTime'];
  discount: Scalars['Float'];
  notes?: InputMaybe<Scalars['String']>;
};

export type Employee = {
  __typename?: 'Employee';
  createdAt: Scalars['DateTime'];
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
  employees: Array<Employee>;
  projects: Array<Project>;
};

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', createdAt: any, name: string, id: string, type: string }> };


export const GetAllProjectsDocument = `
    query getAllProjects {
  projects {
    createdAt
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