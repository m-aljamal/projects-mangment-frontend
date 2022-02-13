import { Link, Outlet, useParams } from "react-router-dom";
import { projectLinks } from "src/utils/links";

const ProjectLayout = () => {
  const { projectId } = useParams();

  return (
    <div>
      <div>
        <ul className="flex gap-8 bg-gray-400 p-2">
          {projectLinks(projectId as string).map((link) => (
            <li key={link.label}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default ProjectLayout;
