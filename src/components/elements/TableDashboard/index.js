/* eslint-disable sonarjs/no-duplicate-string */
import { DeleteOutline, EditOutlined, SearchOutlined, Visibility } from '@mui/icons-material';
import { IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import React from 'react';
import styles from './Styles.module.css';
import PropTypes from 'prop-types';

const columns = [
  { label: 'No', },
  { label: 'Nama TPU', },
  { label: 'Alamat' },
  { label: 'Kelurahan' },
  { label: 'Kecamatan' },
  { label: 'Titik Koordinat' },
  { label: 'Nama Pengelola TPU' },
  { label: 'Luas TPU Existing (Ha)' },
  { label: 'Nomor Sertifikat Kepemilikan Lahan/Sumber Data' },
  { label: 'Status Lahan', minWidth: 170 },
  { align: 'center', label: 'Aksi' },
];

const rows = [
  {
    alamat: 'Jalan A no 34 Blok Z',
    kec: 'Mangun jaya',
    kel: 'Tambun Selatan',
    koor: '-6.368912272490011, 107.37350154782017',
    luas: '28,03',
    nama: 'TPU MANGUN JAYA',
    pengelola: 'Asep',
    sertifikat: '642138741 / PT. Fajar Iman Persero / 30 November 2023',
    status: 'Operasional'
  },
  {
    alamat: 'Jalan A no 34 Blok A',
    kec: 'Wanajaya',
    kel: 'Tambun',
    koor: '-6.368912272490011, 107.3735054782017',
    luas: '28,03',
    nama: 'TPU WANAJAYA',
    pengelola: 'Asep',
    sertifikat: '64213741 / PT. Fajar Iman Persero / 30 November 2023',
    status: 'Non Operasional'
  },
  {
    alamat: 'Jalan A no 34 Blok Z',
    kec: 'Mangun jaya',
    kel: 'Tambun Selatan',
    koor: '-6.368912272490011, 107.37350154782017',
    luas: '28,03',
    nama: 'TPU SUKAMUKTI',
    pengelola: 'Asep',
    sertifikat: '642138741 / PT. Fajar Iman Persero / 30 November 2023',
    status: 'Cadangan'
  },
];

const titleFilterTable = [
  {
    bg: '#C8FACD',
    color: '#1EB74C',
    title: 'All',
    value: '3'
  },
  {
    bg: 'rgb(0, 184, 217, .4)',
    color: '#006C9C',
    title: 'Operasional',
    value: '1'
  },
  {
    bg: 'rgb(145, 158, 171, .4)',
    color: '#212B36',
    title: 'Non Operasional',
    value: '1'
  },
  {
    bg: 'rgb(255, 171, 0, .4)',
    color: '#B76E00',
    title: 'Lahan Cadangan',
    value: '1'
  },
];

export default function TableDashboard({ onDetail, kelolaTPU }) {
  const [filter, setFilter] = React.useState(0);

  const handleFilter = (val) => () => {
    setFilter(val);
  };

  const detailTPU = (id) => () => {
    let newVal = rows.filter((val, idx) => idx === id);
    onDetail({ newVal });
  };

  return (
    <div style={{ marginBottom: '80px', marginTop: '20px' }}>
      <div style={{ alignItems: 'flex-end', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
          {titleFilterTable.map((val, idx) => {
            return (
              <span
                className={styles.wrapFilter}
                key={idx}
                onClick={handleFilter(idx)}
                style={{
                  borderBottom: filter === idx ? `2px solid ${val?.color}` : '',
                  marginLeft: idx === 0 ? '' : '20px'
                }}
              >
                <span
                  className={styles.wrappValueBoxFilter}
                  style={{
                    backgroundColor: val?.bg,
                    color: val?.color,
                  }}
                >{val?.value}</span>
                <span>{val?.title}</span>
              </span>
            );
          })}
        </div>
        <div>
          <TextField
            id="outlined-basic"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
            placeholder="Cari TPU..."
            size="small"
            variant="outlined"
          />
        </div>
      </div>
      <TableContainer sx={{ overflowY: 'scroll' }}>
        <Table aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, idx) => (
                <TableCell
                  align={column.align}
                  key={idx}
                  style={{ backgroundColor: '#F4F6F8', minWidth: column?.minWidth }}
                >
                  <b>{column.label}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => {
              let labelStatus;
              if (row?.status === 'Operasional') {
                labelStatus = {
                  backgroundColor: 'rgb(0, 184, 217, .4)',
                  borderRadius: '4px',
                  color: '#006C9C',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '5px'
                };
              } else if (row?.status === 'Non Operasional') {
                labelStatus = {
                  backgroundColor: 'rgb(145, 158, 171, .4)',
                  borderRadius: '4px',
                  color: '#212B36',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '5px'
                };
              } else {
                labelStatus = {
                  backgroundColor: 'rgb(255, 171, 0, .4)',
                  borderRadius: '4px',
                  color: '#B76E00',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '5px'
                };
              }
              return (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{row?.nama}</TableCell>
                  <TableCell>{row?.alamat}</TableCell>
                  <TableCell>{row?.kel}</TableCell>
                  <TableCell>{row?.kec}</TableCell>
                  <TableCell>{row?.koor}</TableCell>
                  <TableCell>{row?.pengelola}</TableCell>
                  <TableCell>{row?.luas}</TableCell>
                  <TableCell>{row?.sertifikat}</TableCell>
                  <TableCell><span style={labelStatus}>{row?.status}</span></TableCell>
                  <TableCell>
                    {kelolaTPU ?
                      <span style={{ display: 'flex' }}>
                        <IconButton style={{ backgroundColor: '#E4FEFA' }}><EditOutlined style={{ color: '#2D9CDB' }} /></IconButton>
                        <IconButton style={{ backgroundColor: '#FFF4EA' }}><DeleteOutline style={{ color: '#FF5630' }} /></IconButton>
                      </span> :
                      <IconButton onClick={detailTPU(idx)} style={{ backgroundColor: '#E4FEFA' }}>
                        <Visibility style={{ color: '#00B8D9' }} />
                      </IconButton>
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        // page={page}
        // rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 100]}
      />
    </div>
  );
}

TableDashboard.propTypes = {
  kelolaTPU: PropTypes.bool,
  onDetail: PropTypes.func,
};

TableDashboard.defaultProps = {
  kelolaTPU: false,
  onDetail: null
};
