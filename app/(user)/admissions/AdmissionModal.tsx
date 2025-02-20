'use client'
import React, { useRef, useState } from 'react'
import { Dialog } from 'primereact/dialog';
import FormInput, { FormSelect, FormTextArea } from '@/components/common/Form';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import { uploadTransaction } from '@/app/(user)/donate/[id]/func';
import { showMessage } from '@/components/common/CusToast';
// import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
// import { Button } from 'primereact/button';
// import { values } from 'pdf-lib';
import { Dropdown } from 'primereact/dropdown';
// import { MdOutlineArrowForward } from 'react-icons/md';
// import { IoMdArrowRoundBack } from 'react-icons/io';
// import { FaArrowLeft } from 'react-icons/fa';
// import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
// import { Checkbox } from 'primereact/checkbox';
// import { Certificate } from 'crypto';
// import { Typography } from 'antd';
// --------------------------------------------------
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { HiArrowLeft } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi2';
import { uploadAdmissionForm, uploadFile } from './func';
import { error } from 'console';
import { IoMdAddCircleOutline } from 'react-icons/io';

function AdmissionModal({visible,setVisible,setGreatingModal}:{visible:any,setVisible:any,setGreatingModal:any}) {
    const router = useRouter();
    const stepperRef:any = useRef(null);
    const [checked,setChecked] = useState(false)
    const [loading,setLoading] = useState(false)
    const [centerState,setCenterState] = useState<any>([])
    const generateUniqueReceiptNo = () => {
      return "REC" + Date.now() + Math.floor(Math.random() * 1000);
    };

    const Gender = [
      {label:"Male",value:"male"},
      {label:"Female",value:"female"},
      {label:"Other",value:"other"},
    ]

    const Exam_Center = [
      {label:"Uttar Pradesh",value:"Uttar Pradesh",centers:[
        {label:"Loni",value:"Loni"},
        {label:"Bareilly",value:"Bareilly"},
        {label:"Vahanpur",value:"Vahanpur"},
        {label:"Rampur",value:"Rampur"},
        {label:"Meerganj",value:"Meerganj"},
        {label:"Neoriya",value:"Neoriya"},
        {label:"Lakinpur",value:"Lakinpur"},
        {label:"Pilibhit",value:"Pilibhit"},
        {label:"Mathura",value:"Mathura"},
      ]},
      {label:"Delhi",value:"Delhi",centers:[
        {label:"Mustafabad",value:"Mustafabad"},
        {label:"Nizamuddin",value:"Nizamuddin"},
      ]},
      {label:"Haryana",value:"Haryana",centers:[
        {label:"Sudaka",value:"Sudaka"},
        {label:"Nuh",value:"Nuh"},
        {label:"Hathin",value:"Hathin"},
        {label:"Sohna",value:"Sohna"},
        {label:"Dhana",value:"Dhana"},
      ]},
      {label:"Rajasthan",value:"Rajasthan",centers:[
        {label:"Alwar",value:"Alwar"},
        {label:"Chimrawali",value:"Chimrawali"},
        {label:"Bheelamka",value:"Bheelamka"},
      ]},
      {label:"Uttarakhand",value:"Uttarakhand",centers:[
        {label:"Rudrapur",value:"Rudrapur"},
      ]},
    ];
    const Classes = [
      {label:"Class 5",value:"5"},
      {label:"Class 6",value:"6"},
    ];
  

    const Center = Exam_Center.find((item) => item.value === centerState)?.centers || [];
    

    const formik = useFormik({
      initialValues: {
        name: "",
        dob: "",
        guardianName: "",
        phone: "",
        gender: "",
        email: "",
        address: "",
        recentshcool: "",
        schooladdress: "",
        lastClass: "",
        passingyear: "",
        centerState: "",
        examcenter: "",
        photo: "",
        photoFile: null,
        marksheet: "",
        marksheetFile: null,
        certificate: "",
        certificateFile: null,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        dob: Yup.string().required("Date of Birth is required"),
        email: Yup.string().email("Invalid email address"),
        phone: Yup.string().required("Phone No is required"),
        gender: Yup.string().required("Gender is required"),
        guardianName: Yup.string().required("Guardian Name of Payment is required"),
        address: Yup.string().required("Residential Address is required"),
        recentshcool: Yup.string().required("Last Attended School is required"),
        lastClass: Yup.string().required("Last Passed Class is required"),
        schooladdress: Yup.string().required("School Address is required"),
        passingyear: Yup.string().required("Class 6 Passing Year is required"),
        centerState: Yup.string().required("Exam Center State is required"),
        examcenter: Yup.string().required("Exam Center is required"),
        photoFile: Yup.string().required("Photo is required"),
        certificateFile: Yup.string().required("Aadhaar/Birth Certificate is required"),
      }),
    
      onSubmit: async (values) => {
        setLoading(true);
        try {
          const updatedValues = { ...values };
    
          // Upload files and update the values object
          updatedValues.photo = await handleFileUpload(values.photoFile, 'photo');
          updatedValues.marksheet = await handleFileUpload(values.marksheetFile, 'marksheet');
          updatedValues.certificate = await handleFileUpload(values.certificateFile, 'certificate');
    
          // Update the formik state with the new values
          formik.setValues(updatedValues);
    
          console.log(updatedValues);
          const dataResp = await uploadAdmissionForm(updatedValues);
    
          if (dataResp.success) {
            console.log('Application Submitted successfully:', dataResp);
            showMessage('Application Submitted successfully', 'success');
            setActiveStep(0)
            formik.resetForm();
            setGreatingModal(true)
            setVisible(false);
          } else {
            console.error('Application submission failed:', dataResp);
            showMessage('Application submission failed', 'error');
          }
        } catch (error) {
          console.error('Adding failed:', error);
          showMessage('Adding failed', 'error');
        } finally {
          setLoading(false);
        }
      },
    });
    
    const handleFileUpload = async (file: File | null, fieldName: string) => {
      if (!file) return null;
    
      try {
        const response = await uploadFile(file, fieldName);
    
        if (response.success && response.filename) {
          console.log(`${fieldName}: ${response.filename}`);
          console.log(`${fieldName} successfully uploaded`);
          return response.filename;
        } else {
          showMessage(`Error while uploading ${fieldName}`, 'error');
          console.error(`Error while uploading ${fieldName}`);
          return null;
        }
      } catch (error) {
        console.error(`Error uploading ${fieldName}:`, error);
        showMessage(`Error uploading ${fieldName}`, 'error');
        return null;
      }
    };
    
  


