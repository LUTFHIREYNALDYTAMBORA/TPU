import dynamic from 'next/dynamic';

const TableDashboard = dynamic(() => import('./TableDashboard'), {
  ssr: false
});

export default TableDashboard;
