interface ConfettiProps {
  currentIndex: number;
  confettiToggle: boolean;
}

const Confetti = ({ currentIndex, confettiToggle}: ConfettiProps) => {
  const isMobile = window.innerWidth <= 768; // スマホ幅の判定
  const objectStyle = {
    width: isMobile ? "auto" : "100vw",  // スマホ時はwidthをautoに
    height: isMobile ? "100vh" : "auto", // スマホ時はheightを100vhに
    display: currentIndex === 0 ? 'block' : 'none',
  };

  const svgs = isMobile
    ? [
      "./src/assets/images/confettisp.svg",
      "./src/assets/images/confettisp2.svg",
      "./src/assets/images/confettisp3.svg",
    ]
    : [
      "./src/assets/images/lit-confetti1.svg",
      "./src/assets/images/lit-confetti2.svg",
      "./src/assets/images/lit-confetti3.svg",
    ];

  return (
    <div className="confetti">
      {svgs.map((svgs, index) => (
        <object
          key={index}
          id={`svg${index + 1}`}
          type="image/svg+xml"
          data={svgs}
          width="100vw"
          height="auto"
          style={currentIndex === index ? { ...objectStyle, display: 'block' } : { display: 'none' }}
        ></object>
      ))}
    </div>
  );
};

export default Confetti;