import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreateEmployee from "src/components/CreateEmployee";
import { IoMdAdd } from "react-icons/io";
import { useFindEmployeesByRole } from "src/utils/employees";
import { Employee } from "src/generated/generates";
const ProjectEmployees = () => {
  const { mangers, services, teachers } = useFindEmployeesByRole();

  return (
    <div>
      <div className="py-4  ">
        <div>
          <h2 className="text-xl font-bold text-gray-700">موظفين المشروع</h2>
          <p className="text-gray-600">81 موظف</p>
        </div>
        <div className="mt-4 flex gap-5">
          <form className="flex-1">
            <div className="flex border w-full rounded-2xl py-2 pr-2 shadow-sm ">
              <AiOutlineSearch className="text-2xl text-gray-700 " />
              <input
                placeholder="ابحث عن موظف"
                className="w-full outline-none pr-2"
              />
            </div>
          </form>
          <div className="bg-indigo-600 text-white px-8 py-2 rounded-3xl flex items-center gap-1 ">
            <button className="font-bold ">جديد</button>
            <IoMdAdd className="text-xl " />
          </div>
        </div>
      </div>
      <Employeelist employees={mangers} title="الكادر الاداري" />
      <Employeelist employees={teachers} title="الكادر التدريسي" />
      <Employeelist employees={services} title="الكادر الخدمي" />
    </div>
  );
};

export default ProjectEmployees;

const Employeelist = ({
  employees,
  title,
}: {
  employees: Employee[] | [];
  title: string;
}) => {
  return (
    <>
      <EmployeeJobTitle title={title} />
      {employees.map((employee: Employee) => (
        <SingleEmployee key={employee.id} employee={employee} />
      ))}
    </>
  );
};

const EmployeeJobTitle = ({ title }: { title: string }) => {
  return (
    <div className=" border-t border-b py-1 -mx-4 px-4 bg-slate-50">
      <p className="text-gray-700 font-bold">{title}</p>
    </div>
  );
};

const SingleEmployee = ({ employee }: { employee: Employee }) => {
  return (
    <div className=" bg-white m-3 border">
      <Link key={employee.id} to={`/employee/${employee.id}`}>
        <h3>{employee.name}</h3>
        <p>{employee.jobTitle}</p>
        <p>{employee.role}</p>
      </Link>
    </div>
  );
};
