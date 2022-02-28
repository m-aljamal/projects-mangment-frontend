import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreateEmployee from "src/components/CreateEmployee";
import { useFindProjectEmployeeSortByJobTitle, useFindProjectsEmployees } from "src/utils/employees";
import { IoMdAdd } from "react-icons/io";
import { JopTitle } from "src/generated/generates";
const ProjectEmployees = () => {

  const { employees } = useFindProjectEmployeeSortByJobTitle();

 console.log(employees);
 

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
{/* 
      <div className="mt-4">
        <EmployeeJopTitle title="الكادر اﻹداري" />
        {employees.map(
          (employee) =>
            employee?.jobTitle === JopTitle.Supervisor && (
              <>
                <Employee employee={employee} />
              </>
            )
        )}
      </div>
      <div className="mt-4">
        <EmployeeJopTitle title="الكادر التدريسي" />
        {employees.map(
          (employee) =>
            employee?.jobTitle === JopTitle.Teacher && (
              <>
                <Employee employee={employee} />
              </>
            )
        )}
      </div> */}
    </div>
  );
};

export default ProjectEmployees;

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
        <p>{employee.salary}</p>
        <p>{employee.id}</p>
        <p>{employee.jopTitle}</p>
      </div>
    </Link>
  );
};

// avatar: "http://angular-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
// createdAt: "2022-02-26T19:33:34.296Z"
// divisions: Array(2)
// 0: {divisionNumber: 1, divisionString: 'hfgfg'}
// 1: {divisionNumber: 1, divisionString: 'hfgfg'}
// length: 2
// [[Prototype]]: Array(0)
// id: "c6211cfa-f06e-432c-a046-5bb9168fa619"
// jopTitle: "TEACHER"
// levels: Array(2)
// 0: {levelNumber: 1, levelString: 'fe'}
// 1: {levelNumber: 2, levelString: 'fdf'}
// length: 2
// [[Prototype]]: Array(0)
// name: "عبد الحي"
// password: "$2a$10$XM8tYegrprSZDg8AXBw2juVmxUusjrqpajPehC0wxTtCYnaYenoC."
// salary: null
// username: "abb"
