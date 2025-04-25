import { useLayoutEffect, useRef } from "react";
import BgCanvas from "../canvases/BgCanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sloganSvg from '/sloganAno.svg';
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
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
            start: "top 90%",
          },
        }
      );
    }, []);
  return (
    <>
      <section id="service-section" ref={sectionRef}>
        <h3 className="area-tag">Services <br /><span>力になれること</span></h3>
        <h3 className="service-slogan">
          <img src={sloganSvg} alt="" />
        </h3>
        <p className="service-policy-detail fade-up">
          ウェブは芸術ではなく目的があって、さらに他者のために作られるコミュニケーションの方法の一つだと考えています。
          <br />
          <br />
          キレイにこだわるより、他者とどう話すかを考えながらウェブ制作をしています。
          <br />
          <br />
          もちろん、その一端でかっこいい表現や新しい技術も言葉では表せない自分の表現として捉えており、依頼主様の考えや伝えたいことが表現ができるように全力で取り組みます。
          <br />
          <br />
          webと、私と、あなたの力であなたの想い、咲かせます。
        </p>

        <BgCanvas />
        <div className="develop-policy-container fade-up">
          <h4>front-end development</h4>
          <p>
            web制作をします。デザインからコーディング、公開まで全てお任せいただけるサービスを
            提供しています。
            <br />
            アニメーションとCGが得意です。イベントサイト、コーポレートサイトなどなんでも制作いたします。
            <br />
            wordpress、studio対応可能です。
            <br /><br />
            あなた様のご予算やこうしたい!!の要望、展望に合わせてサービスを提供します。
            <br /><br />
            ぜひお気軽にご相談ください。
          </p>
        </div>
      </section>
      <div className="service-end-radius-bg"><div className="service-end-radius"></div></div>
    </>
  );
};

export default Service;
