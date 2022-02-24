import { useProject } from "src/utils/project";
import face from "src/face.jpg";
import { useAuth } from "src/context/auth-context";
const IndexScreen = () => {
  const { project, status, error } = useProject();
  const { user }: any = useAuth();
  return (
    <div>
      <div className="flex items-center gap-3 pt-10 pr-8">
        <div>
          <img src={face} className="rounded-full w-16" />
        </div>
        <div>
          <h2 className="font-bold text-xl text-gray-700">
            مرحبا بك, {user.name}!
          </h2>
          <p className="text-gray-600">لديك رسائل ومهام</p>
        </div>
      </div>
    </div>
  );
};

export default IndexScreen;
