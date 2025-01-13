import React from 'react'
import LoginForm from './Form'

function page() {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col md:flex-row relative overflow-hidden'>
      <LoginForm/>
      <div className="mx-auto md:m-0 my-10 md:ml-10">
      <h1 className="text-3xl font-bold mb-4">Fee Structure</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Fee Component</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Admission Fee (one-time)</td>
            <td className="border border-gray-300 px-4 py-2">15,000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Annual Academic Fee</td>
            <td className="border border-gray-300 px-4 py-2">35,000</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Residential & Food Fee</td>
            <td className="border border-gray-300 px-4 py-2">88,000</td>
          </tr>
        </tbody>
      </table>
    </div>
      <img src="/svg/Logo.svg" alt="" className="w-[500px] hidden md:block absolute -bottom-44 -right-20 opacity-10 " />
    </div>
  )
}

export default page
