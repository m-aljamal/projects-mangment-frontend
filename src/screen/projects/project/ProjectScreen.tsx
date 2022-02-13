import { useParams } from "react-router-dom";
import { useProject } from "src/utils/project";

const ProjectScreen = () => {
  const { projectId } = useParams();

  const { project, status, error } = useProject(projectId as string);

  return (
    <div>
      <p>اسم المشروع</p>
      <p>{project?.name}</p>
    </div>
  );
};

export default ProjectScreen;
