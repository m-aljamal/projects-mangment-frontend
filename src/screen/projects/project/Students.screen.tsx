import React from "react";
import PersonsHeader from "src/components/PersonsHeader";
import { useFindStudentsByProject } from "src/utils/students";

const StudentsScrren = () => {
  const { students } = useFindStudentsByProject();
  console.log(students);

  return (
  <div>
   <PersonsHeader/>
  </div>
  )
};

export default StudentsScrren;
