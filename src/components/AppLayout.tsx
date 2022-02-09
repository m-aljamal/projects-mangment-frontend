import React, { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useAuth } from "src/context/auth-context";
import FullPageErrorFallback from "./FullPageErrorFallback";
import Nav from "./Nav";

const AppLayout: FC = ({ children }) => {
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
            {children}
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
      <pre>{error.response.errors[0].message}</pre>
      {/* <p>{error.stack}</p> */}
    </div>
  );
}

export default AppLayout;
