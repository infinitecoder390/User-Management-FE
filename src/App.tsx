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
import NotFound from "./Components/common/NotFound";
import { useAppDispatch, useAppSelector } from "./Redux/hook";
import { setJwtToken } from "./Redux/Slice/authenticationSlice";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const jwt = useAppSelector((state: any) => state.authentication.jwtToken);
  useEffect(() => {
    const storedToken = sessionStorage.getItem("jwtToken");
    if (storedToken) {
      dispatch(setJwtToken(storedToken));
    }
  }, [jwt]);
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
              element: jwt ? <HomeLayout /> : <AuthLayout />,
              errorElement: <NotFound />,
              children: jwt
                ? [
                    {
                      path: "/",
                      element: <Home />,
                    },
                    {
                      path: "/about-us",
                      element: <About />,
                    },
                    {
                      path: "/home",
                      element: <Home />,
                    },
                  ]
                : [
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
                  ],
            },
          ])}
        />
      )}
    </>
  );
}
export default App;
