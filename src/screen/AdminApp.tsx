import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import FullPageErrorFallback from "src/components/FullPageErrorFallback";
import ProjectLayout from "src/components/ProjectLayout";
import DashboardScreen from "./DashboardScreen";
import EmployeeScreen from "./employees/EmployeeScreen";
import EmployeesScreen from "./employees/EmployeesListScreen";
import ProjectEmployees from "./employees/ProjectEmployees.screen";
import NotFound from "./NotFound";
import ProjectsScreen from "./projects/Index";
import StructureScreen from "./projects/project/Structure.screen";
import WorkLate from "./projects/project/WorkLate.screen";
const ProjectScreen = lazy(() => import("./projects/project/ProjectScreen"));

const AdminApp = () => {
  return <AppRoutes />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardScreen />} />
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
          <Route path="employees" element={<ProjectEmployees />} />
          <Route path="worklate" element={<WorkLate />} />
        </Route>

        <Route path="/employees" element={<EmployeesScreen />} />
        <Route path="/employee/:employeeId" element={<EmployeeScreen />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AdminApp;
