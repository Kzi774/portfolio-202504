import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactImg from '../../assets/images/contactImg.JPG';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  //コンタクトセクションボタン用アニメーションgsap
  const bgRef = useRef<HTMLDivElement>(null);
  const aTextRef = useRef<HTMLAnchorElement>(null);
  useLayoutEffect(() => {
    gsap.set(bgRef.current, { xPercent: -100 });
    gsap.set(bgRef.current, { color: "#E02C87" });
  }, []);

  const onMouseEnterContact = () => {
    gsap.to(bgRef.current, { xPercent: 0 });
    gsap.to(aTextRef.current, {
      color: "#fff",
      duration: 2,
      ease: "power2.out",
    });
  };

  const onMouseLeaveSendContact = () => {
    gsap.to(bgRef.current, { xPercent: -100 });
    gsap.to(aTextRef.current, {
      color: "#E02C87",
      duration: 2,
      ease: "power2.out",
    });
  };
  return (
    <>
      <section id="contact-section" ref={sectionRef}>
        <h3 className="area-tag">Contact <br /><span>ご連絡先</span></h3>
        <div className="contact-detail-wrapper fade-up">
          <p className="contact-detail">
            現在、次のステップに向けてお仕事を探しています。 ご依頼の相談、
            または「うちで働いてみない？」と思っていただけた方がいらっしゃいましたら、ぜひお気軽にご連絡ください！
            <br />
            <br />
            身近なつつじスポットの情報も、大募集中です🌸必ず写真を撮りに行きますのでご連絡お待ちしております！
            <br />
            <br />
            あなたの一通、楽しみにしています！
          </p>
          <a
            href="mailto:kozai.tsu2ji@gmail.com"
            ref={aTextRef}
            onMouseEnter={onMouseEnterContact}
            onMouseLeave={onMouseLeaveSendContact}
          >
            📮話しかける
            <div ref={bgRef} className="contact-btn-bg"></div>
          </a>
        </div>

        <img
          src={contactImg}
          alt=""
          className="fade-up"
        />
      </section>
      <div className="contact-end-radius-bg">
        <div className="contact-end-radius"></div>
      </div>
    </>
  );
};

export default Contact;
