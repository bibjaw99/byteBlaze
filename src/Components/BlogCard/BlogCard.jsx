import { Link } from "react-router-dom";
import placeHolderImage from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { id, title, description, cover_image, published_at } = blog;
  return (
    <div className="flex relative">
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 transition border-2 border-primary border-opacity-30 hover:border-secondary hover:scale-105 p-4"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(blog.id)}
          className="bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5"
        >
          <MdDeleteForever
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};
export { BlogCard };
