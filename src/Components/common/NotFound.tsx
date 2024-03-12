import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const Timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(Timer);
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">404</h1>
        <p className="text-gray-700 text-center text-lg">
          Oops! The page you're looking for could not be found.
        </p>
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition duration-200 ease-in-out"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
