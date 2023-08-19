/* eslint-disable react/jsx-max-depth */
import React, {
  // useEffect,
  useState
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import tpu from '../../assets/tpu.svg';
import styles from './Styles.module.css';
import { Button } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import ContentHome from '../../layouts/Home';
import Map from '../../layouts/Peta';
import BasicModal from '../../elements/Modal';
import Login from '../../layouts/Login';
// import axios from 'axios';
// import CustomError from '../../../pages/500';

export default function Home() {
  const [value, setValue] = React.useState('1');
  const [login, setLogin] = useState(false);
  // const [dataAllTPU, setDataAllTPU] = useState({});
  // const [dataStreets, setDataStreets] = useState({});
  // const [errorGetData, setErrorGetData] = useState('');

  // useEffect(() => {
  //   getEvents();
  // }, []);

  // function getEvents() {
  //   axios.get('http://localhost:7000/api/inventarisasi/v1/public-user/get-geojson-all-tpu')
  //     .then((res) => {
  //       setDataAllTPU(res?.data?.data);
  //       setErrorGetData('');
  //     })
  //     .catch((err) => setErrorGetData(err));
  // }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const _handleLogin = () => {
    setLogin(current => !current);
  };

  let content;
  if (value === '1') {
    content = <ContentHome onManage={_handleLogin} />;
  } else {
    // if (errorGetData !== '') {
    //   content = <CustomError />;
    // } else {
    content = <Map />;
    // }
  }

  return (
    <div>
      <Head>
        <title>{value === '1' ? 'Beranda' : 'Peta'}</title>
      </Head>

      <BasicModal onClose={_handleLogin} open={login}>
        <Login />
      </BasicModal>

      <main>
        <div className={styles.header}>
          <div className="flex items-center">
            <div className={styles.logo}>
              <Image alt="" src={logo} />
            </div>
            <div className={styles.tpu}>
              <Image alt="" src={tpu} />
            </div>
            <div className={styles.containerTitleHeader}>
              <div className={styles.titleHeader}>Data TPU</div>
              <div className={styles.titleCity}>Pemerintah Daerah Kabupaten Bekasi</div>
            </div>
          </div>
          <div className="flex">
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{ sx: { backgroundColor: '#1EB74C' } }}
              >
                <Tab className={styles.titleTab} label="Beranda" value="1" />
                <Tab className={styles.titleTab} label="Peta" value="2" />
              </TabList>
            </TabContext>
            <Button
              className={styles.btnLogin}
              onClick={_handleLogin}
              size="small"
              variant="outlined"
            >
              Log In
            </Button>
          </div>
        </div>
        {content}
      </main >
    </div >
  );
}
