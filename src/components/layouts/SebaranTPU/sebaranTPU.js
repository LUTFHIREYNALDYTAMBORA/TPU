import React from 'react';
import styles from './Styles.module.css';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { Close, InsertDriveFile } from '@mui/icons-material';
import Map from '../Peta/Map';
import TableDashboard from '../../elements/TableDashboard';
import PropTypes from 'prop-types';

const dataTPU = [
  {
    title: 'Jumlah TPU yang Sudah Operasional',
    valu: '4',
  },
  {
    title: 'Luas Lahan TPU yang Sudah Operasional',
    valu: '120.000 Ha',
  },
  {
    title: 'Luas Lahan TPU yang Sudah Operasional',
    valu: '70.120.000 Ha',
  },
  {
    title: 'Total Luasan TPU Keseluruhan',
    valu: '70.240.000 Ha',
  },
];

export default function SebaranTPU({ dataDetail }) {
  const [alert, setAlert] = React.useState(true);
  const [filterTPU, setFilterTPu] = React.useState('semua');

  const handleDataDetail = (val) => {
    dataDetail(val);
  };

  const handleAlert = () => {
    setAlert(false);
  };

  const handleChangeTPU = (e) => {
    setFilterTPu(e.target.value);
  };


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
        <FormControl className={styles.wrappFilter} fullWidth>
          <InputLabel id="demo-simple-select-label">TPU</InputLabel>
          <Select
            id="demo-simple-select"
            label="TPU"
            labelId="demo-simple-select-label"
            onChange={handleChangeTPU}
            value={filterTPU}
          >
            <MenuItem value="semua">Semua</MenuItem>
            <MenuItem value="mangunJaya">Mangunjaya</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Paper className="p-5 mt-5" elevation={3}>
        <div className={styles.wrapMaps}>
          <Map />
        </div>
      </Paper>
      <Grid container spacing={1} sx={{ margin: '20px 0px' }}>
        {dataTPU.map((val, idx) => {
          return (
            <Grid key={idx} xs={3}>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #DFE3E8',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                height: '150px',
                justifyContent: 'space-between',
                margin: '7px',
                padding: '10px',

              }}>
                <div style={{
                  color: '#1EB74C',
                  fontSize: '24px',
                  fontWeight: 700
                }}>
                  {val?.valu}
                </div>
                <div><b>{val?.title}</b></div>
                <div style={{
                  alignItems: 'center',
                  color: '#C4CDD5',
                  display: 'flex',
                  fontSize: '12px'
                }}>
                  <InsertDriveFile sx={{ color: '#C4CDD5', fontSize: '14px', marginRight: '5px' }} /> Sumber Data : SHP</div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <div className={styles.title}>Data Keseluruhan</div>
      <TableDashboard onDetail={(val) => handleDataDetail(val?.newVal)} />
    </div>
  );
}

SebaranTPU.propTypes = {
  dataDetail: PropTypes.func
};

SebaranTPU.defaultProps = {
  dataDetail: null
};
