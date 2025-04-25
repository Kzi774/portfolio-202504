import {
  forwardRef,
  RefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import firstview1 from '../../assets/images/firstview1.JPG'
import firstview2 from '../../assets/images/firstview2.JPG'
import firstview3 from '../../assets/images/firstview3.JPG'

interface FirstViewProps {
  fade: boolean;
  boxRef: RefObject<HTMLDivElement | null>;
}

const FirstView = forwardRef<HTMLDivElement, FirstViewProps>(
  ({ fade, boxRef }) => {
    const images = [
      firstview1,
      firstview2,
      firstview3
    ];
    const mainvisualRef = useRef<HTMLDivElement>(null);
    const displayTime = 6000;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 背景画像の切り替え
    useLayoutEffect(() => {
      if (mainvisualRef.current) {
        // 初期状態の設定
        gsap.set(mainvisualRef.current, { opacity: 1 });
      }

      const bgInterval = setInterval(() => {
        if (mainvisualRef.current) {
          gsap.to(mainvisualRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
              gsap.to(mainvisualRef.current, {
                opacity: 1,
                duration: 0.5,
              });
            },
          });
        }
      }, displayTime);
      return () => clearInterval(bgInterval);
    }, [displayTime]);

    const stickerRef = useRef<HTMLDivElement>(null);
    const rotationTween = useRef<gsap.core.Tween | null>(null);

    const handleMouseEnter = () => {
      if (rotationTween.current) return; // 二重に再生しない
      rotationTween.current = gsap.to(stickerRef.current, {
        rotation: "+=360",
        duration: 1,
        ease: "none",
        repeat: -1,
      });
    };

    const handleMouseLeave = () => {
      rotationTween.current?.kill();
    rotationTween.current = null;
    };

    return (
      <section id="firstview">
        <div
          ref={mainvisualRef}
          className="mainvisual"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            opacity: fade ? 1 : 0,
          }}
        ></div>
        <div className="boringpoem">
          <p>
            I love interactive websites—endless possibilities of expression.
          </p>
          <p>
            They are extraordinary tools that let us traverse freely between
            flat and three-dimensional worlds.{" "}
          </p>
          <p>They are everything to me. </p>

          <p>That is why— </p>
          <p>I seek the power to communicate. </p>
          <p>I want to express. </p>
          <p>I want to become someone. </p>
          <p>I want to connect. </p>
          <p>I want to give. </p>
          <p>I want to entertain. </p>
          <p>I want to be entertained. </p>

          <p>For that, </p>
          <p>I design. </p>
          <p>I code. </p>
          <p>I release. </p>

          <p>I want to be freer, </p>

          <p>so I keep learning. </p>
          <p>
            If I master technology until it becomes an extension of my body,{" "}
          </p>
          <p>one day, it will become my wings of code. </p>
          <p>To sharpen my skills, </p>
          <p>to expand my wings, </p>
          <p>to make them flexible, </p>
          <p>to make them powerful </p>

          <p>I will become a developer.</p>
        </div>
        <div
          className="sticker"
          ref={stickerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>22</span>Z
        </div>
        <div ref={boxRef} className="rollSticker-wrapper">
          <div className="rollSticker">
            {Array(3)
              .fill("tsu2ji 🌱 つつじ🪴 tsu2ji 🌸 お仕事募集中!! 👀 ")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>
      </section>
    );
  }
);

FirstView.displayName = "FirstView";

export default FirstView;
