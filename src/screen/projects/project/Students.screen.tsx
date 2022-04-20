import React from "react";
import { useFindStudentsByProject } from "src/utils/students";

const StudentsScrren = () => {
  const { students } = useFindStudentsByProject();
  console.log(students);

  return <div>Students.scrren</div>;
};

export default StudentsScrren;
