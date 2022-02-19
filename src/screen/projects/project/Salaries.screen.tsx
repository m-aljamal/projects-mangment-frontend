import { useParams } from "react-router-dom";
import { Salaries } from "src/generated/generates";
import { useFindEmployeesSalaries } from "src/utils/employees";

const SalariesScreen = () => {
  const { projectId } = useParams();
  const { employees, status } = useFindEmployeesSalaries(projectId as string);

  return (
    <div>
      <h2>قائمة الرواتب </h2>

      {employees.map((employee) => (
        <EmployeeSalary key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

interface EmployeeSalaryProps {
  employee: Salaries;
}

const EmployeeSalary = ({ employee }: EmployeeSalaryProps) => {
  return (
    <div className="bg-white m-3 p-2">
      <div style={{ display: "flex", gap: "30px" }}>
        <p>الاسم</p>
        <p>{employee.name}</p>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>الراتب</p>
        <p>{employee.salary}</p>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>الغياب</p>
        <p>{employee.absence}</p>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>التأخير</p>
        <p>{employee.late}</p>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>العقوبات</p>
        <p>{employee.punishment}</p>
      </div>
      <div style={{ display: "flex", gap: " 30px" }}>
        <p>الإجمالي</p>
        <p>{employee.totalSalart}</p>
      </div>
    </div>
  );
};

export default SalariesScreen;
