"use client";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { MdDone } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import FormInput, { FormTextArea } from "@/components/common/Form";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSend] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      contact: Yup.string().required("Contact is required"),
      email: Yup.string().required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      // await sendEmail(
      //   values.name,
      //   values.contact,
      //   values.email,
      //   values.message
      // ).then((res:any) => {
      //   if (res.success) {
      //   //   toast.success("Message sent successfully");
      //     setSend(true);
      //   } else {
      //   //   toast.error("Failed to send message!");
      //   }
      // });
      setLoading(false);
    },
  });

  return (
    <div className="">
        <div className="bg-white w-full my-3">
      {sent ? (
        <div className="px-4 md:px-10 h-full text-center flex flex-col justify-center items-center gap-5">
          <div className="h-20 w-20 bg-lime-500 text-white text-5xl grid place-items-center rounded-3xl my-3">
            <MdDone />
          </div>
          <h3 className="text-2xl text-lime-500 font-bold">Message Sent</h3>
          <p>
            {" "}
            Thank you for contacting us. <br />
            Your message has been sent to us. We will get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className="p-5 md:p-10">
          {/* <h3 className="h-[100px] font-[300] text-blue-500 text-4xl border-b text-center">
            Keep in <span className="font-[700]"> Touch</span>
          </h3> */}

          <FormInput
            formik={formik}
            label="Full Name"
            name="name"
            placeholder="Enter Full Name"
          />
          <FormInput
            formik={formik}
            label="Contact"
            name="contact"
            placeholder="Contact Number"
            type="number"
          />
          <FormInput
            formik={formik}
            label="Email"
            name="email"
            placeholder="Email ID"
          />
          <FormTextArea
            formik={formik}
            label="Message"
            name="message"
            placeholder="Enter Message"
          />
          <button className="w-full text-center bg-lime-500 text-white py-3 px-5 rounded-[10px] flex items-center justify-center duration-300 gap-2 hover:gap-3" type="submit" disabled={loading}>
            {loading ? "Sending Message...." : "Send Message"}{" "}
            <LuSendHorizontal className=" text-lg " />
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ContactForm;
