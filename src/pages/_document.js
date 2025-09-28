import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          content="Standar codebase yang ditentukan untuk Frontend yang menggunakan SSR."
          name="description"
        />
        <link href="https://vjs.zencdn.net/8.3.0/video-js.css" rel="stylesheet" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/video.js@7/dist/video-js.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/@videojs/themes@1/dist/city/index.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
