import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRouts from "../components/privateRoutes/PrivateRouts";
import MyArtAndCraftList from "../pages/MyArtAndCraftList";
import AllArtAndCraft from "../pages/AllArtAndCraft";
import CraftItems from "../components/CraftItems";
import ViewCraft from "../pages/ViewCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:3000/craftItems')
      },
      {
        path: '/add-craft-item',
        element: <PrivateRouts>
          <AddCraftItem />
        </PrivateRouts>
      },
      {
        path: '/my-art-and-craft-list',
        element: <PrivateRouts>
          <MyArtAndCraftList />
        </PrivateRouts>
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/all-art-and-craft",
        element: <AllArtAndCraft />,
        loader: () => fetch('http://localhost:3000/craftItems')
      },
      {
        path: "/view-details/:id",
        element: <PrivateRouts>
          <ViewCraft />
        </PrivateRouts>,
        loader: ({ params }) => fetch(`http://localhost:3000/craftItems/${params.id}`)
      }
    ],
  },
]);

export default router;