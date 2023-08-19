import { Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import TableDashboard from '../../elements/TableDashboard';
import styles from './Styles.module.css';
import data from '../SebaranTPU/data';
import BasicModal from '../../elements/Modal';
import { InfoOutlined } from '@mui/icons-material';

export default function KelolaTPU({ addTPU, onEdit, onFindIdTPU }) {
  const [popupDelete, setPopupDelete] = React.useState(false);
  const [dataTPU, setDataTPU] = React.useState({});

  const handleAddData = () => {
    addTPU(true);
  };

  const handleEdit = (value) => {
    onEdit(value);
  };

  const handleFindId = (id) => {
    onFindIdTPU(id);
  };

  const handleDeleteTPU = (id) => {
    setPopupDelete(true);
    let findTPU = data?.data?.filter(val => val?._id === id);
    let valueTPU = Object.assign({}, ...findTPU);
    setDataTPU(valueTPU);
  };

  const handleClose = () => {
    setPopupDelete(false);
  };

  const renderDeleteModal = () => {
    return (
      <BasicModal onClose={handleClose} open={popupDelete}>
        <InfoOutlined style={{ color: '#FFAB00', display: 'flex', fontSize: '100px', width: '100%' }} />
        <div className="mb-4 text-center font-bold">Yakin Menghapus Data :</div>
        <Grid container spacing={2}>
          <Grid className="text-xs leading-8 text-right" item xs={5}>
            <div>NAMA TPU</div>
            <div>ALAMAT</div>
            <div>KECAMATAN</div>
            <div>KELURAHAN</div>
            <div>LUAS (Ha)</div>
          </Grid>
          <Grid className="text-xs leading-8" item xs={1}>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
          </Grid>
          <Grid className="text-xs leading-8 font-bold" item xs={5}>
            <div>{dataTPU?.namaTPU}</div>
            <div>{dataTPU?.alamat || '-'}</div>
            <div>{dataTPU?.kecamatan?.toUpperCase()}</div>
            <div>{dataTPU?.kelurahanDesa?.toUpperCase()}</div>
            <div>{Number(dataTPU?.luasHa).toFixed(6)}</div>
          </Grid>
        </Grid>
        <div className="mt-5 text-center">
          <Button className={styles.wrapBtnCancel} onClick={handleClose} variant="outlined">Batal</Button>
          <Button className={styles.wrapBtn} variant="contained">Hapus</Button>
        </div>
      </BasicModal>
    );
  };

  return (
    <div>
      {renderDeleteModal()}
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 700 }}>Kelola Data TPU</div>
          <div>Anda dapat mengelola data TPU pada halaman ini.</div>
        </div>
        <Button className={styles.wrapBtn} onClick={handleAddData} variant="contained">Tambah Data +</Button>
      </div>
      <TableDashboard
        data={data}
        deleteTPU={(val) => handleDeleteTPU(val)}
        editTPU={(val) => handleEdit(val)}
        idTPU={(id) => handleFindId(id)}
        kelolaTPU
      />
    </div>
  );
}

KelolaTPU.propTypes = {
  addTPU: PropTypes.bool,
  onEdit: PropTypes.bool,
  onFindIdTPU: PropTypes.string
};

KelolaTPU.defaultProps = {
  addTPU: false,
  onEdit: false,
  onFindIdTPU: ''
};
