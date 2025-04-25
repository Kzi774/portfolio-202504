import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Menu from "./Menu";

type HeaderProps= {
  confettiToggle: boolean;
  setConfettiToggle: Dispatch<SetStateAction<boolean>>;
  confettiIconRef: React.Ref<SVGSVGElement>;
};

function Header({ confettiToggle, setConfettiToggle, confettiIconRef }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <a href="#firstview" className="fv-header">
        <p>web / design</p>
        <h2>tsu2ji design</h2>
        <p className="subtitle">つつじデザイン</p>
      </a>

      <div className="confetti-toggle">
        {/* <label className="toggle-button-1" onChange={handleChange}> */}
        <label className="toggle-button-1">
          <input type="checkbox" checked={confettiToggle}
          onChange={() => setConfettiToggle(prev => !prev)}/>
        </label>
      
        <svg
          width="40"
          height="40"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="onIcon"
          ref={confettiIconRef}
        >
          <path
            d="M65.8599 131.891C54.3594 163.891 -4.63994 276.891 6.35993 292.891C17.3598 308.891 162.5 246.5 177.36 229.391M65.8599 131.891C80.8594 100.891 130.586 114.866 157.86 138.391C185.381 162.129 193.859 218.891 177.36 229.391M65.8599 131.891C57.3678 161.293 62.7144 185.353 82.8599 208.391C107.746 236.85 155.359 252.891 177.36 229.391"
            stroke="#E02C87"
            stroke-width="10"
          />
          <path
            d="M129.001 212C129.001 212 142.771 213.005 151.501 212C166.591 210.263 173.325 199.338 188.501 200C208.876 200.888 220.501 227.5 233.501 226.5C246.501 225.5 247.001 223 250.501 219C254.001 215 255.072 183.216 269.501 166.5C272.748 162.737 276.144 159.893 280.501 157.5C286.36 154.282 297.501 155.5 297.501 155.5M141.001 185C141.001 185 140.026 170.177 145.001 163C150.037 155.734 156.487 155.235 164.501 151.5C175.977 146.151 186 144.5 191 142.5C196 140.5 199.785 138.498 201.501 135.5C206.427 126.89 201.001 121 197.001 110.5C193.001 100 188.17 88.1995 197.001 80.5C202.716 75.5168 213 76.8 216 78C218.5 79 229.713 85.4084 238.5 91C244 94.5 246.997 96.1018 253.001 98C261.565 100.708 268.485 102.919 276.001 98C282.507 93.7416 283.317 87.9632 285.501 80.5C288.407 70.5677 287.532 64.1475 285.501 54C282.603 39.5272 268.001 20.5 268.001 20.5M99.0006 176.5C99.0006 176.5 106.574 166.173 110.501 159C113.101 154.25 115.041 151.714 116.501 146.5C118.763 138.414 117.09 133.376 116.501 125C115.582 111.934 110.501 92 110.501 92C110.501 92 108.568 79.6044 112.001 73C115.657 65.9642 118.551 61.7188 126 59C132.261 56.7148 138.933 56.2419 145.001 59C150.5 61.5 154.941 63.7359 158.001 69.5C160.681 74.5489 161.15 78.4005 160.001 84C158.856 89.5766 156.904 92.8922 152.501 96.5C145.075 102.584 137.312 100.833 128.001 98.5C123.25 97.3096 120.673 96.0642 116.501 93.5C108.733 88.7263 104.89 84.4907 100.501 76.5C97.0516 70.2212 96.0469 66.1636 96.0001 59C95.9592 52.7487 96.5155 49.2363 99.0006 43.5C101.584 37.536 103.46 34.1507 108.001 29.5C112.314 25.0818 115.464 23.2339 121.001 20.5C126.87 17.6016 137.001 15.5 137.001 15.5L147.501 14"
            stroke="#E02C87"
            stroke-width="10"
            data-toggle="true"
          />
          <path
            d="M54.5 87L46.5 98.5L66.5 108.5L71.5 98L54.5 87Z"
            fill="#E02C87"
            data-toggle="true"
          />
          <path
            d="M29 64L26.5 76.5C26.5 76.5 20.0029 73.3431 16 71C11.9971 68.6569 6 64.5 6 64.5L14.5 55.5L29 64Z"
            fill="#382CE0"
            data-toggle="true"
          />
          <path
            d="M37.5 39L50.5 43.5C50.5 43.5 51.7077 36.5196 52 32C52.2898 27.5183 52 20.5 52 20.5L39 22.5C39 22.5 39.3138 27.6954 39 31C38.6995 34.1644 37.5 39 37.5 39Z"
            fill="#2CE02C"
            data-toggle="true"
          />
          <path
            d="M191.5 26.5L179 29.5L183 49.5L195.5 47L191.5 26.5Z"
            fill="#E0A12C"
            data-toggle="true"
          />
          <path
            d="M222.5 0L234 2C234 2 232.05 9.50897 230 14C227.95 18.491 223.5 25 223.5 25L214 15.5C214 15.5 217.34 11.5266 219 8.5C220.66 5.47344 222.5 0 222.5 0Z"
            fill="#E02C87"
            data-toggle="true"
          />
          <path
            d="M250.5 117.5L239 121.5L244 139L256 135.5L250.5 117.5Z"
            fill="#E02C2C"
            data-toggle="true"
          />
          <path
            d="M213 166.5L223.5 157.5L235 170L224.5 179L213 166.5Z"
            fill="#A72CE0"
            data-toggle="true"
          />
          <path
            d="M297 236.5L277.5 234.5L278 247.5L295.5 248.5L297 236.5Z"
            fill="#E02C87"
            data-toggle="true"
          />
          <path
            d="M295.5 286.5L280.5 271.5L271.5 280.5L286.5 294.5L295.5 286.5Z"
            fill="#E02C2C"
            data-toggle="true"
          />
          <path
            d="M218 261L228 253C228 253 231.938 260.118 233.5 265C235.062 269.882 236 278 236 278L222.5 275.5C222.5 275.5 222.36 270.827 221.5 268C220.611 265.076 218 261 218 261Z"
            fill="#382CE0"
            data-toggle="true"
          />
          <path
            d="M42.5 187C42.5 187 53.3198 220.27 66.5 235.5C79.6802 250.73 110 265 110 265"
            stroke="#E02C87"
            stroke-width="9"
          />
          <path
            d="M24 230.5C24 230.5 27.4706 253.553 34.5 264C41.5294 274.447 60 284 60 284"
            stroke="#E02C87"
            stroke-width="9"
          />
        </svg>
      </div>

      <Menu show={showMenu} />
    </>
  );
}

export default Header;
