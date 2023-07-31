import { ArrowBackOutlined, RemoveRedEyeOutlined, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, Paper, Switch, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';

export default function AddAkun({ onBack }) {
  const [showPass, setShowPass] = React.useState(false);

  const handleBack = () => {
    onBack(true);
  };

  const handlePass = () => {
    setShowPass(current => !current);
  };

  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', fontSize: '24px' }}>
        <IconButton onClick={handleBack} sx={{ marginRight: '5px' }}>
          <ArrowBackOutlined sx={{ color: 'black', fontSize: '18px' }} />
        </IconButton>
        <b>Tambah Akun</b>
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
            label="Nama"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            className={styles.wrapField}
            fullWidth
            id="outlined-basic"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handlePass}>
                    {showPass ? <VisibilityOff /> : <RemoveRedEyeOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Password"
            type={showPass ? 'password' : 'text'}
            variant="outlined"
          />
          <span>
            <Switch sx={{ color: '#1EB74C !important' }} /> Aktif
          </span>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-end', paddingTop: 15 }}>
          <Button className={styles.wrapBtnCancel} variant="outlined">Batal</Button>
          <Button className={styles.wrapBtn} variant="contained">Tambah</Button>
        </div>
      </Paper>
    </div>
  );
}

AddAkun.propTypes = {
  onBack: PropTypes.bool,
};

AddAkun.defaultProps = {
  onBack: false,
};
