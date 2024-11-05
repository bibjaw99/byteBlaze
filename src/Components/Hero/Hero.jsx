import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero -mt-4">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome To ByteBlaze</h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <Link
              to="/blogs"
              class="relative inline-block px-4 py-2 font-medium group text-black"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary "></span>
              <span class="relative text-xl group-hover:text-white">
                Read Blogs Text
              </span>
            </Link>
            <Link
              to="/bookmarks"
              class="relative inline-block px-4 py-2 font-medium group text-black"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary  group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary "></span>
              <span class="relative text-xl group-hover:text-white">
                Bookmars
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Hero };
