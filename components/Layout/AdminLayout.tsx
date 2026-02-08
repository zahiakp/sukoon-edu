import React, { PropsWithChildren } from 'react';
import Dashboard from '../common/Dashboard';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

interface AdminLayoutProps {}

export const metadata: Metadata = {
  title: "Admin - Sukoon Edu Village",
  description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
};


const AdminLayout: React.FC<PropsWithChildren<AdminLayoutProps>> = (props) => {
  return (
    <main className='flex bg-gray-50'>
      <NextTopLoader
        color="#65A30D"
        height={4}
        showSpinner={false}
        shadow="0 0 10px #65A30D,0 0 5px #65A30D"
      />
      <Dashboard />
      <div className='flex flex-col flex-grow w-full pb-14 relative min-h-screen overflow-x-hidden'>
        {/* <div className="flex items-center justify-between p-5 px-10 bg-secondary/20">
          <p className="font-semibold text-xl text-primary">Saha Sheikh Abubakr Egypt</p>
        </div> */}
        <div className='p-10 px-14'>{props.children}</div>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default AdminLayout;
