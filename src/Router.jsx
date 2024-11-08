import { Home } from "./pages/Home.jsx";
import { Blogs } from "./pages/Blogs.jsx";
import { Bookmarks } from "./pages/Bookmarks.jsx";
import { MainLayout } from "./Layouts/MainLayout.jsx";
import { Blog } from "./pages/Blog.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true, // to use the same as the parent
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=50"),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
