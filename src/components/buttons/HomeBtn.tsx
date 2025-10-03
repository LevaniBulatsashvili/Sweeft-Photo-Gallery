import { Link } from "react-router-dom";
import { PAGE } from "../../pages/pageConfig";

const HomeBtn = () => {
  return (
    <Link
      to={PAGE.BASE}
      className="inline-block bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600 transition"
    >
      Go Back Home
    </Link>
  );
};

export default HomeBtn;
