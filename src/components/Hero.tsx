import { useState } from "react";
import hero from "../assets/hero.png";
import { FadeLoader } from "react-spinners";

function Hero() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center h-[600px]">
          <FadeLoader color="#000000" />
        </div>
      )}
      <img
        src={hero}
        className={`w-full max-h-[600px] object-cover ${
          loading ? "hidden" : "block"
        }`}
        alt="Cover Image"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

export default Hero;
