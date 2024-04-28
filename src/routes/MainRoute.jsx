import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRouts from "../components/privateRoutes/PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/add-craft-item',
        element: <PrivateRouts>
          <AddCraftItem />
        </PrivateRouts>
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ],
  },
]);

export default router;