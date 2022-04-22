import {
  Drawer,
  DrawerContents,
  DrawerOpenButton,
} from "src/components/AppDrawer";
import PersonsHeader from "src/components/PersonsHeader";
import { Student } from "src/generated/generates";
import { useFindStudentsByProject } from "src/utils/students";

const StudentsScrren = () => {
  const { students } = useFindStudentsByProject();

  return (
    <div>
      <PersonsHeader />
      <div className="bg-slate-200   px-4 ">
        <div className="grid grid-cols-4 gap-5 py-6  ">
          {students.map((student: any) => (
            <SingleStudent key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsScrren;

const SingleStudent = ({ student }: { student: Student }) => {
  return (
    <Drawer>
      <DrawerOpenButton>
        <div className="bg-white shadow-sm py-3 cursor-pointer rounded-md">
          <div className="text-center">
            <div>
              <h2 className=" text-gray-800 text-lg mt-3">
                {student.firstName}
              </h2>
              <p className="text-sm text-gray-600">{student.lastName}</p>
            </div>
          </div>
        </div>
      </DrawerOpenButton>
      <DrawerContents>
        <div>dsd</div>
      </DrawerContents>
    </Drawer>
  );
};
