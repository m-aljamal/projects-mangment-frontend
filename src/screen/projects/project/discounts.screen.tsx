import React from "react";
import { useParams } from "react-router-dom";
import CreateDiscount from "src/components/CreateDiscount";
import { Sort } from "src/generated/generates";
import {
  useDeleteDiscount,
  useEmployeesListDiscounts,
} from "src/utils/project";

const DiscountsList = () => {
  const { projectId } = useParams();
  const { discounts, error } = useEmployeesListDiscounts(
    projectId as string,
    Sort.Desc
  );

  const { mutate, error: deleteDiscountError } = useDeleteDiscount();

  return (
    <div>
      <p>الخصومات</p>
      <CreateDiscount/>
      {discounts.map((discount) => (
        <div key={discount.id} className="bg-gray-100 m-4 p-2">
          <p>{discount.employee.name}</p>
          <p>{discount.id}</p>
          <p>{discount.absence ? `خصم الغياب $ ${discount.absence}` : null}</p>

          <p>{discount.late ? `خصم التأخر $ ${discount.late}` : null}</p>
          <p>
            {discount.punishment
              ? `خصم العقوبات $ ${discount.punishment}`
              : null}
          </p>
          <p>{new Date(discount.date).toLocaleDateString()}</p>
          <p>الراتب {discount.employee.salary}</p>
          <p>الوظيفة {discount.employee.role}</p>

          <button
            onClick={() => mutate({ employeeId: discount.id })}
            className="bg-blue-200 p-1"
          >
            حذف
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiscountsList;
