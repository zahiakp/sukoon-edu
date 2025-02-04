"use client";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  BodyInput,
  FormUpload,
  TitleInput,
} from "@/components/common/FormAssets";
import { useRouter } from "next/navigation";
import { PiUploadBold } from "react-icons/pi";
import { useFormik } from "formik";
import { showMessage } from "@/components/common/CusToast";
import Link from "next/link";
import { Select } from "antd";
import { antFilterOption } from "@/components/common/antFillteroption";
import { IoMdAddCircleOutline } from "react-icons/io";
import { updateCareer, uploadcareer } from "../../Add/func";
import { MdOutlineFileUpload } from "react-icons/md";

const UploadForm = ({ data }: { data: any }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
useEffect(() => {
    if (data) {
      formik.setValues({
        title: data.title,
      type: data.type,
      body: data.body,
      });
    }
  }, [data]);
  const formik:any = useFormik({
    initialValues: {
      title: "",
      type: "",
      body: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Content is required"),
      type: Yup.string().required("Type is required"),
    }),
    
    onSubmit: async (values) => {
      try {
        setLoading(true);
        
          const newsUploadResult = await updateCareer(
            data.id,
            values.title,
            values.body,
            values.type,
          );
          if (newsUploadResult) {
            showMessage("Careers updated successfully","success")
            router.replace("/admin/careers/");
            router.refresh();
          } else {
            showMessage("Something went wrong!","error")
          }
        
        
      } catch (error) {
        console.error("Error:", error);
       showMessage("Something went wrong!","error")
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-[95%] max-w-[1100px] mx-auto flex items-center flex-col">
       <div className="flex items-center justify-start w-full mb-10">
          <div>
            <div className="text-zinc-900 text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href="/admin">Dashbord</Link>
                </li>
                <li>
                  <Link href="/admin/careers">Careers</Link>
                </li>
                <li>Edit</li>
              </ul>
            </div>
            <h1 className="text-3xl font-[500] flex items-center gap-2">
Edit Career               
            </h1>
          </div>
        </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="col-span-1">
          <TitleInput
            formik={formik}
            label="Career Name"
            name="title"
            placeholder="Career Name"

          />
          <div className="bg-white rounded-md mt-4 p-4 grid gap-1">
            <div className="flex justify-between items-center">
              <p>Type of Career</p>
            </div>
            <Select
              variant="borderless"
              // mode="tags"
              className="w-full border rounded-md focus:border-zinc-900 mt-2 py-1 cursor-pointer"
              showSearch
              placeholder="Type of Career"
              size="large"
              filterOption={antFilterOption}
              value={formik.values["type"]}
              onChange={(value) => formik.setFieldValue("type", value)}
              options={Categories}
            />
          </div>
        </div>
        <div className="col-span-1">
        <BodyInput formik={formik} label="" name="body" height={250}/>
          <div className="grid gap-2 w-full text-lg">
            <button
              className={`bg-zinc-800 hover:bg-black ${
                loading && "bg-zinc-700"
              } duration-300 rounded-lg text-base font-semibold text-white flex items-center justify-center gap-3 py-4 px-10`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p>Updating...</p>
                </>
              ) : (
                <>
                  <MdOutlineFileUpload className="text-lg ml-2" />
                  <p>Update</p>
                </>
              )}
            </button>
          </div>
          {/* <div
            className={` border mt-5 rounded-md p-4 grid gap-3 ${
              formik.errors["file"] && formik.touched["file"]
                ? "bg-red-100 border-red-500"
                : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <p>Select image</p>
            </div>
            <FormUpload
              add_url=""
              formik={formik}
              label="Upload Image"
              placeholder="Select Item"
              name="file"
              fileTypes="image/*"
            />
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;

export const Categories = [
  { label: "Job", value: "Job" },
  { label: "Intern", value: "Intern" },
  { label: "volunteering", value: "volunteering" },
  // { label: "Culture", value: "Culture" },
  // { label: "Commerce", value: "Commerce" },
  // { label: "Agriculture", value: "Agriculture" },
  // { label: "Living", value: "Living" },
];