// ----------------------------


const steps = [
  {
    label: 'Student Details',
    description: <>
    <FormInput formik={formik} label='Full Name' name='name' placeholder='Full Name' />
            <FormInput formik={formik} label='Date of Birth' type='date' name='dob' placeholder='Date of Birth' />
            <div className="py-2">
              <div className="text-sm text-primary-600 my-1">Gender</div>
                <Dropdown value={formik.values.gender} onChange={(e) => formik.setFieldValue('gender', e.value)} options={Gender} optionLabel="label" 
                  placeholder="Select a option" className={`${formik.errors.gender && formik.touched.gender ? "border-red-500" : "border-lime-500"} w-full border  rounded-lg md:w-14rem`} />
{formik.errors.gender && formik.touched.gender && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.gender}
          </p>
        )}
</div>
            <FormInput formik={formik} label='Parent/Guardian Name' name='guardianName' placeholder='Parent/Guardian Name' />
            <FormInput formik={formik} label='Contact Number' type='number' name='phone' placeholder='Contact Number' />
            <FormInput formik={formik} label='Email ID (if available)' name='email' type='email' placeholder='Email ID' />
            <FormTextArea formik={formik} label='Residential Address' name='address' placeholder='Residential Address' /></>,
  },
  {
    label: 'Academic Information',
    description:
      <>
      <FormInput formik={formik} label='Name of Last Attended School' name='recentshcool' placeholder='Name of Last Attended School' />
           <FormInput formik={formik} label='School Address' name='schooladdress' placeholder='School Address' />
           <div className="py-2">
              <div className="text-sm text-primary-600 my-1">Last Class Passed</div>
                <Dropdown value={formik.values.lastClass} onChange={(e) => formik.setFieldValue('lastClass', e.value)} options={Classes} optionLabel="label" 
                  placeholder="Select a option" className={`${formik.errors.lastClass && formik.touched.lastClass ? "border-red-500" : "border-lime-500"} w-full border  rounded-lg md:w-14rem`} />
{formik.errors.lastClass && formik.touched.lastClass && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.lastClass}
          </p>
        )}
