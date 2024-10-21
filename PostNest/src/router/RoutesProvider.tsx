import { useAuth } from "@/context/AuthContext";
import Login from "@/modules/authorization/login/Login";
import Registration from "@/modules/authorization/registration/Registration";
import MainPage from "@/modules/user/MainPage";
import Home from "@/modules/user/home/Home";
import PrivacyPolicy from "@/modules/user/privacyPolicy/PrivacyPolicy";
import Profile from "@/modules/user/profile/Profile";
import Saved from "@/modules/user/saved/Saved";
import Support from "@/modules/user/support/Support";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
  const isAuthorized = useAuth()?.isAuthorized;
  const authorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainPage />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
  );

  const anAuthorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </>
    )
  );

  return (
    <RouterProvider router={isAuthorized ? authorizedProvider : anAuthorizedProvider} />
  );
}
