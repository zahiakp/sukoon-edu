"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { encodeId } from "@/components/common/decode";
import { showMessage } from "@/components/common/CusToast";
import { useCookies } from "react-cookie";

const VALID_EMAIL = "sukoonedu@gmail.com";
const VALID_PASSWORD = "sukoonedu@admin";
const TOKEN = "sahashaikh";

const LoginForm = () => {
  const [cookies, setCookies] = useCookies<any>([]);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      if (email !== VALID_EMAIL) {
        throw new Error("Invalid Email.");
      }

      if (password !== VALID_PASSWORD) {
        throw new Error("Incorrect Password.");
      }

      setCookies("token", encodeId(TOKEN));

      const storedPath = localStorage.getItem("redirectPath");

      if (storedPath && storedPath !== '/login') {
        localStorage.removeItem("redirectPath");
        window.location.replace(storedPath);
      } else {
        window.location.replace("/admin");
      }
    } catch (error: any) {
      showMessage(`${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleUnauthorizedAccess = () => {
    const currentPath = window.location.pathname;
    localStorage.setItem("redirectPath", currentPath);
    window.location.replace("/login");
  };

  useEffect(() => {
    const token = cookies.token;
    const currentPath = window.location.pathname;

    if (!token && currentPath !== "/login") {
      handleUnauthorizedAccess();
    }
  }, [cookies]);

  const formik = useFormik({
    initialValues: {
      email: "sukoonedu@gmail.com",
      password: "sukoonedu@admin",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      await login(values.email, values.password);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="h-full md:h-fit bg-white overflow-hidden md:rounded-3xl border border-lime-500 
        items-center justify-center w-full max-w-[600px] grid grid-cols-1 md:grid-cols-5"
    >
      <div className="bg-lime-50 p-10 w-full h-full flex items-center justify-center col-span-2">
        <img src="/svg/Logo.svg" alt="Logo" className="w-40 md:w-80" />
      </div>

      <div className="flex flex-col col-span-3 px-10 p-10 w-full">
        <h1 className="text-2xl font-bold my-3 text-lime-600">
          <span className="font-[400]">Login to</span> Panel
        </h1>

        <div className="w-full mb-4">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="px-4 py-3 rounded-xl border border-lime-600 outline-lime-600 my-1 w-full"
            placeholder="Email"
            aria-label="Email"
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="px-4 py-3 rounded-xl border border-lime-600 outline-lime-600 w-full"
            placeholder="Password"
            aria-label="Password"
            required
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-600 text-sm">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className={`py-3 px-7 w-full my-1 rounded-xl text-white text-lg 
            ${loading ? "bg-lime-700 cursor-not-allowed" : "bg-lime-600 text-white hover:bg-lime-700 duration-300"}`}
          disabled={loading}
        >
          {loading ? "Verifying Credentials..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
