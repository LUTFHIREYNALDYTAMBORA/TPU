import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import tpu from '../../assets/tpu.svg';
import styles from './Styles.module.css';
import { useRouter } from 'next/router';
import { Avatar, Button, IconButton, Paper, Popper } from '@mui/material';

export default function Topbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const router = useRouter();

  const handleLogout = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const logout = () => {
    router.push('/home');
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
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
      <div>
        <IconButton onClick={handleLogout}>
          <Avatar size="medium" />
        </IconButton>
      </div>
      <Popper anchorEl={anchorEl} className={styles.wrapPopper} id={id} open={open}>
        <Paper className="p-5 mr-5 mt-5" elevation={6}>
          Yakin akan Logout?
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-end', paddingTop: 15 }}>
            <Button className={styles.wrapBtnCancel} onClick={handleLogout} variant="outlined">Batal</Button>
            <Button className={styles.wrapBtn} onClick={logout} variant="contained">Logout</Button>
          </div>
        </Paper>
      </Popper>
    </div>
  );
}
