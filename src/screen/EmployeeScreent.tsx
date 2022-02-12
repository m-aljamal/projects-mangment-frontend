import React, { useState } from "react";
import { Role } from "src/generated/generates";
import { useFindAllEmployees } from "src/utils/employees";

const EmployeeScreent = () => {
  const [role, setRole] = useState(Role.Employee);
  const { employees } = useFindAllEmployees(role);

  return (
    <div>
      <h2>جميع الموظفين:</h2>
      <button
        onClick={() =>
          setRole(role === Role.Admin ? Role.Employee : Role.Admin)
        }
      >
        {role === Role.Admin ? "المشرفين" : "الموظفين"}
      </button>
      {employees?.map((emp) => (
        <div key={emp.id}>
          <h2>{emp.name}</h2>

          <p>{emp.role}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeScreent;
