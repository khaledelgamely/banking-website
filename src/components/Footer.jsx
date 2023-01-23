import "../styles/footer.css";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="footer" data-aos="fade-up">
    <div className="footer-up">
      <div className="footerId">
        <img
          src={logo}
          alt="hoobank"
          className="footerLogo"
        />
        <p className="footerDesc">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="footerList">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="">
            <h4 className="">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className=""
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    
    <div className="footer-down">
      <div className="social-icon">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className=""
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;