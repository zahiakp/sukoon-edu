"use client";

import FormInput, { FormCV, FormTextArea, FormUpload } from "@/components/common/Form";
import { useFormik } from "formik";
import { useState } from "react";
import { applyForm, uploadCV } from "./applyForm";
import { MdDone } from "react-icons/md";
import * as Yup from "yup";
import Button from "@/components/common/Button";
import Cancel from "@/components/common/Cancel";
import { showMessage } from "@/components/common/CusToast";

const ApplicationForm = ({ invId }: { invId: any }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      place: "",
      contact: "",
      email: "",
      cv: null,
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      place: Yup.string().required("Place is required"),
      contact: Yup.string().required("Contact is required"),
      email: Yup.string().required("Email is required"),
      cv: Yup.mixed().required("CV is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const folder = "cv";
        const imageUploadResult = await uploadCV(values.cv, folder);

        if (imageUploadResult.success) {
          const cv = imageUploadResult.filename;
          await applyForm(invId,values.name, values.place, values.contact, values.email,values.message, cv).then((res) => {
            if (res)
            {
              showMessage("success", "Application Submitted");
                // toast.success("Application Submitted");
                setApplied(true);
               }
           
        });
        } else {
          showMessage("error", "Something went wrong!");
        }
      } catch (error) {
        console.error("Error:", error);
        showMessage("error", "Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  if (applied) {
    return (
      <div className="bg-blue-50 px-8 py-32 rounded-lg border border-blue-500 flex flex-col justify-center items-center">
        <div className="h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center mb-4">
          <MdDone className="text-5xl text-white" />
        </div>
        <h1 className="text-2xl font-bold text-center text-primary-500">
          
          Application Submitted!
        </h1>
        <p className="py-2 text-center">
          Thank you for your interest in working with <b>Quest Foundation</b>.
          We will get back you as soon as possible. <br />
        </p>
        <br />
      </div>
    );
  }
  return (
    <div className="bg-primary-50 p-8 rounded-lg border border-primary-500">
      <h3 className="text-2xl font-bold text-primary-600 mb-2 border-b py-2">
        Apply Now
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          formik={formik}
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
        />
        <FormInput
          formik={formik}
          name="place"
          label="Place"
          placeholder="Place Details"
        />
        <FormInput
          formik={formik}
          name="contact"
          type="number"
          label="Contact"
          placeholder="Phone Number"
        />
        <FormInput
          formik={formik}
          name="email"
          type="email"
          label="Email"
          placeholder="Email ID"
        />
        <FormTextArea
          formik={formik}
          name="message"
          label="Message"
          placeholder="If you have any other information, please let us know"
        />
        <FormCV
          formik={formik}
          name="cv"
          label="Upload CV"
          placeholder="Upload Your CV"
          fileTypes="application/pdf, application/docx"
        />
        <div className="flex justify-center">
          <div className="flex items-center gap-4 w-full justify-center">
            <Cancel />
            <Button loading={loading} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
