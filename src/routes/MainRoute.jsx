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
import ViewCraft from "../pages/ViewCraft";
import UpdateItem from "../pages/UpdateItem";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://backend-omega-snowy.vercel.app/craftItems')
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
        path: "/update-item/:id",
        element: <PrivateRouts>
          <UpdateItem />
        </PrivateRouts>,
        loader: ({params}) => fetch(`https://backend-omega-snowy.vercel.app/singleProduct/${params.id}`)
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
        loader: () => fetch('https://backend-omega-snowy.vercel.app/craftItems')
      },
      {
        path: "/view-details/:id",
        element: <PrivateRouts>
          <ViewCraft />
        </PrivateRouts>,
        loader: ({ params }) => fetch(`http://localhost:3000/craftItems/${params.id}`)
      }
    ],
  }
]);

export default router;