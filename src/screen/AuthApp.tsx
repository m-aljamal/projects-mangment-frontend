import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import FullPageErrorFallback from "src/components/FullPageErrorFallback";
import Nav from "src/components/Nav";
import { useAuth } from "src/context/auth-context";
import DashboardScreen from "./DashboardScreen";
import NotFound from "./NotFound";
import ProjectsScreen from "./ProjectsScreen";

const AuthApp = () => {
  const { user }: any = useAuth();

  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div className="flex justify-between" style={{ direction: "rtl" }}>
        <div className="bg-slate-800 text-white h-screen p-2 w-56 pt-5 sticky top-0  text-center ">
          <p className="mb-8">{user?.name}</p>
          <Nav />
        </div>
        <main className="bg-gray-200 w-full container pt-5 ">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppRoutes />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  );
};

function ErrorFallback({ error }: any) {
  return (
    <div role="alert">
      <p>يوجد مشكلة في التطبيق.</p>
      <pre>{error.message}</pre>
      <p>{error.stack}</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/projects" element={<ProjectsScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AuthApp;
