import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../Redux/hook";
import { registerUser } from "../../Redux/Slice/authenticationSlice";
function Registration() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [validationSchema] = useState(
    yup.object().shape({
      username: yup.string().required("Username is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Password is too short"),
      confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Passwords must match"),
    })
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = async (createUser: {
    username: string;
    password: string;
  }) => {
    await dispatch(registerUser(createUser));
    navigate("/");
  };
  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Create New Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="re-enter password" className="block text-gray-600">
            Re-enter Password
          </label>
          <input
            type="password"
            id="confirm-password"
            {...register("confirmPassword")}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Create New Account
        </button>
      </form>
      <div className="mt-6 text-blue-500 text-center">
        <Link to="/" className="hover:text-red-500">
          Sign In
        </Link>
      </div>
    </div>
  );
}
export default Registration;
