import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const {
    id,
    title,
    description,
    cover_image,
    tags,
    published_at,
    reading_time_minutes,
    comments_count,
    positive_reactions_count,
    body_html,
  } = blog;
  return (
    <div
      rel="noopener noreferrer"
      to={`/blog/${id}`}
      className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 border-primary border-opacity-30  p-4"
    >
      {/* cover image */}
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeHolderImage}
      />

      {/* article title */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>

        {/* published date */}
        <span className="text-xs dark:text-gray-600">
          {new Date(published_at).toLocaleDateString()}
        </span>

        <p>{description}</p>
      </div>

      {/* article hashtags */}
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed">
        {tags.map((tag, idx) => (
          <a
            key={idx}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline"
          >
            #{tag}
          </a>
        ))}
      </div>
      {/* body_html */}
      <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
    </div>
  );
};
export { Content };
