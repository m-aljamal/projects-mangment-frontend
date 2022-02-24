import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreateEmployee from "src/components/CreateEmployee";
import { useFindProjectsEmployees } from "src/utils/employees";
import { IoMdAdd } from "react-icons/io";
const ProjectEmployees = () => {
  const { employees } = useFindProjectsEmployees();

  return (
    <div>
      <div className="py-4 mx-8 ">
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

      <div>
        <div >المدير</div>
        {employees.map((employee) => (
          <Link key={employee.id} to={`/employee/${employee.id}`}>
            <div className=" bg-white m-3">
              <h3>{employee.name}</h3>
              <p>{employee.salary}</p>
              <p>{employee.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectEmployees;
