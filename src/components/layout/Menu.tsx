interface menuProp {
  show: boolean;
}

const menu = ({ show }: menuProp) => {
  return (
    <ul className={`scroll-menu ${show ? "show" : ""}`}>
      <li>
        <a href="#service-section">
          Services
          <br />
          <span>力になれること</span>
        </a>
      </li>
      <li>
        <a href="#works-horizon-section">
          Works
          <br />
          <span>つくったもの</span>
        </a>
      </li>
      <li>
        <a href="#aboutSection">
          About
          <br />
          <span>私について</span>
        </a>
      </li>
      <li>
        <a href="#contact-section">
          Contact
          <br />
          <span>ご連絡先</span>
        </a>
      </li>
    </ul>
  );
};

export default menu;