</div>
           {formik.values.lastClass!="" && <FormInput formik={formik} label={`Class ${formik.values.lastClass} Passing Year`} name='passingyear' type='number' placeholder={`Class ${formik.values.lastClass} Passing Year`} />}
      </>,
  },
  {
    label: 'Entrance Exam Preference',
    description: <>
    <p className='text-sm pb-3 pt-1 '>
     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline-block mr-2 text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>
     Select an Exam Centre nearby, where you wish to attend Exam
</p>
    <div className="py-2">
    <div className="text-sm text-primary-600 my-1">Select State</div>
      <Dropdown value={formik.values.centerState} onChange={(e) => {formik.setFieldValue('centerState', e.value); setCenterState(e.value);}} options={Exam_Center} optionLabel="label" 
        placeholder="Select a option" className={`${formik.errors.gender && formik.touched.gender ? "border-red-500" : "border-lime-500"} w-full border  rounded-lg md:w-14rem`} />
    {formik.errors.centerState && formik.touched.centerState && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.centerState}
          </p>
        )}
    </div><div className="py-2">
    <div className="text-sm text-primary-600 my-1">Select Center</div>
      <Dropdown value={formik.values.examcenter} onChange={(e) => formik.setFieldValue('examcenter', e.value)} options={Center} optionLabel="label" 
        placeholder="Select a option" className={`${formik.errors.gender && formik.touched.gender ? "border-red-500" : "border-lime-500"} w-full border  rounded-lg md:w-14rem`} />
    {formik.errors.examcenter && formik.touched.examcenter && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.examcenter}
          </p>
        )}
    </div></>,
  },
  {
    label: 'Upload Documents',
    description: <>
<div className='pb-3 border-b'>
<div className="text-sm text-primary-600 my-2 font-semibold">Recent Passport-size Photo</div>
<div className={`file-upload border rounded-xl overflow-hidden ${formik.errors.photoFile && formik.touched.photoFile ? "border-red-500":"border-zinc-700"}`}>
<input accept='image/*'  onChange={(e) => formik.setFieldValue('photoFile', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            <div>
        {formik.errors.photoFile && formik.touched.photoFile && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.photoFile}
          </p>
       )}
      </div>
            </div>
            <div className='pb-3 border-b'>
          <div className="text-sm text-primary-600 my-2 font-semibold">Class 5/6 Marksheet or Certificate (if available)</div>
          <div className={`file-upload border rounded-xl overflow-hidden ${formik.errors.marksheetFile && formik.touched.marksheetFile ? "border-red-500":"border-zinc-700"}`}>
          <input accept='image/*,.pdf' onChange={(e) => formik.setFieldValue('marksheetFile', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            {formik.errors.marksheetFile && formik.touched.marksheetFile && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.marksheetFile}
          </p>
       )}
            </div>
            <div className='pb-3 border-b'>
          <div className="text-sm text-primary-600 my-2 font-semibold">ID Proof (Aadhaar/Birth Certificate)</div>
          <div className={`file-upload border rounded-xl overflow-hidden ${formik.errors.certificateFile && formik.touched.certificateFile ? "border-red-500":"border-zinc-700"}`}>
          <input accept='image/*,.pdf' onChange={(e) => formik.setFieldValue('certificateFile', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            {formik.errors.certificateFile && formik.touched.certificateFile && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.certificateFile}
          </p>
       )}
            </div>
            <p className='text-sm pt-3'>
            <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)} className="mr-2 checkbox checkbox-success checkbox-sm [--chkfg:white]" />
            I hereby declare that the information provided is true and correct to the best of my knowledge. I understand that admission will be based on merit and selection criteria.
