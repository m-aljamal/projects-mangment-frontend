import { useForm } from "react-hook-form";
import { JobTitle, Role } from "src/generated/generates";
import { useCreateEmployee } from "src/utils/employees";
import { GoPerson } from "react-icons/go";
import { FaUserCog } from "react-icons/fa";
import { cloneElement, forwardRef } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Select from "./Select";
import { Listbox } from "@headlessui/react";

const CreateEmployee = () => {
  interface IEmployee {
    name: string;
    salary: number;
    role: Role;
    password: string;
    username: string;
    jobTitle: JobTitle;
  }

  const { projectId } = useParams();

  const { error, mutate } = useCreateEmployee();

  const { register, handleSubmit, setValue, getValues } = useForm<IEmployee>();

  const onSubmit = (data: IEmployee) => {
    console.log(data);

    // mutate({
    //   name: data.name,
    //   username: data.name,
    //   password: data.password,
    //   //role: Role.Admin,
    //   projectId,
    //   salary: +data.salary,
    // });
  };
  // projectId: $projectId
  // divisions: $divisions
  // levels: $levels
  // avatar: $avatar

  const enumeToArray = (enume: any) => {
    return Object.entries(enume).map(([value, label]) => ({
      value,
      label,
    }));
  };
  const roles = enumeToArray(Role);
  const jobTitles = enumeToArray(JobTitle);

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
        <Input type="select" {...register("role")} placeholder="فئة الموظف">
          {roles?.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label as Role}
            </option>
          ))}
        </Input>

        <Input
          type="select"
          {...register("jobTitle")}
          placeholder="المسمى الوظيفي"
        >
          {jobTitles?.map((jobTitle) => (
            <option key={jobTitle.value} value={jobTitle.value}>
              {jobTitle.label as JobTitle}
            </option>
          ))}
        </Input>

        <Input
          type="number"
          {...register("salary", { min: 10, max: 1000, valueAsNumber: true })}
          placeholder="الراتب"
        />

        <button className="bg-blue-400 my-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;

const Input = forwardRef(({ ...props }: any, ref) => {
  const inputStyle =
    "px-2 py-2 placeholder-white focus:placeholder-gray-400 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring-1 w-full pr-10";
  return (
    <div className=" mb-5">
      <p className="text-gray-800">{props.placeholder}</p>

      <div className="relative flex mb-3 border rounded-md ">
        {props.type === "select" ? (
          <select className={inputStyle} ref={ref} {...props}>
            {props.children}
          </select>
        ) : (
          <input ref={ref} {...props} className={inputStyle} />
        )}
        {props.icon &&
          cloneElement(props.icon, {
            className:
              "h-full absolute w-8 pr-3 text-gray-400  flex items-center",
          })}
      </div>
    </div>
  );
});
