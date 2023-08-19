/* eslint-disable react/jsx-max-depth */
import { ArrowBackOutlined, InsertDriveFile } from '@mui/icons-material';
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Styles.module.css';
import listKecamatan from './listKecamatan';
import listKelurahan from './listKelurahan';

export default function AddTPU({ dataTPU, onBack, onEdit }) {
  const [namaTPU, setNamaTPU] = React.useState(dataTPU?.namaTPU || '');
  const [kecamatan, setKecamatan] = React.useState(`KEC.${dataTPU?.kecamatan?.toUpperCase()}` || '');
  const [namaKelurahan, setKelurahan] = React.useState(`DS.${dataTPU?.kelurahanDesa?.toUpperCase()}` || '');
  const [alamat, setAlamat] = React.useState(dataTPU?.alamat?.toUpperCase() || '');
  const [pengelola, setPengelola] = React.useState(dataTPU?.namaPengelolaTPU?.toUpperCase() || '');
  const [statusLahan, setStatusLahan] = React.useState(dataTPU?.statusLahan || '');
  const [sertifikat, setSertifikat] = React.useState(dataTPU?.nomorSertifikatKepemilikanLahan || '');
  const [titleShp, setTitleShp] = React.useState(dataTPU?.SHPFileUrl || '');

  const handleBack = () => {
    onBack(true);
  };

  const handleReset = () => {
    setKecamatan('');
    setNamaTPU('');
    setAlamat('');
    setPengelola('');
    setStatusLahan('');
    setSertifikat('');
    setKelurahan('');
    setTitleShp('');
  };

  const handleChange = (value, type) => {
    if (type === 'kec') {
      setKecamatan(value);
    } else if (type === 'namaTPU') {
      setNamaTPU(value?.toUpperCase());
    } else if (type === 'alamat') {
      setAlamat(value?.toUpperCase());
    } else if (type === 'pengelola') {
      setPengelola(value?.toUpperCase());
    } else if (type === 'sertifikat') {
      setSertifikat(value);
    } else if (type === 'kel') {
      setKelurahan(value);
    } else if (type === 'statusLahan') {
      setStatusLahan(value);
    } else {
      setTitleShp(value?.name);
    }
  };

  let kelurahan = listKelurahan?.data?.filter(val => val?.kecamatanName === kecamatan);

  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', fontSize: '24px' }}>
        <IconButton onClick={handleBack} sx={{ marginRight: '5px' }}>
          <ArrowBackOutlined sx={{ color: 'black', fontSize: '18px' }} />
        </IconButton>
        <b>{onEdit ? 'Ubah Data TPU' : 'Tambah Data TPU'}</b>
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
            onChange={(e) => handleChange(e.target.value, 'namaTPU')}
            value={namaTPU}
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
                  onChange={(e) => handleChange(e.target.value, 'kec')}
                  value={kecamatan}
                >
                  {listKecamatan?.data.map((val, idx) => {
                    return (
                      <MenuItem key={idx} value={val?.name}>{val?.name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Kelurahan</InputLabel>
                <Select
                  disabled={!kecamatan}
                  id="demo-simple-select"
                  label="Kelurahan"
                  labelId="demo-simple-select-label"
                  onChange={(e) => handleChange(e.target.value, 'kel')}
                  value={namaKelurahan}
                >
                  {kelurahan.map((val, idx) => {
                    return (
                      <MenuItem key={idx} value={val?.name?.toUpperCase()}>{val?.name?.toUpperCase()}</MenuItem>
                    );
                  })}
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
            onChange={(e) => handleChange(e.target.value, 'alamat')}
            rows={3}
            value={alamat}
            variant="outlined"
          />
          <label style={{ position: 'relative' }}>
            <input
              onChange={(e) => handleChange(e.target.files[0], 'shp')}
              style={{ margin: '20px 0px 20px 0px', opacity: 0, width: '100%' }}
              type="file"
            />
            <span className={styles.wrapSHP}>
              {titleShp === '' ? 'Upload SHP' : <span style={{ color: '#000' }}>{titleShp}</span>}
            </span>
            <InsertDriveFile style={{ bottom: 10, position: 'absolute', right: 15 }} />
          </label>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nama Pengelola TPU"
            onChange={(e) => handleChange(e.target.value, 'pengelola')}
            value={pengelola}
            variant="outlined"
          />
          <FormControl className={styles.wrapField} fullWidth>
            <InputLabel id="demo-simple-select-label">Status Lahan</InputLabel>
            <Select
              id="demo-simple-select"
              label="Status Lahan"
              labelId="demo-simple-select-label"
              onChange={(e) => handleChange(e.target.value, 'statusLahan')}
              value={statusLahan}
            >
              <MenuItem value="Oprasional">OPRASIONAL</MenuItem>
              <MenuItem value="Non Oprasional">NON OPRASIONAL</MenuItem>
              <MenuItem value="Lahan Cadangan">LAHAN CADANGAN</MenuItem>
              <MenuItem value="Belum Penyerahan">BELUM PENYERAHAN</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nomor Sertifikat Kepemilikan Lahan/Sumber Data"
            onChange={(e) => handleChange(e.target.value, 'sertifikat')}
            value={sertifikat}
            variant="outlined"
          />
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-end', paddingTop: 15 }}>
          <Button className={styles.wrapBtnCancel} onClick={handleReset} variant="outlined">Reset</Button>
          <Button
            className={styles.wrapBtn}
            disabled={
              !namaTPU || !kecamatan || !namaKelurahan ||
                !alamat || !titleShp || !pengelola || !statusLahan ||
                !sertifikat ? true : false
            }
            variant="contained"
          >
            Tambah
          </Button>
        </div>
      </Paper>
    </div>
  );
}

AddTPU.propTypes = {
  dataTPU: PropTypes.object,
  onBack: PropTypes.bool,
  onEdit: PropTypes.bool,
};

AddTPU.defaultProps = {
  dataTPU: {},
  onBack: false,
  onEdit: false,
};
