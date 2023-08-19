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
import data from '../../layouts/SebaranTPU/data';

export default function DashboardPage() {
  const [content, setContent] = React.useState(0);
  const [pageDetail, setPageDetail] = React.useState(false);
  const [dataDetails, setDataDetails] = React.useState([]);
  const [pageAddTPU, setPageAddTPU] = React.useState(false);
  const [pageEditTPU, setPageEditTPU] = React.useState(false);
  // const [idTPU, setIdTPU] = React.useState(false);
  const [dataTPU, setDataTPU] = React.useState({});
  const [pageAddAkun, setPageAddAkun] = React.useState(false);

  const handleMenu = (val) => {
    setContent(val);
    setPageDetail(false);
    setPageAddTPU(false);
    setPageAddAkun(false);
    setPageEditTPU(false);
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
      setPageEditTPU(false);
    }
  };

  const handleAddTPU = (val) => {
    setPageAddTPU(val);
  };

  const handleEditTPU = (val) => {
    setPageEditTPU(val);
  };

  const handleAddAkun = (val) => {
    setPageAddAkun(val);
  };

  const handleFindIdTPU = (id) => {
    let findTPU = data?.data?.filter(val => val?._id === id);
    let dataTPU = Object.assign({}, ...findTPU);
    setDataTPU(dataTPU);
  };

  let contentDashboard;
  if (content === 0) {
    if (pageDetail) {
      contentDashboard = <Details data={dataDetails} onBack={handleBack} />;
    } else {
      contentDashboard = <SebaranTPU dataDetail={(val) => handleDataDetail(val)} />;
    }
  } else if (content === 1) {
    if (pageAddTPU || pageEditTPU) {
      contentDashboard = <AddTPU dataTPU={dataTPU} onBack={handleBack} onEdit={pageEditTPU} />;
    } else {
      contentDashboard = <KelolaTPU addTPU={handleAddTPU} onEdit={handleEditTPU} onFindIdTPU={handleFindIdTPU} />;
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
