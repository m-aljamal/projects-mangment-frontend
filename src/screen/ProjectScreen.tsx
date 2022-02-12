import React from "react";
import { useParams } from "react-router-dom";
import { useProject } from "src/utils/project";

const ProjectScreen = () => {
  const { projectId } = useParams();

  const { project, status } = useProject(projectId as string);

  return (
    <div>
      {project?.name}
      <p>{project?.type}</p>
    </div>
  );
};

export default ProjectScreen;
