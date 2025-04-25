import AnchorLink from "react-anchor-link-smooth-scroll";

interface menuProp {
  show: boolean;
}

const menu = ({ show }: menuProp) => {
  return (
    <>
      <ul className={`scroll-menu ${show ? "show" : ""}`}>
        <li>
          <AnchorLink href="#service-section">
            Services
            <br />
            <span>力になれること</span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#works-horizon-section">
            Works
            <br />
            <span>つくったもの</span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#aboutSection">
            About
            <br />
            <span>私について</span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact-section">
            Contact
            <br />
            <span>ご連絡先</span>
          </AnchorLink>
        </li>
      </ul>
    </>
  );
};

export default menu;
