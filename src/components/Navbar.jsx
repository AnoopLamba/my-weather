import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../assets/Icons";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isContactPage = location.pathname === "/contact";

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-[1277px] w-full mx-auto pt-5 sm:pt-7 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="font-poppins text-2xl sm:text-4xl font-semibold text-white"
      >
        Weather
      </Link>

      {/* Say hello button */}
      {!isContactPage && (
        <button className="max-w-[170px] p-[6px_10px] sm:p-[8px_12px] rounded-xl bg-[linear-gradient(108deg,#3A5E72_4.95%,_#5C93B1_132.43%)]">
          <Link
            to="/contact"
            className="text-white font-poppins text-base sm:text-lg font-medium"
          >
            👋 Say Hello
          </Link>
        </button>
      )}

      {/* Back to home button */}
      {isContactPage && (
        <button
          onClick={navigateBack}
          className="max-w-[170px] p-[6px_10px] sm:p-[8px_12px] rounded-xl bg-[linear-gradient(108deg,#3A5E72_4.95%,_#5C93B1_132.43%)] transition-all duration-300 ease-in-out flex items-center justify-center gap-1 sm:gap-2 text-white"
        >
          <ArrowLeftIcon />
          <span className="font-poppins text-base sm:text-lg font-medium">
            Back
          </span>
        </button>
      )}
    </div>
  );
};

export default Navbar;
