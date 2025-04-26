import { useEffect, useState } from "react";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className={`loader ${fadeOut ? "fade-out" : ""}`}>
      <p className="loader-text">Welcome to tsu2ji portfolio</p>
    </div>
  );
};

export default Loader;
