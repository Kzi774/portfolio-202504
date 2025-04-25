import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const Works = () => {

  const pagesWrapperRef = useRef<HTMLDivElement | null>(null);
  const pagesRef = useRef<HTMLDivElement | null>(null);
  const didEffect = useRef(false);

  //横スクロール制御
  useLayoutEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const pagesElement = pagesRef.current;
    const pagesWrapperElement = pagesWrapperRef.current;

    if (!pagesElement || !pagesWrapperElement) return;

    setupGsap(pagesElement, pagesWrapperElement);
  }, []);

  const setupGsap = (
    pagesElement: HTMLDivElement,
    pagesWrapperElement: HTMLDivElement
  ) => {
    gsap.to(pagesElement, {
      x: () => {
        const scrollWidth = pagesElement.scrollWidth;
        const wrapperWidth = pagesWrapperElement.clientWidth;
        return -(scrollWidth - wrapperWidth + (40 * 16) / 2); // 最後のコンテンツが中央に来るように調整
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#works-horizon-section",
        start: "top top",
        end: () => {
          const scrollWidth = pagesElement.scrollWidth;
          const wrapperWidth = pagesWrapperElement.clientWidth;
          return `+=${scrollWidth - wrapperWidth + (40 * 16) / 2}`;
        },
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  };

  const onMouseRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnterIMG = (target: HTMLElement) => {
    const q = gsap.utils.selector(target);
    gsap.to(q("img"), { scale: 1.2, duration: 0.5, ease: "power2.out" });
    gsap.to(q("h3"), { color: "#E02C87", duration: 0.5, ease: "power2.out" });
  };

  const handleMouseLeaveIMG = (target: HTMLElement) => {
    const q = gsap.utils.selector(target);
    gsap.to(q("img"), { scale: 1, duration: 0.5, ease: "power2.out" });
    gsap.to(q("h3"), { color: "#1A1A1A", duration: 0.5, ease: "power2.out" });
  };
  return (
    <section id="works-horizon-section">
      <div className="worksContainer">
        <div className="worksItemWrapper" ref={pagesWrapperRef}>
          <div className="worksItem" ref={pagesRef} id="pages">

          <div className="works-item-block">
              <a
                href="#firstview"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/portfolio-view.png"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/portfolio-view-sp.png"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>つつじデザイン2025 ポートフォリオサイト</h3>
                  <p className="work-category">web site design / cording</p>
                  <p className="work-date">2025.04</p>
                </div>
              </a>
            </div>

            <div className="works-item-block">
              <a
                href="https://newyearsite22z.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/nengajo-view.png"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/nengajo-view-sp.png"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>つつじデザイン2025 年賀サイト</h3>
                  <p className="work-category">web site design / cording</p>
                  <p className="work-date">2025.01</p>
                </div>
              </a>
            </div>

            <div className="works-item-block">
              <a
                href="https://backstage-sap.com/"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/backstage-view.png"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/backstage-view-sp.png"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>合同会社BackStage HP</h3>
                  <p className="work-category">web site design / cording</p>
                  <p className="work-date">2024.03</p>
                </div>
              </a>
            </div>

            <div className="works-item-block">
              <a
                href="https://tkaisei-hokkaido.com/"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/t-kaisei-view.png"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/t-kaisei-view-sp.png"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>つくば開成高等学校 北海道エリア HP</h3>
                  <p className="work-category">web site design / cording</p>
                  <p className="work-date">2024.03</p>
                </div>
              </a>
            </div>

            <div className="works-item-block">
              <a
                href="https://github.com/Kzi774/light-effect"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/lighteffect.gif"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/lighteffect.gif"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>文字に光が当たるアニメーション</h3>
                  <p className="work-category">cording</p>
                  <p className="work-date">2025.03</p>
                </div>
              </a>
            </div>

            <div className="works-item-block">
              <a
                href="https://github.com/Kzi774/card-change-animation"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/cardanime.gif"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/cardanime.gif"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>画像がカードのように切り替わるアニメーション</h3>
                  <p className="work-category">cording</p>
                  <p className="work-date">2025.03</p>
                </div>
              </a>
            </div>

            <div className="works-item-block">
              <a
                href="https://github.com/Kzi774/jumping-text"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/jumpingtext.gif"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/jumpingtext.gif"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>テキストが跳ねるアニメーション</h3>
                  <p className="work-category">cording</p>
                  <p className="work-date">2025.03</p>
                </div>
              </a>
            </div>

            <div className="works-item-block">
              <a
                href="https://github.com/Kzi774/scrollanimation"
                target="_blank"
                rel="noopener noreferrer"
                ref={onMouseRef}
                onMouseEnter={(e) => handleMouseEnterIMG(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeaveIMG(e.currentTarget)}
              >
                <div className="work-image-wrapper">
                  <img
                    src="/images/scrollTextBox.gif"
                    alt=""
                    className="work-pc-img"
                  />
                  <img
                    src="/images/scrollTextBox.gif"
                    alt=""
                    className="work-sp-img"
                  />
                </div>

                <div className="work-text-block">
                  <h3>スクロールアニメーション</h3>
                  <p className="work-category">cording</p>
                  <p className="work-date">2025.03</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="work-before">Works</div>
      <div className="work-left-txt">works</div>
      <div className="work-box-l"></div>
      <div className="work-box-r"></div>
      <div className="work-bottom-txt">tsu2ji's works</div>
    </section>
  );
};

export default Works;
