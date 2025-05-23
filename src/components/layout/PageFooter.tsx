import { forwardRef, useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type FooterProps = {
  boxRef: RefObject<HTMLDivElement | null>;
};

const PageFooter = forwardRef<HTMLDivElement, FooterProps>(({ boxRef }) => {
  //githubアイコンアニメーションgsap
  useLayoutEffect(() => {
    const icon = document.querySelector(".github-icon");

    if (icon) {
      const onMouseEnter = () => {
        gsap.to(icon, {
          scale: 1.3,
          rotate: 8,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      // イベントリスナーを設定
      icon.addEventListener("mouseenter", onMouseEnter);
      icon.addEventListener("mouseleave", onMouseLeave);

      // クリーンアップ関数
      return () => {
        icon.removeEventListener("mouseenter", onMouseEnter);
        icon.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return (
    <footer>
      <div ref={boxRef} className="rollSticker-wrapper">
        <div className="rollSticker">
          {Array(3)
            .fill(
              "ご覧いただきありがとうございます🌱また気軽にのぞいてくださいね〜！👋  "
            )
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>

      <a
        href="https://x.com/tsu2ji_design"
        className="footer-x x-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        X(@tsu2ji_design)
      </a>
      <a
        href="https://github.com/Kzi774"
        className="footer-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="#24292f"
          className="github-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          />
        </svg>
      </a>
      <p className="copyright">
        <small>© 2025 Created by tsu2ji design All Rights Reserved</small>
      </p>
    </footer>
  );
});

export default PageFooter;
