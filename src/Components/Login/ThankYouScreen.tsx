import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ThankYouScreen() {
  const navigate = useNavigate();
  const [redirectTime] = useState(5);
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, redirectTime * 1000);
    return () => clearTimeout(timerId);
  }, [redirectTime, navigate]);
  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-green-400 text-3xl font-semibold mb-4 text-center">
        THANK YOU
      </h1>
      <p className="text-center">
        You will be redirected to the login screen shortly.
      </p>
    </div>
  );
}

export default ThankYouScreen;
