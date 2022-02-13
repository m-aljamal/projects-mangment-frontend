import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import FullPageErrorFallback from "src/components/FullPageErrorFallback";
import ProjectLayout from "src/components/ProjectLayout";
import DashboardScreen from "./DashboardScreen";
import EmployeeScreen from "./employees/EmployeeScreen";
import EmployeesScreen from "./employees/EmployeesListScreen";
import NotFound from "./NotFound";
import ProjectsScreen from "./projects/Index";
import StructureScreen from "./projects/project/StructureScreen";
const ProjectScreen = lazy(() => import("./projects/project/ProjectScreen"));

const AdminApp = () => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />

      <Route path="projects" element={<ProjectsScreen />} />

      <Route path="projects/:projectId" element={<ProjectLayout />}>
        {/* study this */}
        <Route
          index
          element={
            <Suspense fallback={<FullPageErrorFallback error="dsds" />}>
              <ProjectScreen />
            </Suspense>
          }
        />
        <Route path="structure" element={<StructureScreen />} />
      </Route>

      <Route path="/employees" element={<EmployeesScreen />} />
      <Route path="/employee/:employeeId" element={<EmployeeScreen />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminApp;
