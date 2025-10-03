import { Link, useLocation } from "react-router-dom";
import { PAGE } from "../pages/pageConfig";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex items-center justify-center gap-12 py-3 bg-slate-700">
      <Link
        to={PAGE.PHOTOS}
        className={`text-2xl font-bold text-white rounded hover:text-white hover:underline hover:underline-offset-4 transition ${
          isActive(PAGE.PHOTOS) ? "underline underline-offset-4" : ""
        }`}
      >
        Gallery
      </Link>
      <Link
        to={PAGE.HISTORY}
        className={`text-2xl font-bold text-white  rounded hover:text-white hover:underline hover:underline-offset-4 transition ${
          isActive(PAGE.HISTORY) ? "underline underline-offset-4" : ""
        }`}
      >
        History
      </Link>
    </header>
  );
};

export default Header;
