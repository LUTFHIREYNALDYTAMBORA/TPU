/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
/* eslint-disable sonarjs/no-duplicate-string */
import { DeleteOutline, EditOutlined, SearchOutlined, Visibility } from '@mui/icons-material';
import { IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import React from 'react';
import styles from './Styles.module.css';
import PropTypes from 'prop-types';
import { labelCadangan, labelNonOperasional, labelOperasional } from './constant';
import BasicModal from '../Modal';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';

const columns = [
  { label: 'No', },
  { label: 'Nama TPU', },
  { label: 'Alamat' },
  { label: 'Kelurahan' },
  { label: 'Kecamatan' },
  { label: 'Titik Koordinat' },
  { label: 'Luas TPU Existing (Ha)' },
  { label: 'Nomor Sertifikat Kepemilikan Lahan/Sumber Data' },
  { label: 'Status Lahan', minWidth: 170 },
  { label: 'Keterangan' },
  { align: 'center', label: 'Aksi' },
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
    title: 'Oprasional',
    value: '1'
  },
  {
    bg: 'rgb(145, 158, 171, .4)',
    color: '#212B36',
    title: 'Non Oprasional',
    value: '1'
  },
  {
    bg: 'rgb(255, 171, 0, .4)',
    color: '#B76E00',
    title: 'Lahan Cadangan',
    value: '1'
  },
];

export default function TableBoard({ onDetail, deleteTPU, kelolaTPU, data, idTPU, editTPU }) {
  const [filter, setFilter] = React.useState(0);
  const [dataTPU, setDataTPU] = React.useState(data?.data);
  const [showPopUp, setShowLocation] = React.useState(false);
  const [dataPopup, setDataPopup] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState('');

  const handleFilter = (val, type) => () => {
    setSearch('');
    setFilter(val);
    setDataTPU(type === 'All' ? data?.data : data?.data.filter(value => value?.statusLahan === type));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const detailTPU = (id) => () => {
    let newVal = dataTPU.filter((val) => val?._id === id);
    onDetail({ newVal });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleSearch = (value) => {
    setSearch(value);
    if (filter === 0) {
      let filteredData = data?.data?.filter((val) => {
        return (
          val?.namaTPU?.toLowerCase()?.includes(value?.toLowerCase())
        );
      });
      setDataTPU(filteredData);
    } else if (filter === 1) {
      let filteredData = data?.data?.filter((val) => val?.statusLahan === 'Oprasional')
        .filter((item) => {
          return (
            item?.namaTPU?.toLowerCase()?.includes(value?.toLowerCase())
          );
        });
      setDataTPU(filteredData);
    } else if (filter === 2) {
      let filteredData = data?.data?.filter((val) => val?.statusLahan === 'Non Oprasional')
        .filter((item) => {
          return (
            item?.namaTPU?.toLowerCase()?.includes(value?.toLowerCase())
          );
        });
      setDataTPU(filteredData);
    } else {
      let filteredData = data?.data?.filter((val) => val?.statusLahan === 'Lahan Cadangan')
        .filter((item) => {
          return (
            item?.namaTPU?.toLowerCase()?.includes(value?.toLowerCase())
          );
        });
      setDataTPU(filteredData);
    }
  };

  const showLocation = (id) => () => {
    setShowLocation(current => !current);
    setDataPopup(dataTPU?.filter(val => val?._id === id));
  };

  const limeOptions = { color: 'lime' };

  const handleEdit = (id) => () => {
    idTPU(id);
    editTPU(true);
  };

  const handleDelete = (id) => () => {
    deleteTPU(id);
  };

  return (
    <div style={{ marginBottom: '80px', marginTop: '20px' }}>
      <BasicModal onClose={showLocation()} open={showPopUp}>
        <MapContainer
          center={[(dataPopup && dataPopup[0] && dataPopup[0]?.Y), (dataPopup && dataPopup[0] && dataPopup[0]?.X)]}
          scrollWheelZoom={false}
          zoom={15}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=gs3svoCS6YyryTZJJAm0"
          />
          <Polygon
            clickable={true}
            pathOptions={limeOptions}
            positions={dataPopup && dataPopup[0] && dataPopup[0]?.geoJSON?.geometry?.coordinates}
          />
        </MapContainer>
      </BasicModal>
      <div style={{ alignItems: 'flex-end', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
          {titleFilterTable.map((val, idx) => {
            let valCountData = data?.data?.filter(value => val?.title === 'All' ? value : value?.statusLahan === val?.title);
            return (
              <span
                className={styles.wrapFilter}
                key={idx}
                onClick={handleFilter(idx, val?.title)}
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
                >{valCountData?.length}</span>
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
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Cari TPU..."
            size="small"
            value={search}
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
            {(dataTPU?.length === 0) ?
              <TableRow>
                <TableCell colSpan={6} sx={{ fontSize: '12px' }}>
                  Tidak ada data
                </TableCell>
              </TableRow> :
              dataTPU
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                  let labelStatus;
                  if (row?.statusLahan === 'Oprasional') {
                    labelStatus = labelOperasional;
                  } else if (row?.statusLahan === 'Non Oprasional') {
                    labelStatus = labelNonOperasional;
                  } else {
                    labelStatus = labelCadangan;
                  }
                  return (
                    <TableRow className={styles.wrapRow} key={idx}>
                      <TableCell sx={{ fontSize: '12px' }}>{idx + 1}</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>{row?.namaTPU || '-'}</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>{row?.alamat || '-'}</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>{row?.kelurahanDesa?.toUpperCase() || '-'}</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>{row?.kecamatan?.toUpperCase() || '-'}</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>
                        {row?.Y || '-'}, {row?.X || '-'} {' '}
                        <div
                          className={styles.wrapLokasi}
                          onClick={showLocation(row?._id)}
                        >
                          Lihat Lokasi
                        </div>
                      </TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>{Number(row?.luasHa).toFixed(6) || '-'}</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>{row?.nomorSertifikatKepemilikanLahan || '-'}</TableCell>
                      <TableCell sx={{ fontSize: '12px' }}><span style={labelStatus}>{row?.statusLahan || '-'}</span></TableCell>
                      <TableCell sx={{ fontSize: '12px' }}>{row?.keterangan || '-'}</TableCell>
                      <TableCell>
                        {kelolaTPU ?
                          <span style={{ display: 'flex' }}>
                            <IconButton onClick={handleEdit(row?._id)} style={{ backgroundColor: '#E4FEFA', marginRight: '2px' }}>
                              <EditOutlined style={{ color: '#2D9CDB' }} />
                            </IconButton>
                            <IconButton onClick={handleDelete(row?._id)} style={{ backgroundColor: '#FFF4EA', marginLeft: '2px' }}>
                              <DeleteOutline style={{ color: '#FF5630' }} />
                            </IconButton>
                          </span> :
                          <IconButton onClick={detailTPU(row?._id)} style={{ backgroundColor: '#E4FEFA' }}>
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
      {(dataTPU?.length !== 0) &&
        <TablePagination
          component="div"
          count={(dataTPU && dataTPU.length || [])}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10, 25, 100]}
        />
      }
    </div>
  );
}

TableBoard.propTypes = {
  data: PropTypes.object,
  deleteTPU: PropTypes.string,
  editTPU: PropTypes.bool,
  idTPU: PropTypes.string,
  kelolaTPU: PropTypes.bool,
  onDetail: PropTypes.func,
};

TableBoard.defaultProps = {
  data: {},
  deleteTPU: '',
  editTPU: false,
  idTPU: '',
  kelolaTPU: false,
  onDetail: null
};
