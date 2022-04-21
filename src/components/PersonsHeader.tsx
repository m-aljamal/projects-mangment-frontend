import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import AppButton from "./AppButton";
import { Drawer, DrawerContents, DrawerOpenButton } from "./AppDrawer";
import CreateEmployee from "./CreateEmployee";

const PersonsHeader = () => {
  return (
    <div className="py-4 px-4">
      <div>
        <h2 className="text-xl font-bold text-gray-700">موظفين المشروع</h2>
        <p className="text-gray-600">81 موظف</p>
      </div>
      <div className="mt-4 flex gap-5">
        <form className="flex-1">
          <div className="flex border w-full rounded-2xl py-2 pr-2 shadow-sm">
            <AiOutlineSearch className="text-2xl text-gray-700" />
            <input
              placeholder="ابحث عن موظف"
              className="w-full outline-none pr-2"
            />
          </div>
        </form>

        <Drawer>
          <DrawerOpenButton>
            <AppButton
              hover="bg-[#524bd4]"
              color="bg-[#4f46e5]"
              rightIcon={<IoMdAdd className="mr-1" />}
            >
              موظف جديد
            </AppButton>
          </DrawerOpenButton>
          <DrawerContents header="اضافة موظف">
            <CreateEmployee />
          </DrawerContents>
        </Drawer>
      </div>
    </div>
  );
};

export default PersonsHeader;
