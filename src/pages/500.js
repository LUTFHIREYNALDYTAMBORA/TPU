import Head from 'next/head';
import React from 'react';

import ErrorPages from '../components/elements/ErrorPages/';

export default function CustomError() {
  return (
    <>
      <Head>
        <title>500 - Internal Server Error</title>
      </Head>
      <ErrorPages
        code="500"
        title="Oops! We had an error currently, try again later!"
      />
    </>
  );
}
