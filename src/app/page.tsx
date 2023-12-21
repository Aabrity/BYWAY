import React from 'react';
import Image from 'next/image';
import Features from '@/Components/Features';
import RootLayout from './layout';
import AdminPage from './admin/page';

export default function Home() {
  const isAdminPage = Boolean(
    typeof window === 'undefined' ? null : window.location.pathname.includes('/admin')
  );

  return (
    <>
      <div style={{ height: '80vh', position: 'relative' }}>
        <Image
          src="/assets/coverimage.jpg"
          alt="Welcome To ByWay"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Features />

      {/* <RootLayout>{isAdminPage && <AdminPage />}</RootLayout> */}
    </>
  );
}
