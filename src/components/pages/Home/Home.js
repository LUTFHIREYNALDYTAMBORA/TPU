import Head from 'next/head';
import React from 'react';

import HomeCardItem from '../../elements/HomeCardItem/HomeCardItem';
import homepageItemData from './constant';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <a className="text-6xl text-cyan-500 font-bold hover:underline">
          Codebase Frontend SSR
        </a>

        <code className="bg-gray-200 p-2 rounded-lg mt-3 text-2xl">
          Hello World!
        </code>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {homepageItemData.items.map((item, idx) => (
            <HomeCardItem item={item} key={idx} />
          ))}
        </div>
      </main>
    </div>
  );
}
