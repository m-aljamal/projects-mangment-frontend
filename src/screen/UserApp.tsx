import { Route, Routes } from "react-router-dom";
import AppLayout from "src/components/AppLayout";
import DashboardScreen from "./DashboardScreen";
import NotFound from "./NotFound";

const UserApp = () => {
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default UserApp;
