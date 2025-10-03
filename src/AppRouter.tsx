import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PAGE } from "./pages/pageConfig";
import { lazy } from "react";
import MainLayout from "./layouts/MainLayout";
const PhotosPage = lazy(() => import("./pages/photos/PhotosPage"));
const HistoryPage = lazy(() => import("./pages/history/HistoryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path={PAGE.BASE}>
          <Route index element={<Navigate to={PAGE.PHOTOS} />} />

          <Route path={PAGE.PHOTOS} element={<PhotosPage />} />
          <Route path={PAGE.HISTORY} element={<HistoryPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
