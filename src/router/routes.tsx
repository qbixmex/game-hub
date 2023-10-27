import { createBrowserRouter } from "react-router-dom";
import { Layout, HomePage, GameDetailPage } from "../pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:id', element: <GameDetailPage /> },
    ],
  },
]);


export default router;
