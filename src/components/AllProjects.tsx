import React from "react";
import {
  GetAllProjectsQuery,
  useGetAllProjectsQuery,
} from "../generated/generates";
import graphqlRequestClient from "../lib/graphqlRequestClient";

const AllProjects = () => {
  const { status, data, error, isFetching } = useGetAllProjectsQuery<
    GetAllProjectsQuery,
    Error
  >(graphqlRequestClient);

  return (
    <div>
      {data?.projects.map((project) => (
        <div>
          <h2>{project.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
