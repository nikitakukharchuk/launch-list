import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import { PageNotFound } from "../Page404/PageNotFound";
import { DetailPage } from "../DetailPage/DetailPage";


export const PATH = {
    LAUNCH_PAGE: '/launch',
    ERROR_PAGE: '/404',
  };

export const Navigates = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={PATH.ERROR_PAGE} element={<PageNotFound />} />
      <Route path={PATH.LAUNCH_PAGE + `/:id`} element={<DetailPage />} />
      <Route path='*' element={<Navigate to={PATH.ERROR_PAGE} />} />
    </Routes>
  );
};