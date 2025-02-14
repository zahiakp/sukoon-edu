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

function AdmissionModal({visible,setVisible,setGreatingModal}:{visible:any,setVisible:any,setGreatingModal:any}) {
    const router = useRouter();
    const stepperRef:any = useRef(null);
    const [checked,setChecked] = useState(false)
    const generateUniqueReceiptNo = () => {
      return "REC" + Date.now() + Math.floor(Math.random() * 1000);
    };

    const Gender = [
      {label:"Male",value:"male"},
      {label:"Female",value:"female"},
      {label:"Other",value:"other"},
    ]

    const Exam_Center = [
      {label:"Uttar Pradesh",value:"Uttar Pradesh"},
      {label:"Delhi",value:"Delhi"},
      {label:"Haryana",value:"Haryana"},
      {label:"Rajasthan",value:"Rajasthan"},
    ]
  
    

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
       passingyear: "",
       examcenter: "",
       photo:"",
       photoFile:null,
       marksheet:"",
       marksheetFile:null,
       certificate:"",
       certificateFile:null,
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
       schooladdress: Yup.string().required("School Address is required"),
       passingyear: Yup.string().required("Class 6 Passing Year is required"),
       examcenter: Yup.string().required("Exam Center is required"),
       photoFile: Yup.string().required("Photo is required"),
       marksheetFile: Yup.string().required("Marksheet/Certificate is required"),
       certificateFile: Yup.string().required("Aadhaar/Birth Certificate is required"),
    }),
    
    onSubmit: async (values) => {
      try {
        console.log(values);
        
          await handleFileUpload(values.photoFile, 'photo');
          await handleFileUpload(values.certificateFile, 'certificate');
          await handleFileUpload(values.marksheetFile, 'marksheet');
      
          const dataResp = await uploadAdmissionForm(values);
      
          if (dataResp.success) {
            console.log('Application Submitted successfully:', dataResp);
            showMessage('Application Submitted successfully', 'success');
            // reset formik values 
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
        }
    },
  });
     
  const handleFileUpload = async (file: File | null, fieldName: string) => {
    if (!file) return;
  
    try {
      const response = await uploadFile(file,fieldName);
      if (response.success && response.filename) {
        console.log(fieldName+":",response.filename);
        formik.setFieldValue(fieldName, response.filename);
        showMessage(`${fieldName} successfully uploaded`,'success')
        console.log(`${fieldName} successfully uploaded`);
      } else {
        showMessage(`Error while uploading ${fieldName}`,'error')
        console.error(`Error while uploading ${fieldName}:`);
        throw new Error(`Error while uploading ${fieldName}`);
      }
    } catch (error) {
      console.error(`Error uploading ${fieldName}:`, error);
      throw error;
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
                  placeholder="Select a option" className="w-full border border-lime-500 !hover:border-lime-500 rounded-lg md:w-14rem" />
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
           <FormInput formik={formik} label='Class 6 Passing Year' name='passingyear' type='number' placeholder='Class 6 Passing Year' />
      </>,
  },
  {
    label: 'Entrance Exam Preference',
    description: <>
    <div className="text-sm text-primary-600 my-1">Select an Exam Centre nearby, where you wish to attend Exam</div>
      <Dropdown value={formik.values.examcenter} onChange={(e) => formik.setFieldValue('examcenter', e.value)} options={Exam_Center} optionLabel="label" 
        placeholder="Select a option" className="w-full border border-lime-500 !hover:border-lime-500 rounded-lg md:w-14rem" />
    </>,
  },
  {
    label: 'Upload Documents',
    description: <>
<div className='pb-3 border-b'>
<div className="text-sm text-primary-600 my-2 font-semibold">Recent Passport-size Photo</div>
          <div className="file-upload border border-zinc-700 rounded-xl overflow-hidden">
          <input onChange={(e) => formik.setFieldValue('photoFile', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            <div>
        {formik.errors.photo && formik.touched.photo && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.photo}
          </p>
       )}
      </div>
            </div>
            <div className='pb-3 border-b'>
          <div className="text-sm text-primary-600 my-2 font-semibold">Class 6 Marksheet/Certificate</div>
          <div className="file-upload border border-zinc-700 rounded-xl overflow-hidden">
          <input onChange={(e) => formik.setFieldValue('marksheetFile', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            {formik.errors.marksheet && formik.touched.marksheet && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.marksheet}
          </p>
       )}
            </div>
            <div className='pb-3 border-b'>
          <div className="text-sm text-primary-600 my-2 font-semibold">ID Proof (Aadhaar/Birth Certificate)</div>
          <div className="file-upload border border-zinc-700 rounded-xl overflow-hidden">
          <input onChange={(e) => formik.setFieldValue('certificateFile', e.target.files ? e.target.files[0] : null)} className="file-input rounded-xl w-full" id="fileInput" type="file" />
            </div>
            {formik.errors.certificate && formik.touched.certificate && (
          <p className="text-red-600 text-sm my-1 ml-1">
            {formik.errors.certificate}
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
    return step === 1;
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
            {index === steps.length - 1 && <button type='submit' disabled={!checked} className='bg-green-500 disabled:bg-zinc-300 py-2 px-5 flex-1 font-semibold rounded-lg text-white' >Submit Admission</button>}
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
