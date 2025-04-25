import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const useConfetti = () => {
  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const confettiIconRef = useRef<SVGSVGElement>(null);
  const [confettiToggle, setConfettiToggle] = useState(true);
  

  // 紙ふぶきSVGアニメーション制御
  useLayoutEffect(() => {
    // 初期設定
    gsap.set(".confetti object", { display: "none" });
    gsap.set(`#svg${currentSvgIndex + 1}`, { display: "block" });
    if (confettiToggle) {
      const svgInterval = setInterval(() => {
        gsap.set(`#svg${currentSvgIndex + 1}`, { display: "none" });
        const nextIndex = (currentSvgIndex + 1) % 3;
        setCurrentSvgIndex(nextIndex);
        gsap.set(`#svg${nextIndex + 1}`, { display: "block" });
      }, 200);
      return () => clearInterval(svgInterval);
    } else {
      gsap.set(".confetti object", { display: "none" });
    }
  }, [confettiToggle, currentSvgIndex]);

  //紙ふぶきSVG ON/OFF
  useLayoutEffect(() => {
    if (!confettiIconRef.current) return;
    const paths = confettiIconRef.current.querySelectorAll('[data-toggle="true"]');
    gsap.to(paths, {
      opacity: confettiToggle ? 1 : 0,
      x: confettiToggle ? 30 : 0,
      y: confettiToggle ? -30 : 0,
      clearProps: confettiToggle ? undefined : "transform",
      duration: 0.5,
      ease: "power2.out",
    });
  }, [confettiToggle]);

  return { confettiToggle, setConfettiToggle, confettiIconRef, currentSvgIndex };
};