"use client";
import { useState } from "react";
import * as Yup from "yup";
import {
  BodyInput,
  FormUpload,
  TitleInput,
} from "@/components/common/FormAssets";
import { useRouter } from "next/navigation";
import { PiUploadBold } from "react-icons/pi";
import { uploadArticle, uploadImage } from "./func";
import { useFormik } from "formik";
import { showMessage } from "@/components/common/CusToast";

const UploadForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      file: null,
      image: "",
      title: "",
      body: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Content is required"),
      file: Yup.mixed().notRequired(),
    }),
    onSubmit: async (values:any) => {
      setLoading(true);
      try {
        const image : any =
          values.file && values.file instanceof File
            ? await handleImageUpload(values.file)
            : values.image;

        if (image) {
          const newsUploadResult :any = await uploadArticle(
            values.title,
            values.body,
            image
          );

          if (newsUploadResult?.success) {
            showMessage("Article uploaded successfully", "success");
            router.replace("/admin/articles/");
            router.refresh();
          } else {
            throw new Error("Article upload failed.");
          }
        } else {
          throw new Error("Image upload failed.");
        }
      } catch (error:any) {
        console.error("Error:", error);
        showMessage(error.message || "Something went wrong!", "error");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleImageUpload = async (file:any) => {
    try {
      const result = await uploadImage(file);
      if (result?.success) {
        return result.filename;
      } else {
        throw new Error(result?.message || "Image upload failed.");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      return null;
    }
  };

  return (
    <div className="w-[95%] max-w-[1200px] flex items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="col-span-2">
          <TitleInput
            formik={formik}
            label="Title"
            name="title"
            placeholder="Title"
          />
          <BodyInput formik={formik} label="" name="body" />
        </div>
        <div className="col-span-1">
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
                  <p>Publishing...</p>
                </>
              ) : (
                <>
                  <PiUploadBold className="text-lg ml-2" />
                  <p>Publish</p>
                </>
              )}
            </button>
          </div>
          <div
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;

export const Categories = [
  { label: "General", value: "General" },
  { label: "Education", value: "Education" },
  { label: "Health", value: "Health" },
  { label: "Culture", value: "Culture" },
  { label: "Commerce", value: "Commerce" },
  { label: "Agriculture", value: "Agriculture" },
  { label: "Living", value: "Living" },
];
