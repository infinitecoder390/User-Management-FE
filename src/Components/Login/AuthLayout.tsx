import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://b1694534.smushcdn.com/1694534/wp-content/uploads/2022/11/nubelson-fernandes-jKL2PvKN8Q0-unsplash-819x1024.jpg?lossy=1&strip=1&webp=1"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
