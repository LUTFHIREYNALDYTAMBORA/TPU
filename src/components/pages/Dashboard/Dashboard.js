import Head from 'next/head';
import React from 'react';
import styles from './Styles.module.css';
import Topbar from '../../elements/Topbar';
import Sidebar from '../../elements/Sidebar';
import SebaranTPU from '../../layouts/SebaranTPU';
import KelolaTPU from '../../layouts/KelolaTPU';
import KelolaAKun from '../../layouts/KelolaAKun';
import Details from '../../layouts/Details';
import Footer from '../../elements/Footer';
import AddTPU from '../../layouts/AddTPU';
import AddAkun from '../../layouts/AddAkun';

export default function DashboardPage() {
  const [content, setContent] = React.useState(0);
  const [pageDetail, setPageDetail] = React.useState(false);
  const [dataDetails, setDataDetails] = React.useState([]);
  const [pageAddTPU, setPageAddTPU] = React.useState(false);
  const [pageAddAkun, setPageAddAkun] = React.useState(false);

  const handleMenu = (val) => {
    setContent(val);
    setPageDetail(false);
    setPageAddTPU(false);
    setPageAddAkun(false);
  };

  const handleDataDetail = (val) => {
    setDataDetails(val);
    setPageDetail(true);
  };

  const handleBack = (val) => {
    if (val === true) {
      setPageDetail(false);
      setPageAddTPU(false);
      setPageAddAkun(false);
    }
  };

  const handleAddTPU = (val) => {
    setPageAddTPU(val);
  };

  const handleAddAkun = (val) => {
    setPageAddAkun(val);
  };

  let contentDashboard;
  if (content === 0) {
    if (pageDetail) {
      contentDashboard = <Details data={dataDetails} onBack={handleBack} />;
    } else {
      contentDashboard = <SebaranTPU dataDetail={(val) => handleDataDetail(val)} />;
    }
  } else if (content === 1) {
    if (pageAddTPU) {
      contentDashboard = <AddTPU onBack={handleBack} />;
    } else {
      contentDashboard = <KelolaTPU addTPU={handleAddTPU} />;
    }
  } else {
    if (pageAddAkun) {
      contentDashboard = <AddAkun onBack={handleBack} />;
    } else {
      contentDashboard = <KelolaAKun addAkun={handleAddAkun} />;
    }
  }

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Topbar />
      <div className={styles.containerMenu}>
        <Sidebar valueMenu={handleMenu} />
        <div className={styles.containerContent}>
          {contentDashboard}
          <Footer />
        </div>
      </div>
    </div>
  );
}
