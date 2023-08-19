import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import error from '../components/assets/error.svg';

export default function CustomError() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
        <Image alt="" src={error} />
        <div style={{ fontSize: '26px', fontWeight: 'bold' }}>Terjadi Kendala!</div>
        <div style={{ color: '#ff0000', fontSize: '16px' }}>Silahkan ulangi halaman ini atau tunggu beberapa saat.</div>
      </div>
    </>
  );
}
