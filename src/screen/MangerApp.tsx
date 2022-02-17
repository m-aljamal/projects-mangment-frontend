import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import { useAuth } from "src/context/auth-context";
import ProjectEmployees from "./projects/project/ProjectEmployees.screen";
import IndexScreen from "./projects/project";
import StructureScreen from "./projects/project/Structure.screen";
import DiscountsList from "./projects/project/discounts.screen";

const MangerApp = () => {
  return <AppRoutes />;
};

function AppRoutes() {
  const { user }: any = useAuth();

  return (
    <Routes>
      <Route path="projects/:projectId" element={<AppLayout />}>
        <Route index element={<IndexScreen />} />
        <Route path="structure" element={<StructureScreen />} />
        <Route path="employees" element={<ProjectEmployees />} />
        <Route path="discounts" element={<DiscountsList />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to={`/projects/${user.projectId}`} />}
      />
    </Routes>
  );
}

export default MangerApp;
