import Head from 'next/head';
import React from 'react';

import { wrapper } from '../store/configureStore';
import '../styles/globals.css';

function MyApp(props) {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Codebase SSR</title>
        <meta
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          name="viewport"
        />
        {/* Favicon */}
        <link href="/favicon.ico" rel="shortcut icon" />

        {/* Meta OG Open Graph; Membagikan konten SEO kepada Facebook */}
        <meta content="Codebase Frontend SSR - TelkomDev" name="og:title" />
        <meta
          content="Standar codebase yang ditentukan untuk Frontend yang menggunakan SSR."
          name="og:description"
        />
        <meta content="Codebase Frontend SSR - TelkomDev" name="og:site_name" />
        <meta content="website" name="og:type" />
        <meta
          content="https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr"
          name="og:url"
        />

        {/* Meta Twitter; Membagikan konten SEO kepada Twitter */}
        <meta content="summary" name="twitter:card" />
        <meta
          content="Codebase Frontend SSR - TelkomDev"
          name="twitter:title"
        />
        <meta
          content="https://gitlab.playcourt.id/telkomdev/codebase-frontend-ssr"
          name="twitter:url"
        />
        <meta
          content="Standar codebase yang ditentukan untuk Frontend yang menggunakan SSR."
          name="twitter:description"
        />
      </Head>

      {/* Component yang dirender */}
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
