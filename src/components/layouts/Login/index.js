import Image from 'next/image';
import React from 'react';
import styles from './Styles.module.css';
import logo from '../../assets/logo.svg';
import { Button, TextField } from '@mui/material';

export default function Login() {

  const handleLogin = () => {
    console.log('ada');
  };

  return (
    <React.Fragment>
      <div className={styles.containerHeaderLogin}>
        <Image alt="" src={logo} />
        <div className={styles.wrappHeaderLogin}>
          <div className={styles.h5}>Data TPU</div>
          <div className={styles.desc}>Pemerintah Daerah Kabupaten Bekasi</div>
        </div>
      </div>
      <div className={styles.wrappTitleLogin}>
        <div className={styles.h4}>Selamat Datang</div>
        <div>Mohon masukkan email dan password Anda untuk Log In.</div>
      </div>
      <TextField
        className={styles.wrappField}
        fullWidth
        label="Masukkan email"
      />
      <TextField
        className={styles.wrappField}
        fullWidth
        label="Masukkan password"
      />
      <Button
        className={styles.btnLoginForm}
        fullWidth
        size="small"
        variant="outlined"
      >
        Log In
      </Button>
    </React.Fragment>
  );
}
