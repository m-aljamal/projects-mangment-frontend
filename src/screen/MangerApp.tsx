import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import { useAuth } from "src/context/auth-context";
import NotFound from "./NotFound";
import ProjectScreen from "./projects/project/ProjectScreen";
import StructureScreen from "./projects/project/StructureScreen";

const MangerApp = () => {
  return <AppRoutes />;
};

function AppRoutes() {
  const { user }: any = useAuth();

  return (
    <Routes>
      <Route path="projects/:projectId" element={<AppLayout />}>
        <Route index element={<ProjectScreen />} />
        <Route path="structure" element={<StructureScreen />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={`/projects/${user.projectId}`} />}
      />
    </Routes>
  );
}

export default MangerApp;
