import { useProject } from "src/utils/project";

const IndexScreen = () => {
  const { project, status, error } = useProject();

  return (
    <div>
      <p>اسم المشروع</p>
      <p>{project?.nameAr}</p>
    </div>
  );
};

export default IndexScreen;
