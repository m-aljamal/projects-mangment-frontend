import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Sort } from "src/generated/generates";
import { useCreateProject, useProjectsList } from "src/utils/project";

const AllProjects = () => {
  const [sort, setSort] = useState<Sort>(Sort.Asc);
  const { projects, isLoading, status } = useProjectsList(sort);

  return (
    <div>
      <h2>جميع المشاريع</h2>
      <CreateProject />
      {isLoading ? <p>Loading....</p> : null}
      <div className="mt-8">
        <div>
          <button onClick={() => setSort(Sort.Asc)} className="ml-2">
            ACS
          </button>
          <button onClick={() => setSort(Sort.Desc)}>DESC</button>
        </div>
        {projects.map((project) => (
          <Link to={`/project/${project.id}`}>
            <div key={project.id}>
              <h2>{project.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;

const CreateProject = () => {
  interface IProject {
    name: string;
    type: string;
  }

  const { mutate, error } = useCreateProject();

  const { register, handleSubmit } = useForm<IProject>();

  const onSubmit = (data: IProject) => {
    mutate(data);
  };

  return (
    <div>
      <h2>انشاء مشروع</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="الاسم" />
        <input {...register("type")} placeholder="النوع" />
        <button type="submit">انشاء</button>
      </form>
    </div>
  );
};
