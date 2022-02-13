import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import { useAuth } from "src/context/auth-context";
import ProjectScreen from "./projects/project/ProjectScreen";
import StructureScreen from "./projects/project/Structure.screen";
import WorkLate from "./projects/project/WorkLate.screen";

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
        <Route path="worklate" element={<WorkLate/>} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={`/projects/${user.projectId}`} />}
      />
    </Routes>
  );
}

export default MangerApp;
