import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import SweatEquity from "../assets/images/SweatEquity.png";

const Footer = () => {
  const socialLinks = [
    { icon: twitter, href: "#" },
    { icon: facebook, href: "#" },
    { icon: instagram, href: "#" },
    { icon: github, href: "#" },
  ];
  return (
    <footer>
      <div>
        <div>
          <div>
            <img src={SweatEquity} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              omnis ut vitae adipisci error dignissimos, animi inventore
              reiciendis rem unde ex consequatur totam sunt quo, voluptatum
              deserunt. Esse, maxime iste.
            </p>

            <ul></ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
