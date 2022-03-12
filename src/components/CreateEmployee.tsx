import { useForm } from "react-hook-form";
import { Role } from "src/generated/generates";
import { useCreateEmployee } from "src/utils/employees";
import { GoPerson } from "react-icons/go";
import { FaUserCog } from "react-icons/fa";
import { cloneElement } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
const CreateEmployee = () => {
  interface IEmployee {
    name: string;
    salary: number;
    projectId: string;
    role: Role;
    password: string;
    username: string;
  }

  const { error, mutate } = useCreateEmployee();

  const { register, handleSubmit } = useForm<IEmployee>();

  const onSubmit = (data: IEmployee) => {
    mutate({
      name: data.name,
      username: data.name,
      password: data.password,
      //role: Role.Admin,
      projectId: data.projectId,
      salary: +data.salary,
    });
  };

  return (
    <div className="px-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} placeholder="الاسم" icon={<GoPerson />} />
        <Input
          {...register("username")}
          placeholder="اسم المستخدم"
          icon={<FaUserCog />}
        />
        <Input
          {...register("password")}
          placeholder="كلمة السر"
          icon={<RiLockPasswordLine />}
        />

        <button className="bg-blue-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;

const Input = ({ ...props }) => {
  return (
    <div className=" mb-7">
      <p className="text-gray-800">{props.placeholder}</p>

      <div className="relative flex mb-3 border rounded-md ">
        <input
          type="text"
          {...props}
          className="px-3 py-3  placeholder-white focus:placeholder-gray-400 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring-1 w-full pr-10"
        />
        {props.icon &&
          cloneElement(props.icon, {
            className:
              "h-full absolute w-8 pr-3 text-gray-400  flex items-center",
          })}
      </div>
    </div>
  );
};
