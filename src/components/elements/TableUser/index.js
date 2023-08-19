import { Edit, SearchOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';

const columns = [
  { label: 'No' },
  { label: 'Nama' },
  { label: 'Email' },
  { label: 'Password' },
  { label: 'Role' },
  { label: 'Status' },
  { label: 'Dibuat' },
  { label: 'Aksi' },
];

export default function TableUser({ listAkun }) {
  const [dataAkun, setDataAkun] = React.useState(listAkun);
  const [search, setSearch] = React.useState('');
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChange = (value) => {
    setSearch(value);
    let filteredData = listAkun?.filter((val) => {
      return (
        val?.name?.toLowerCase()?.includes(value?.toLowerCase())
      );
    });
    setDataAkun(filteredData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
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
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Cari Nama..."
        size="small"
        sx={{ margin: '20px 0px 20px 0px' }}
        value={search}
        variant="outlined"
      />
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
            {dataAkun?.length === 0 ?
              <TableRow>
                <TableCell colSpan={8}>Tidak ada data.</TableCell>
              </TableRow> :
              dataAkun
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((val, idx) => {
                  return (
                    <TableRow className={styles.wrapRow} key={idx}>
                      <TableCell>{val?.no}</TableCell>
                      <TableCell>{val?.name}</TableCell>
                      <TableCell>{val?.email}</TableCell>
                      <TableCell>{val?.password}</TableCell>
                      <TableCell>{val?.roleStatus}</TableCell>
                      <TableCell><Switch defaultChecked={val?.isActive} sx={{ color: '#1EB74C !important' }} /></TableCell>
                      <TableCell>{val?.createdAt}</TableCell>
                      <TableCell>
                        <IconButton sx={{ backgroundColor: '#E4FEFA !important' }}>
                          <Edit style={{ color: '#2D9CDB' }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={(dataAkun && dataAkun.length || [])}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 100]}
      />
    </div>
  );
}

TableUser.propTypes = {
  listAkun: PropTypes.array
};

TableUser.defaultProps = {
  listAkun: []
};
