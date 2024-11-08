import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../utils/LocalBookmarks";
import { BlogCard } from "../Components/BlogCard/BlogCard";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlogs(id);
    const savedBlogs = getBlogs();
    setBlogs(savedBlogs);
  };
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};
export { Bookmarks };
