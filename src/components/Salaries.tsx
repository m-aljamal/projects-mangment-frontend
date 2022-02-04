import React from "react";
import { useEmployeesList } from "src/utils/employees";
import {
  DicByCurrentMonthQuery,
  useDicByCurrentMonthQuery,
} from "../generated/generates";
import graphqlRequestClient from "../lib/graphqlRequestClient";

const Salaries = () => {
  const { employees } = useEmployeesList();
  console.log(employees);

  return (
    <div>
      <h2>قائمة الرواتب </h2>

      {employees.map((emp) => (
        <div>
          <div style={{ display: "flex", gap: "30px" }}>
            <p>الاسم</p>
            <p>{emp.name}</p>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <p>الراتب</p>
            <p>{emp.salary}</p>
          </div>
          <hr style={{ width: "250px" }} />
        </div>
      ))}
    </div>
  );
};

export default Salaries;
