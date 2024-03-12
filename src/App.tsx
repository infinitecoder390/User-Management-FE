import "./App.css";
import AuthLayout from "./Components/Login/AuthLayout";
import Login from "./Components/Login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./Components/Login/Registration";
import LoaderSpiner from "./Components/common/LoaderSpiner";
import { useEffect, useState } from "react";
import HomeLayout from "./Components/Home/HomeLayout";
import About from "./Components/Home/About";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThankYouScreen from "./Components/Login/ThankYouScreen";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jwtToken, setJwtToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setJwtToken(storedToken);
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <LoaderSpiner />
      ) : (
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <AuthLayout />,
              children: [
                {
                  path: "/",
                  element: <Login />,
                },
                {
                  path: "/register-account",
                  element: <Registration />,
                },
                {
                  path: "/thank-you",
                  element: <ThankYouScreen />,
                },
                // {
                //   path: "/",
                //   element: <Home />,
                // },
                // {
                //   path: "/about-us",
                //   element: <About />,
                // },
              ],
            },
          ])}
        />
      )}
    </>
  );
}

export default App;
