import { useEffect } from "react";
import gsap from "gsap";

const useInfiniteScroll = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  duration = 10
) => {
  useEffect(() => {
    if (!wrapperRef.current) return;
  
    const wrapper = wrapperRef.current;
    const inner = wrapper.querySelector(".rollSticker");
    if (!inner) return;
  
    const totalWidth = inner.scrollWidth / 2; // 複製してるので半分を基準に
  
    gsap.fromTo(
      inner,
      { x: 0 },
      {
        x: -totalWidth,
        duration,
        ease: "linear",
        repeat: -1,
      }
    );
  }, [wrapperRef, duration]);
};

export default useInfiniteScroll;
