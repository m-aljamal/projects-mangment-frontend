import React from "react";
import { Link } from "react-router-dom";
import CreateEmployee from "src/components/CreateEmployee";
import { useProjectId } from "src/utils/auth-provider";
import { useFindProjectsEmployees } from "src/utils/employees";

const ProjectEmployees = () => {
  const { employees } = useFindProjectsEmployees();

  return (
    <div>
      <div>
        <CreateEmployee />
      </div>
      <h2>موظفين المشروع</h2>
      <div>
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
