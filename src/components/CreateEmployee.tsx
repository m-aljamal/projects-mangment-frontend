import { useFieldArray, useForm } from "react-hook-form";
import { Division, JobTitle, Level, Role } from "src/generated/generates";
import { useCreateEmployee } from "src/utils/employees";
import { GoPerson } from "react-icons/go";
import { FaUserCog } from "react-icons/fa";
import { cloneElement, forwardRef } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const enumeToArray = (enume: any) => {
  return Object.entries(enume).map(([value, label]) => ({
    value,
    label,
  }));
};

const roles = enumeToArray(Role);
const jobTitles = enumeToArray(JobTitle);
//const levels = enumeToArray(Levels);
//const divisions = enumeToArray(Divisions);

const CreateEmployee = () => {
  interface IEmployee {
    name: string;
    salary: number;
    role: Role;
    password: string;
    username: string;
    jobTitle: JobTitle;
    levels: {
      levelString: string;
      divisions: {
        divisionString: string;
      }[];
    }[];
  }

  const { projectId } = useParams();

  const { error, mutate } = useCreateEmployee();

  const { register, handleSubmit, setValue, getValues, control, watch } =
    useForm<IEmployee>();
  const { fields, append, remove } = useFieldArray({
    control,

    name: "levels",
  });
  const watchFieldArray = watch("levels");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

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
        {controlledFields.map((field, index) => {
          return (
            <>
              <Input
                {...register(`levels.${index}.levelString` as const)}
                placeholder="الصف"
                type="select"
              >
                {/* {levels?.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label as Levels}
                  </option>
                ))} */}
              </Input>
              <NestedArray index={index} {...{ control, register }} />

              <button
                className="block"
                onClick={() => {
                  remove(index);
                }}
              >
                -
              </button>
            </>
          );
        })}
        <button
          className="block"
          type="button"
          onClick={() =>
            append({
              levelString: "",
              divisions: [
                {
                  divisionString: "",
                },
              ],
            })
          }
        >
          +
        </button>

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

const NestedArray = ({ index, control, register }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `levels.${index}.divisions`,
  });

  return (
    <>
      {fields.map((field, divisionIndex) => {
        return (
          <>
            <Input
              {...register(
                `levels.${index}.divisions.${divisionIndex}.divisionString` as const
              )}
              placeholder="الشعبة"
              type="select"
            >
              {/* {divisions?.map((division) => (
                <option key={division.value} value={division.value}>
                  {division.label as Divisions}
                </option>
              ))} */}
            </Input>
          </>
        );
      })}
      <div className="flex ">
        <button
          type="button"
          onClick={() => {
            remove(index);
          }}
        >
          حذف شعبة
        </button>
        <button
          type="button"
          onClick={() => {
            append({
              divisionNumber: 0,
              divisionString: "",
            });
          }}
        >
          اضافة شعبة
        </button>
      </div>
    </>
  );
};
