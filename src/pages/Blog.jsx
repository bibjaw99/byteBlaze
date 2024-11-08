import { useLoaderData, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { BsFillBookmarkFill, BsFillBookmarksFill } from "react-icons/bs";
import { saveBlog } from "../utils/LocalBookmarks";

const Blog = () => {
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
  } = blog;

  // tab indexing
  const [tabIndex, setTabIndex] = useState(0);

  const handleBookmark = (blog) => {
    saveBlog(blog);
  };

  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
              <p className="text-sm">
                read for {reading_time_minutes} minutes{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments {positive_reactions_count} views
              </p>
            </div>
            {/* tabs start */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
              <Link
                to=""
                onClick={() => setTabIndex(0)}
                rel="noopener noreferrer"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : "border-b"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>

              <Link
                to={`author`}
                onClick={() => setTabIndex(1)}
                rel="noopener noreferrer"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border border-b-0" : "border-b"} rounded-t-lg`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>

              {/* bookamrks button */}
              <div
                onClick={() => handleBookmark(blog)}
                className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden"
              >
                <BsFillBookmarkFill
                  className="text-primary"
                  size={20}
                ></BsFillBookmarkFill>
              </div>
            </div>
            {/* tabs end */}
          </div>
          <div className="">
            <p>Insert the actual text content here...</p>
          </div>
        </article>

        {/* children router tabs           */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export { Blog };
