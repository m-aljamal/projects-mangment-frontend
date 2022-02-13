import React from "react";
import { calculateDiscount } from "src/utils/calculateSalaryDiscount";
import { useSalariesList } from "src/utils/employees";

const Salaries = () => {
  const { salaries, error, isLoading } = useSalariesList();

  return (
    <div>
      <h2>قائمة الرواتب </h2>

      {salaries.map((sala) => (
        <EmployeeSalary key={sala.employee_id} salary={sala} />
      ))}
    </div>
  );
};

const EmployeeSalary = ({ salary }: any) => {
  const salaryDiscount = salary.discount
    ? calculateDiscount(salary.employee_salary, +salary.discount)
    : 0;
  const totalSalary = salary.employee_salary - salaryDiscount;
  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>الاسم</p>
        <p>{salary.employee_name}</p>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>الراتب</p>
        <p>{salary.employee_salary}</p>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>الخصم</p>
        <p>{salaryDiscount}</p>
      </div>
      <div style={{ display: "flex", gap: " 30px" }}>
        <p>الإجمالي</p>
        <p>{totalSalary}</p>
      </div>
      <hr style={{ width: "250px" }} />
    </div>
  );
};

export default Salaries;
