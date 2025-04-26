import { useRef, useState, useEffect } from "react";
import "normalize.css";
import "./styles/App.css";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { useConfetti } from "./hooks/useConfetti";
import Loader from "./components/layout/Loader";
import Confetti from "./components/layout/Confetti";
import Header from "./components/layout/PageHeader";
import FirstView from "./components/sections/FirstView";
import Service from "./components/sections/Service";
import Works from "./components/sections/Works";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import PageFooter from "./components/layout/PageFooter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const boxRef1 = useRef<HTMLDivElement>(null!);
  const boxRef2 = useRef<HTMLDivElement>(null!);
  const boxRef3 = useRef<HTMLDivElement>(null!);

  //テキストスクロール制御
  useInfiniteScroll(boxRef1, 10);
  useInfiniteScroll(boxRef2, 50);
  useInfiniteScroll(boxRef3, 20);

  //紙ふぶき制御
  const {
    confettiToggle,
    setConfettiToggle,
    currentSvgIndex,
    confettiIconRef,
  } = useConfetti();

  //ローディング画面
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      <Confetti
        confettiToggle={confettiToggle}
        currentIndex={currentSvgIndex}
      />
      <Header
        confettiToggle={confettiToggle}
        setConfettiToggle={setConfettiToggle}
        confettiIconRef={confettiIconRef}
      />
      <FirstView fade={true} boxRef={boxRef1} />
      <Service />
      <Works />
      <About boxRef={boxRef2} />
      <Contact />
      <PageFooter boxRef={boxRef3} />
    </>
  );
}

export default App;
