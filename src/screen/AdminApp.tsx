import { Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import DashboardScreen from "./DashboardScreen";
import EmployeeScreent from "./EmployeeScreent";
import NotFound from "./NotFound";
import ProjectsScreen from "./ProjectsScreen";

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
      <Route path="/projects" element={<ProjectsScreen />} />
      <Route path="/employees" element={<EmployeeScreent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminApp;
