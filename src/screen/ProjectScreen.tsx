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
      <p>الهيكل التنظيمي</p>
      <p>موظفين المشروع</p>
      <p>الحضور اليومي</p>
      <p>الغياب</p>
      <p></p>
    </div>
  );
};

export default ProjectScreen;
