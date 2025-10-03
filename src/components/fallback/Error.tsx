import { useNavigate } from "react-router-dom";
import { PAGE } from "../../pages/pageConfig";
import HomeBtn from "../buttons/HomeBtn";

interface IError {
  message: string;
}

const Error = ({ message }: IError) => {
  const navigate = useNavigate();

  if (message.includes("404")) navigate(PAGE.NOT_FOUND);
  return (
    <div className="flex flex-col bg-red-100 text-red-700 rounded-2xl h-full w-full justify-center items-center text-center">
      <div className="mb-6 font-medium text-3xl max-w-md">{message}</div>
      <HomeBtn />
    </div>
  );
};

export default Error;
