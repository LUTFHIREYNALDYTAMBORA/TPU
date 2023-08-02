import dynamic from 'next/dynamic';

const SebaranTPU = dynamic(() => import('./sebaranTPU'), {
  ssr: false
});

export default SebaranTPU;
