import React from "react";
import { useForm } from "react-hook-form";
import { useCreateProject, useProjectsList } from "src/utils/project";

const AllProjects = () => {
  const { projects, isLoading, status } = useProjectsList();

  return (
    <div>
      <h2>جميع المشاريع</h2>
      <CreateProject />
      {isLoading ? <p>Loading....</p> : null}
      <div className="mt-8">
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>
          </div>
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
