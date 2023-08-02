import dynamic from 'next/dynamic';

const Details = dynamic(() => import('./Details'), {
  ssr: false
});

export default Details;
