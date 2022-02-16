import { useForm } from "react-hook-form";
import { useCreateProject } from "src/utils/project";

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

export default CreateProject;
