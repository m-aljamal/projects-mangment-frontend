import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "src/context/auth-context";
import { useProjectId } from "src/utils/auth-provider";
import { useProject } from "src/utils/project";

const IndexScreen = () => {
  const projectId = useProjectId();

  const { project, status, error } = useProject(projectId as string);

  return (
    <div>
      <p>اسم المشروع</p>
      <p>{project?.name}</p>
    </div>
  );
};

export default IndexScreen;
