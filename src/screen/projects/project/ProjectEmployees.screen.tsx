import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CreateEmployee from "src/components/CreateEmployee";
import { IoMdAdd } from "react-icons/io";
import { JobTitle, Role } from "src/generated/generates";
import avatar from "src/avatar.png";
import { useFindEmployeesByRole } from "src/utils/employees";
import {
  Drawer,
  DrawerContents,
  DrawerOpenButton,
} from "src/components/AppDrawer";
import AppButton from "src/components/AppButton";


const ProjectEmployees = () => {
  const { mangers, services, teachers } = useFindEmployeesByRole();
  return (
    <div>
      <div className="py-4">
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

          <Drawer>
            <DrawerOpenButton>
              <AppButton
                hover="bg-[#524bd4]"
                color="bg-[#4f46e5]"
                rightIcon={<IoMdAdd className="mr-1" />}
                radius={"xl"}
              >
                موظف جديد
              </AppButton>
            </DrawerOpenButton>
            <DrawerContents header="اضافة موظف">
              <CreateEmployee />
            </DrawerContents>
          </Drawer>
        </div>
      </div>

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
      {employees.map((employee: IEmployee) => (
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

const SingleEmployee = ({ employee }: { employee: IEmployee }) => {
  return (
    <Drawer>
      <DrawerOpenButton>
        <div className=" bg-white hover:bg-slate-100 py-3 px-4 border-b -mx-4 cursor-pointer ">
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
      </DrawerOpenButton>
      <DrawerContents>
        <FullEmployeeInfo employee={employee} />
      </DrawerContents>
    </Drawer>
  );
};

const FullEmployeeInfo = ({ employee }: { employee: IEmployee }) => {
  return (
    <div className="bg-white p-4  h-full scrollbar scrollbar-thumb-gray-500 scrollbar-track-white scrollbar-thin  scrollbar ">
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
