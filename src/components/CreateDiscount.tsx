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
  const { register, handleSubmit } = useForm<IDiscount>();

  const onSubmit = (data: IDiscount) => {
    console.log(data);
  };
  return (
    <div>
      <p>اضافة خصم جديد</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("employeeId")}
          placeholder="employeeId"
          className="block m-1"
        />
        <input
          {...register("absence")}
          placeholder="absence"
          className="block m-1"
        />
        <input {...register("late")} placeholder="late" className="block m-1" />
        <input
          {...register("punishment")}
          placeholder="punishment"
          className="block m-1"
        />
        <input
          {...register("notes")}
          placeholder="notes"
          className="block m-1"
        />
        <input {...register("date")} placeholder="date" className="block m-1" />
        <button className="bg-blue-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDiscount;
