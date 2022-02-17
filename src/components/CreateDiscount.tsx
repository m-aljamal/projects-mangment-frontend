import React from "react";
import { useForm } from "react-hook-form";

interface IDiscount {
  absence?: Number;
  date: Date;
  employeeId: String;
  late?: Number;
  notes: String;
  punishment?: Number;
}

const CreateDiscount = () => {
  const {} = useForm<IDiscount>();
  return (
    <div>
      <p>اضافة خصم جديد</p>
    </div>
  );
};

export default CreateDiscount;
