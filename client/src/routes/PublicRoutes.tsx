import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./../theme/index";
import PublicLayout from "../layouts/PublicLayout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./../styles.css";
import Spinner from "../components/UI/Spinner/Spinner";

const LazyHome = lazy(() => import("../pages/Home"));
const LazyDevices = lazy(() => import("../pages/Devices"));
const LazyNotFound = lazy(() => import("../pages/NotFound"));

const PublicRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route element={<LazyHome />} path="/" />
            <Route element={<LazyDevices />} path="/devices" />
            <Route element={<LazyNotFound />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default PublicRoutes;
