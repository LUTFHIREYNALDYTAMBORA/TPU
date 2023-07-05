import Head from 'next/head';
import React from 'react';

import ErrorPages from '../components/elements/ErrorPages/';

export default function CustomNotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <ErrorPages
        code="404"
        title="We are sorry, but the page you requested was not found"
      />
    </>
  );
}
