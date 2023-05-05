import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./shared/components/ui/Layout";
import { Suspense, lazy } from "react";
import { Loader } from "./shared/components/ui/Loader";

// pages
const Dashboard = lazy(() => import("./dashboard/pages"));
const Login = lazy(() => import("./auth/pages/Login"));
const Shows = lazy(() => import("./shows/pages"));
const Series = lazy(() => import("./series/pages"));
const Account = lazy(() => import("./account/pages"));
const PageNotFound = lazy(() => import("./shared/pages/PageNotFound"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shows" element={<Shows />} />
          <Route path="series" element={<Series />} />
          <Route path="account" element={<Account />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
