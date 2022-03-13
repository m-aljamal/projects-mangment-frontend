import { useForm } from "react-hook-form";
import { Role } from "src/generated/generates";
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
  // salary: $salary
  // role: $role
  // jobTitle: $jobTitle
  // divisions: $divisions
  // levels: $levels
  // avatar: $avatar

  const roles = Object.entries(Role).map(([value, label]) => ({
    value,
    label,
  }));

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

        {/* <Select options={roles} {...register("role")} /> */}
        <Select setValue={setValue}>
          <>
            {roles.map((role) => (
              <Listbox.Option
                key={role.value}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                  }`
                }
                value={role.value}
              >
                <>
                  <span
                    className={`block truncate  
                    
                    `}
                  >
                    {role.label}
                  </span>
                  {
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                    </span>
                  }
                </>
              </Listbox.Option>
            ))}
          </>
        </Select>

        <button className="bg-blue-400 my-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;

const Input = forwardRef(({ ...props }: any, ref) => {
  return (
    <div className=" mb-5">
      <p className="text-gray-800">{props.placeholder}</p>

      <div className="relative flex mb-3 border rounded-md ">
        <input
          ref={ref}
          type="text"
          {...props}
          className="px-2 py-2  placeholder-white focus:placeholder-gray-400 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring-1 w-full pr-10"
        />
        {props.icon &&
          cloneElement(props.icon, {
            className:
              "h-full absolute w-8 pr-3 text-gray-400  flex items-center",
          })}
      </div>
    </div>
  );
});
// const Select = forwardRef(({ ...props }: any, ref) => {
//   return (
//     <div className=" mb-5 w-full">
//       <p className="text-gray-800">{props.placeholder}</p>

//       <div className="relative flex mb-3 border rounded-md ">
//         <select
//           ref={ref}
//           {...props}
//           className="px-2 py-2  placeholder-white focus:placeholder-gray-400 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring-1 w-full pr-10"
//         >
//           {props.options.map((role: any) => (
//             <option key={role.label} value={role.value}>
//               {role.label}
//             </option>
//           ))}
//         </select>
//         {props.icon &&
//           cloneElement(props.icon, {
//             className:
//               "h-full absolute w-8 pr-3 text-gray-400  flex items-center",
//           })}
//       </div>
//     </div>
//   );
// });
