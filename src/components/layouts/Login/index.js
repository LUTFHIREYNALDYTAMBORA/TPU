import Image from 'next/image';
import React from 'react';
import styles from './Styles.module.css';
import logo from '../../assets/logo.svg';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
// import * as actions from './actions';
import { useRouter } from 'next/router';
// import {
// useDispatch,
// useSelector
// } from 'react-redux';
import { RemoveRedEyeOutlined, VisibilityOff } from '@mui/icons-material';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [errorLogin, setErrorLogin] = React.useState(false);

  // const dispatch = useDispatch();
  const router = useRouter();

  const handlePass = () => {
    setShowPass(current => !current);
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
      setErrorLogin(false);
    } else {
      setPassword(e.target.value);
      setErrorLogin(false);
    }
  };

  const handleLogin = () => {
    // dispatch(actions.fetchActionLogin({
    //   email: 'SuperAdmin1@gmail.com',
    //   password: 'SuperAdmin1'
    // }));
    if (email === 'SuperAdmin1@gmail.com' && password === 'SuperAdmin1') {
      router.push('/dashboard');
    } else {
      setErrorLogin(true);
    }
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
        error={errorLogin}
        fullWidth
        label="Masukkan email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <TextField
        className={styles.wrappField}
        error={errorLogin}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handlePass}>
                {showPass ? <RemoveRedEyeOutlined /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Masukkan password"
        name="password"
        onChange={handleChange}
        type={showPass ? 'text' : 'password'}
        value={password}
      />
      {errorLogin && <div style={{ color: 'red', fontSize: '12px', margin: '-7px 0px 5px 7px' }}>
        Email atau password yang Anda masukkan salah.
      </div>}
      <Button
        className={styles.btnLoginForm}
        fullWidth
        onClick={handleLogin}
        size="small"
        variant="outlined"
      >
        Log In
      </Button>
    </React.Fragment>
  );
}
