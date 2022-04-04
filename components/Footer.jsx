import Link from "next/link";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 md:w-3/5 gap-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">BAba</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/materials">Learning Materials</Link>
            </li>
            <li>
              <Link href="/rules">Terms of Use</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contribute">Contribute</Link>
            </li>
            <li>
              <Link href="/feedback">Send Feedback</Link>
            </li>
            <li>
              <Link href="/report">Report Issue</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Contact</h3>
          <ul className="space-y-2">
            {/* <li>
              <Link href="/">
                <p className="flex space-x-4">
                  <span>_______</span> <FiTwitter size={18} />
                </p>
              </Link>
            </li> */}
            <li>
              <Link href="/">
                <p className="flex space-x-4">
                  <span>+233 241 779 131</span> <BsWhatsapp size={18} />
                </p>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <p className="flex space-x-4">
                  <span>_______</span> <FiInstagram size={18} />
                </p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className="flex space-x-4">
                  <span>_______</span> <FiFacebook size={18} />
                </p>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-sm">
        <p>seia x copyright &copy;2022 all right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
