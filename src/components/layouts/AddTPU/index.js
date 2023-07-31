/* eslint-disable react/jsx-max-depth */
import { ArrowBackOutlined } from '@mui/icons-material';
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Styles.module.css';

export default function AddTPU({ onBack }) {

  const handleBack = () => {
    onBack(true);
  };

  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', fontSize: '24px' }}>
        <IconButton onClick={handleBack} sx={{ marginRight: '5px' }}>
          <ArrowBackOutlined sx={{ color: 'black', fontSize: '18px' }} />
        </IconButton>
        <b>Tambah Data TPU</b>
      </div>
      <Paper className="p-3 mt-5" elevation={3} style={{ marginBottom: '50px' }}>
        <div style={{ borderBottom: '1px solid #e3e3e3', lineHeight: '2rem', paddingBottom: '10px' }}>
          <div style={{ color: '#212B36', fontSize: '18px', fontWeight: 700 }} >Semua data wajib di isi.</div>
          <div style={{ fontSize: '16px' }}>Isi dan lengkapi data dengan benar sebelum Anda menyimpannya.</div>
        </div>
        <div style={{ borderBottom: '1px solid #e3e3e3', paddingBottom: '20px' }}>
          <TextField
            className={styles.wrapField}
            fullWidth
            id="outlined-basic"
            label="Nama TPU"
            variant="outlined"
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Kecamatan</InputLabel>
                <Select
                  id="demo-simple-select"
                  label="Kecamatan"
                  labelId="demo-simple-select-label"
                >
                  <MenuItem value={10}>Mangun Jaya</MenuItem>
                  <MenuItem value={20}>Sukamantri</MenuItem>
                  <MenuItem value={30}>Sukajadi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Kelurahan</InputLabel>
                <Select
                  id="demo-simple-select"
                  label="Kelurahan"
                  labelId="demo-simple-select-label"
                >
                  <MenuItem value={10}>Mangun Jaya</MenuItem>
                  <MenuItem value={20}>Sukamantri</MenuItem>
                  <MenuItem value={30}>Sukajadi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <TextField
            className={styles.wrapField}
            fullWidth
            id="outlined-multiline-static"
            label="Alamat"
            multiline
            rows={3}
            variant="outlined"
          />
          <input
            className={styles.wrapSHP}
            placeholder="Upload SHP"
            type="file"
          />
          <TextField
            className={styles.wrapField}
            fullWidth
            id="outlined-basic"
            label="Nama Pengelola TPU"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nomor Sertifikat Kepemilikan Lahan/Sumber Data"
            variant="outlined"
          />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-end', paddingTop: 15 }}>
          <Button className={styles.wrapBtnCancel} variant="outlined">Batal</Button>
          <Button className={styles.wrapBtn} variant="contained">Tambah</Button>
        </div>
      </Paper>
    </div>
  );
}

AddTPU.propTypes = {
  onBack: PropTypes.bool,
};

AddTPU.defaultProps = {
  onBack: false,
};
