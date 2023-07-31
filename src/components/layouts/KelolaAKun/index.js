import { Button } from '@mui/material';
import React from 'react';
import TableUser from '../../elements/TableUser';
import styles from './Styles.module.css';
import PropTypes from 'prop-types';

export default function KelolaAkun({ addAkun }) {

  const handleAddAKun = () => {
    addAkun(true);
  };

  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '24px', fontWeight: 700 }}>Pengaturan Akun</div>
        <Button className={styles.wrapBtn} onClick={handleAddAKun} variant="contained" >Tambah Data +</Button>
      </div>
      <TableUser />
    </div>
  );
}

KelolaAkun.propTypes = {
  addAkun: PropTypes.bool,
};

KelolaAkun.defaultProps = {
  addAkun: false,
};
