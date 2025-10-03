import HomeBtn from "../components/buttons/HomeBtn";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full rounded-2xl bg-red-100 text-gray-800 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <HomeBtn />
    </div>
  );
};

export default NotFoundPage;
