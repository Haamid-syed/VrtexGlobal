import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-wider mb-4">VrtexGlobal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Product design and development services for innovative thinkers and manufacturers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 text-sm hover:text-background transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              What We Do
            </h4>
            <ul className="space-y-3">
              {["Product Design", "Automotive Design", "Engineering Design", "Enclosure Design", "Prototyping", "Reverse Engineering"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 text-sm hover:text-background transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>info@vrtexglobal.com</li>
              <li>9975613695</li>
              <li>Undri, Pune</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VrtexGlobal. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Precision Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
