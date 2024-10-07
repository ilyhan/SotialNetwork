import Login from "@/modules/login/Login";
import MainPage from "@/modules/user/MainPage";
import Home from "@/modules/user/home/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
  const isAuthorized = true;
  const authorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainPage />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<div />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
  );

  const anAuthorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<div />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </>
    )
  );

  return (
    <RouterProvider router={isAuthorized ? authorizedProvider : anAuthorizedProvider} />
  );
}
