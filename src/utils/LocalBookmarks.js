import toast from "react-hot-toast";

const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

const saveBlog = (blog) => {
  const blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Bookmark already exist");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Bookmark successfully added");
};

const deleteBlogs = (id) => {
  let blogs = getBlogs();
  const remainings = blogs.filter((b) => {
    b.id !== id;
  });

  localStorage.setItem("blogs", JSON.stringify(remainings));
  toast.success("Bookmark removed successfully");
};

export { getBlogs, saveBlog, deleteBlogs };
