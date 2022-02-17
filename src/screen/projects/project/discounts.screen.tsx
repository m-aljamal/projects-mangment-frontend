import React from "react";
import { useParams } from "react-router-dom";
import ApprovedDiscount from "src/components/ApprovedDiscount";
import CreateDiscount from "src/components/CreateDiscount";
import NotApprovedDiscount from "src/components/NotApprovedDiscount";
import SingleDiscount from "src/components/SingleDiscount";
import { Sort } from "src/generated/generates";
import {
  useDeleteDiscount,
  useEmployeesListDiscounts,
  useUpdateDiscount,
} from "src/utils/discount";

const DiscountsList = () => {
  return (
    <div>
      <p>الخصومات</p>
      <CreateDiscount />
      <NotApprovedDiscount />
      <ApprovedDiscount />
    </div>
  );
};

export default DiscountsList;
