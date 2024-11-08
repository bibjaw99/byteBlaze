import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout.jsx";
import { Home } from "../pages/Home.jsx";
import { Blogs } from "../pages/Blogs.jsx";
import { Blog } from "../pages/Blog.jsx";
import { Content } from "../Components/Content/Content.jsx";
import { Author } from "../Components/Author/Author.jsx";
import { Bookmarks } from "../pages/Bookmarks.jsx";

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
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        element: <Blog></Blog>,
        children: [
          {
            index: true,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Content></Content>,
          },
          {
            path: "author",
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Author></Author>,
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
