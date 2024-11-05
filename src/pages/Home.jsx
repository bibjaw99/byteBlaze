import { Hero } from "../Components/Hero/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex flex-col justify-center relative items-center min-h-[calc(100vh-132px)]">
      <Hero></Hero>

      <img src={wave} className="absolute bottom-0 w-full" />
    </div>
  );
};
export { Home };
