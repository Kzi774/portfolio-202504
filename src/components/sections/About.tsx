import { forwardRef, useLayoutEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import AboutCanvas from "../canvases/AboutCanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skillCard from '../../assets/images/portfoliocard.png'
gsap.registerPlugin(ScrollTrigger);

type AboutProps = {
  children?: React.ReactNode;
  boxRef: React.RefObject<HTMLDivElement | null>;
};

const About = forwardRef<HTMLDivElement, AboutProps>(({ boxRef }) => {

  //セクションフェードインアニメーションgsap
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

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
    <>
      <div className="about-start-radius-bg">
        <div className="about-start-radius"></div>
      </div>
      <section id="aboutSection" ref={sectionRef}>
        <h3 className="area-tag">About <br /><span>私について</span></h3>
        <AboutCanvas />
        <p className="self-introduction">
          こんにちは、
          <span>つつじ</span>
          です。
          <br />
          <br />
          フロントエンド開発を軸に、
          <span>インタラクティブなウェブ体験を創るエンジニア兼デザイナー</span>
          です。
          <br />
          <br />
          デザインとWeb制作を学び、前職ではエンジニア研修を経て人事部で新卒採用業務を担当。その後、個人事業主としてWebサイトやパンフレット制作を行っています。
          React / TypeScript / Next.js
          を使った開発が得意で、特にアニメーションやインタラクティブなUIの実装にこだわっています。
          <span>「技術で人と人をつなぐ」</span>
          ことを意識し、使いやすくワクワクするWeb体験を届けることが目標です。
          <br />
          <br />
          将来的には、インタラクティブなウェブコンテンツを手がける制作会社で、最前線の技術を活かして成長していきたいと考えています。
        </p>
        <div className="profile-detail">
          <div className="profile-block">
            <p className="profile-title">birthday</p>
            <p>1999/12/16</p>
          </div>
          <div className="profile-block">
            <p className="profile-title">Hometown</p>
            <p>Shizuoka</p>
          </div>
          <div className="profile-block">
            <p className="profile-title">Hobbies</p>
            <p>Reading | Walking | Eating | Gardening</p>
          </div>
          <div className="profile-block">
            <p className="profile-title">SNS + α</p>
            <a
              href="https://x.com/tsu2ji_design"
              target="_blank"
              rel="noopener noreferrer"
              className="x-link"
            >
              X(@tsu2ji_design)
            </a>
            <span>　</span>
            <a
              href="https://github.com/Kzi774"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
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
          </div>
        </div>
        <div ref={boxRef} className="rollSticker-wrapper">
          <div className="rollSticker">
            {Array(2)
              .fill(
                "好きな本 キッチン📖  好きな食べ物 からあげ🐔  好きな花 つつじ🌱  好きな動物 ねこ🐱  好きな果物 もも🍑  好きな色青  好きなフォント Zen Maru Gothic  好きな車シビック🚗  好きな漫画 ジョジョの奇妙な冒険  好きなパン米粉パン🥐  好きなゲーム ペルソナシリーズ3⃣  好きな趣味  筋トレ、自転車🚴🏻  "
              )
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>

        <div className="card-header">
          <span>Skill card</span>
        </div>
        <Tilt className="card-wrapper">
          <div>
            <img src={skillCard} alt="" />
          </div>
        </Tilt>
      </section>
    </>
  );
});

export default About;
