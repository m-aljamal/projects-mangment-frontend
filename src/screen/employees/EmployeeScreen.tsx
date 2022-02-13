import React from "react";
import { useParams } from "react-router-dom";
import { useFindEmployee } from "src/utils/employees";

const EmployeeScreen = () => {
  const { employeeId } = useParams();
  const { employee, status } = useFindEmployee(employeeId as string);

  return (
    <div>
      <p>{employee?.name}</p>
      <p>{employee?.createdAt}</p>
    </div>
  );
};

export default EmployeeScreen;
