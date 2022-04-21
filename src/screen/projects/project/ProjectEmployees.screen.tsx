import { AiOutlineSearch } from "react-icons/ai";
import CreateEmployee from "src/components/CreateEmployee";
import { IoMdAdd } from "react-icons/io";
import { JobTitle, Role } from "src/generated/generates";
import avatar from "src/face.jpg";
import { useFindEmployeesByRole } from "src/utils/employees";
import {
  Drawer,
  DrawerContents,
  DrawerOpenButton,
} from "src/components/AppDrawer";
import AppButton from "src/components/AppButton";
import PersonsHeader from "src/components/PersonsHeader";

const ProjectEmployees = () => {
  const { mangers, services, teachers } = useFindEmployeesByRole();
  return (
    <div>
      <PersonsHeader />
      <Employeelist employees={mangers} title="الكادر الاداري" />
      <Employeelist employees={teachers} title="الكادر التدريسي" />
      <Employeelist employees={services} title="الكادر الخدمي" />
    </div>
  );
};

export default ProjectEmployees;

interface IEmployee {
  avatar?: string | null | undefined;
  createdAt: any;
  id: string;
  jobTitle?: String | null | undefined;
  name: string;
  role: Role;
  salary?: number | null | undefined;
  username: string;
}

const Employeelist = ({
  employees,
  title,
}: {
  employees: IEmployee[] | [];
  title: string;
}) => {
  return (
    <>
      <EmployeeJobTitle title={title} />
      <div className="bg-slate-200   px-4 ">
        <div className="grid grid-cols-4 gap-5 py-6  ">
          {employees.map((employee: IEmployee) => (
            <SingleEmployee key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </>
  );
};

const EmployeeJobTitle = ({ title }: { title: string }) => {
  return (
    <div className=" border-t border-b py-1   px-4 bg-slate-100 shadow-sm">
      <p className="text-gray-700 font-bold">{title}</p>
    </div>
  );
};

const SingleEmployee = ({ employee }: { employee: IEmployee }) => {
  return (
    <Drawer>
      <DrawerOpenButton>
        <div className="bg-white shadow-sm py-3 cursor-pointer rounded-md">
          <div className="text-center">
            <img
              src={employee?.avatar || avatar}
              alt={employee.name}
              className="rounded-full w-32 mx-auto"
            />
            <div>
              <h2 className=" text-gray-800 text-lg mt-3">{employee.name}</h2>
              <p className="text-sm text-gray-600">
                {JobTitle[employee.jobTitle as keyof typeof JobTitle]}
              </p>
            </div>
          </div>
        </div>
      </DrawerOpenButton>
      <DrawerContents>
        <FullEmployeeInfo employee={employee} />
      </DrawerContents>
    </Drawer>
  );
};

const FullEmployeeInfo = ({ employee }: { employee: IEmployee }) => {
  return (
    <div className="bg-white p-4  h-full scrollbar-thumb-gray-500 scrollbar-track-white scrollbar-thin">
      <div className="flex gap-5 items-center ">
        <img
          src={employee?.avatar || avatar}
          alt={employee.name}
          className="rounded-full w-16"
        />
        <div>
          <h2 className=" text-gray-800 font-medium ">{employee.name}</h2>
          <p className="text-sm text-gray-600">
            {JobTitle[employee.jobTitle as keyof typeof JobTitle]}
          </p>
        </div>
      </div>
    </div>
  );
};
