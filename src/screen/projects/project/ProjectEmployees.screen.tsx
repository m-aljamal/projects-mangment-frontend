import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreateEmployee from "src/components/CreateEmployee";
import {
  useFindProjectEmployeeSortByJobTitle,
  useFindProjectsEmployees,
} from "src/utils/employees";
import { IoMdAdd } from "react-icons/io";
const ProjectEmployees = () => {
  const { data, usedData } = useFindProjectEmployeeSortByJobTitle();

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
      <Employeelist list={usedData["الكادر الاداري"]} title="الكادر الاداري" />
      <Employeelist
        list={usedData["الكادر التدريسي"]}
        title="الكادر التدريسي"
      />
      <Employeelist list={usedData["الكادر الخدمي"]} title="الكادر الخدمي" />
    </div>
  );
};

export default ProjectEmployees;

const Employeelist = ({ list = [], title }: any) => {
  return (
    <>
      <EmployeeJopTitle title={title} />
      {list.map((item: any) => (
        <Employee key={item.id} employee={item} />
      ))}
    </>
  );
};

const EmployeeJopTitle = ({ title }: { title: string }) => {
  return (
    <div className=" border-t border-b py-1 -mx-4 px-4 bg-slate-50">
      <p className="text-gray-700 font-bold">{title}</p>
    </div>
  );
};

const Employee = ({ employee }: any) => {
  return (
    <Link key={employee.id} to={`/employee/${employee.id}`}>
      <div className=" bg-white m-3">
        <h3>{employee.name}</h3>
      </div>
    </Link>
  );
};

