import React from 'react';
import styles from './Styles.module.css';
import {
  Grid, IconButton,
  Paper,
  // Select,FormControl, InputLabel, MenuItem,
} from '@mui/material';
import { Close, InsertDriveFile } from '@mui/icons-material';
import Map from '../Peta/Map';
import TableDashboard from '../../elements/TableDashboard';
import PropTypes from 'prop-types';
import data from './data';

const dataTPU = [
  {
    title: 'Jumlah TPU yang Sudah Operasional',
    value: '5',
  },
  {
    title: 'Luas Lahan TPU yang Sudah Operasional',
    value: '26.65 Ha',
  },
  {
    title: 'Jumlah TPU yang Belum Operasional/Lahan Cadangan',
    value: '15',
  },
  {
    title: 'Luas Lahan TPU yang Belum Operasional/Lahan Cadangan',
    value: '568.67 Ha',
  },
  {
    title: 'Luas Lahan TPU yang Belum Ada Penyerahan',
    value: '0.73 Ha',
  },
  {
    title: 'Total Luasan TPU Keseluruhan',
    value: '595.33 Ha',
  },
];

export default function SebaranTPU({ dataDetail }) {
  const [alert, setAlert] = React.useState(true);
  // const [filterTPU, setFilterTPu] = React.useState('semua');

  const handleDataDetail = (val) => {
    dataDetail(val);
  };

  const handleAlert = () => {
    setAlert(false);
  };

  // const handleChangeTPU = (e) => {
  //   setFilterTPu(e.target.value);
  // };

  return (
    <div>
      {alert &&
        <div className={styles.wrapAlert}>
          <div className={styles.boldAlert}>Selamat Datang!</div>
          <div className={styles.descAlert}>Anda bisa melihat data-data valid terkait Lahan TPU di Kabupaten Bekasi dengan mudah dan cepat pada halaman ini. </div>
          <IconButton onClick={handleAlert} sx={{ position: 'absolute', right: 2, top: 2 }}>
            <Close sx={{ fontSize: '16px' }} />
          </IconButton>
        </div>
      }
      <div className={styles.containerHead}>
        <div className={styles.title}>Sebaran TPU</div>
        <div>Anda dapat melihat data seluruh TPU pada halaman ini.</div>
        {/* <FormControl className={styles.wrappFilter} fullWidth>
          <InputLabel id="demo-simple-select-label">TPU</InputLabel>
          <Select
            id="demo-simple-select"
            label="TPU"
            labelId="demo-simple-select-label"
            onChange={handleChangeTPU}
            value={filterTPU}
          >
            <MenuItem value="semua">Semua</MenuItem>
            <MenuItem value="kabalen">Kabalen</MenuItem>
            <MenuItem value="mangunJaya">Mangunjaya</MenuItem>
            <MenuItem value="pasirTanjung">Pasir Tanjung</MenuItem>
            <MenuItem value="wanajaya">Wanajaya</MenuItem>
          </Select>
        </FormControl> */}
      </div>
      <Paper className="p-5 mt-5" elevation={3}>
        <div className={styles.wrapMaps}>
          <Map />
        </div>
      </Paper>
      <Grid container spacing={1} sx={{ margin: '20px 0px' }}>
        {dataTPU.map((val, idx) => {
          return (
            <Grid key={idx} xs={4}>
              <div className={styles.wrapCount}>
                <div className={styles.count}>
                  {val?.value}
                </div>
                <div style={{ lineHeight: '15px' }}><b>{val?.title}</b></div>
                <div className={styles.footerCount}>
                  <InsertDriveFile className={styles.iconSHP} /> Sumber Data : SHP</div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <div className={styles.title}>Data Keseluruhan</div>
      <TableDashboard data={data} onDetail={(val) => handleDataDetail(val?.newVal)} />
    </div>
  );
}

SebaranTPU.propTypes = {
  dataDetail: PropTypes.func
};

SebaranTPU.defaultProps = {
  dataDetail: null
};
