import React from "react";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/input/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string().email("").required(),
    password: Yup.string().required().min(3, "Password too short"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const callLoginApi = async (values) => {
    await axios
      .post(
        "http://localhost:8800/api/auth/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        navigate("/");
      });
  };
  return (
    <div className="flex flex-col my-12 flex-grow ">
      <div className=" flex-grow flex flex-col items-center justify-center">
        <div className=" mb-12">
          <h1 className="font-bergato text-4xl">Log In</h1>
          <h2 className=" text-gray-400 font-formal ">Welcome Back!</h2>
          <p className="text-gray-400 font-formal">Please enter your details</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={callLoginApi}
          validationSchema={schema}
          validateOnMount={true}
        >
          <Form className="flex flex-col space-y-4 " action="">
            <Input
              label="email address"
              placeholder="Email address"
              name="email"
              id="email"
              type="email"
            />

            <Input
              label="password"
              placeholder="Password"
              name="password"
              id="password"
              type="password"
            />
            <div className="flex justify-between">
              <p className="">Don't have an account</p>
              <Link
                className="italic underline text-emerald-500 font-bergato"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
            <button
              className="bg-teal-500 text-white font-formal font-semibold  rounded-md p-2"
              type="submit"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
