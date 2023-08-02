import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import TableDashboard from '../../elements/TableDashboard';
import styles from './Styles.module.css';

export default function KelolaTPU({ addTPU }) {

  const handleAddData = () => {
    addTPU(true);
  };

  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 700 }}>Kelola Data TPU</div>
          <div>Anda dapat mengelola data TPU pada halaman ini.</div>
        </div>
        <Button className={styles.wrapBtn} onClick={handleAddData} variant="contained">Tambah Data +</Button>
      </div>
      <TableDashboard kelolaTPU />
    </div>
  );
}

KelolaTPU.propTypes = {
  addTPU: PropTypes.bool,
};

KelolaTPU.defaultProps = {
  addTPU: false,
};

