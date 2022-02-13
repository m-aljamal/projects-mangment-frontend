import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import DashboardScreen from "./DashboardScreen";
import NotFound from "./NotFound";
import ProjectScreen from "./projects/project/ProjectScreen";
import StructureScreen from "./projects/project/StructureScreen";

const MangerApp = () => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
};

function AppRoutes() {
  return (
    <Routes>
      
      
      <Route path="/project/:projectId" element={<ProjectScreen />} />
      <Route
        path="/project/:projectId/structure"
        element={<StructureScreen />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MangerApp;