</p>
<p className='text-sm pb-3 pt-1 text-red-500'>
     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline-block mr-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>
     Once you submit the application, you will not be able to edit it.
</p>
          </>,
  },
];


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const isStepFailed = (step: number) => {
    return step === 0;
  };

  return (
    <Dialog header="Admission Form" draggable={false} visible={visible} className='p-5 pl-3 w-[90%] max-w-[600px] rounded-3xl bg-white Plus-Jakarta' onHide={() => {if (!visible) return; setVisible(false); }}>
     <div className="card Plus-Jakarta" >
     <form onSubmit={formik.handleSubmit}>
        {/* <Stepper ref={stepperRef} orientation="vertical">
          <StepperPanel header="Student Details">
            <FormInput formik={formik} label='Full Name' name='name' placeholder='Full Name' />
            <FormInput formik={formik} label='Date of Birth' type='date' name='dob' placeholder='Date of Birth' />
            <div className="py-2">
              <div className="text-sm text-primary-600 my-1">Gender</div>
                <Dropdown value={formik.values.gender} onChange={(e) => formik.setFieldValue('gender', e.value)} options={Gender} optionLabel="label" 
                  placeholder="Select a option" className="w-full border border-lime-500 !hover:border-lime-500 rounded-lg md:w-14rem" />
              </div>
            <FormInput formik={formik} label='Parent/Guardian Name' name='guardianName' placeholder='Parent/Guardian Name' />
            <FormInput formik={formik} label='Contact Number' type='number' name='phone' placeholder='Contact Number' />
            <FormInput formik={formik} label='Email ID (if available)' name='email' type='email' placeholder='Email ID' />
            <FormTextArea formik={formik} label='Residential Address' name='address' placeholder='Residential Address' />
            <div className="flex py-4">
              <Button className='bg-green-500 py-2 px-5 rounded-xl text-white' label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
            </div>
         </StepperPanel>
         <StepperPanel header="Academic Information">
           <FormInput formik={formik} label='Name of Last Attended School' name='recentshcool' placeholder='Name of Last Attended School' />
           <FormInput formik={formik} label='School Address' name='schooladdress' placeholder='School Address' />
           <FormInput formik={formik} label='Class 6 Passing Year' name='passingyear' type='number' placeholder='Class 6 Passing Year' />
            <div className="flex py-4 gap-2">
              <Button className='bg-red-500 py-2 px-5 rounded-xl text-white' label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
              <Button className='bg-green-500 py-2 px-5 rounded-xl text-white' label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
            </div>
          </StepperPanel>
          <StepperPanel header="Entrance Exam Preference">
          <div className="py-2">
      <div className="text-sm text-primary-600 my-1">Select an Exam Centre nearby, where you wish to attend Exam</div>
      <Dropdown value={formik.values.gender} onChange={(e) => formik.setFieldValue('examcenter', e.value)} options={Exam_Center} optionLabel="label" 
        placeholder="Select a option" className="w-full border border-lime-500 !hover:border-lime-500 rounded-lg md:w-14rem" />
        </div>
        <div className="flex py-4 gap-2">
              <Button className='bg-red-500 py-2 px-5 rounded-xl text-white' label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
              <Button className='bg-green-500 py-2 px-5 rounded-xl text-white' label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
            </div>
          </StepperPanel>
          <StepperPanel header="Upload Documents">
            <div className='pb-5 border-b'>
          <div className="text-sm text-primary-600 my-2 font-semibold">Recent Passport-size Photo</div>
          <div className="file-upload border border-zinc-700 rounded-xl overflow-hidden">
          <input onChange={(e) => formik.setFieldValue('photo', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            <div>
        {formik.errors.photo && formik.touched.photo && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.photo}
          </p>
       )}
      </div>
            </div>
            <div className='pb-5 border-b'>
          <div className="text-sm text-primary-600 my-2 font-semibold">Class 6 Marksheet/Certificate</div>
          <div className="file-upload border border-zinc-700 rounded-xl overflow-hidden">
          <input onChange={(e) => formik.setFieldValue('marksheet', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            {formik.errors.marksheet && formik.touched.marksheet && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.marksheet}
          </p>
       )}
            </div>
            <div className='pb-5 border-b'>
          <div className="text-sm text-primary-600 my-2 font-semibold">ID Proof (Aadhaar/Birth Certificate)</div>
          <div className="file-upload border border-zinc-700 rounded-xl overflow-hidden">
          <input onChange={(e) => formik.setFieldValue('certificate', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            {formik.errors.certificate && formik.touched.certificate && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.certificate}
          </p>
       )}
            </div>
            <p className='text-sm pt-3'>
            <input type="checkbox" onChange={(e)=>setChecked(e.target.checked)} className="mr-2 checkbox checkbox-success checkbox-sm [--chkfg:white]" />
     I hereby declare that the information provided is true and correct to the best of my knowledge. I understand that admission will be based on merit and selection criteria.
</p>
<p className='text-sm pb-3 pt-1 text-red-500'>
     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline-block mr-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>
     Once you submit the application, you will not be able to edit it.
</p>
            <div className="flex py-4 gap-2">
              <button className='bg-red-500 flex gap-2 items-center justify-center py-2 px-5 rounded-lg font-semibold text-white' onClick={() => stepperRef.current.prevCallback()}><HiArrowLeft className='text-lg'/>
              Back</button>
              <button type='submit' className='bg-green-500 py-2 px-5 flex-1 font-semibold rounded-lg text-white' >Submit Admission</button>
            </div>
          </StepperPanel>
        </Stepper> */}


<Box sx={{ }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
            labelProps.error = true;
          }

          return (
          <Step key={step.label}>
            <StepLabel className=''
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <form onSubmit={formik.handleSubmit}><div>{step.description}</div></form>
              <Box sx={{ mb: 2 ,mt:2}}>
                <div className="flex py-1 gap-2 ">
              <button type='button' className={`${index === 0 ? "bg-zinc-300" : "bg-red-500"}  flex gap-2 items-center justify-center py-2 px-5 rounded-lg font-semibold text-white`} disabled={index === 0}
                  onClick={handleBack}><HiArrowLeft className='text-lg'/>Back</button>
             {index !== steps.length - 1 && <button type='button' className='bg-green-500 flex gap-2 items-center justify-center py-2 px-5 rounded-lg font-semibold text-white'
                  onClick={handleNext}>Continue<HiArrowRight className='text-lg'/></button>}
            {index === steps.length - 1 && <button type='submit' disabled={!checked} className='bg-green-500 disabled:bg-zinc-300 py-2 px-5 flex-1 font-semibold flex items-center justify-center rounded-lg text-white' >{loading ? (
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
                              <p>Submiting...</p>
                            </>
                          ) : (
                            <>
                              <p>Submit Application</p>
                            </>
                          )}</button>}
            </div>
              </Box>
            </StepContent>
          </Step>
        )})}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          {/* <p className='text-sm pt-3'>
            <input type="checkbox" onChange={(e)=>setChecked(e.target.checked)} className="mr-2 checkbox checkbox-success checkbox-sm [--chkfg:white]" />
     I hereby declare that the information provided is true and correct to the best of my knowledge. I understand that admission will be based on merit and selection criteria.
</p>
<p className='text-sm pb-3 pt-1 text-red-500'>
     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="inline-block mr-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>
     Once you submit the application, you will not be able to edit it.
</p>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <div className="flex pt-4 gap-2">
              <button className='bg-red-500 flex gap-2 items-center justify-center py-2 px-5 rounded-lg font-semibold text-white' onClick={() => stepperRef.current.prevCallback()}><HiArrowLeft className='text-lg'/>
              Back</button>
              <button type='submit' className='bg-green-500 py-2 px-5 flex-1 font-semibold rounded-lg text-white' >Submit Admission</button>
            </div> */}
        </Paper>
      )}
    </Box></form></div>
  </Dialog>
  )
}

export default AdmissionModal
