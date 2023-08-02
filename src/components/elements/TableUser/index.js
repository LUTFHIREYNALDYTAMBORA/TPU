import { Edit, SearchOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react';
// import styles from 'Styles.module.css';

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

const rows = [
  {
    dibuat: '28 Desember 2022',
    email: 'babab@gmail.com',
    nama: 'babab',
    password: 'babab123',
    role: 'admin',
  },
  {
    dibuat: '30 Desember 2022',
    email: 'pipip@gmail.com',
    nama: 'pipip',
    password: 'pipip987',
    role: 'admin',
  },
  {
    dibuat: '31 Desember 2022',
    email: 'tatat@gmail.com',
    nama: 'tatat',
    password: 'tatat123',
    role: 'admin',
  },
];

export default function TableUser() {
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
        placeholder="Cari Nama..."
        size="small"
        sx={{ margin: '20px 0px 20px 0px' }}
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
            {rows.map((val, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{val?.nama}</TableCell>
                  <TableCell>{val?.email}</TableCell>
                  <TableCell>{val?.password}</TableCell>
                  <TableCell>{val?.role}</TableCell>
                  <TableCell><Switch sx={{ color: '#1EB74C !important' }} /></TableCell>
                  <TableCell>{val?.dibuat}</TableCell>
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
    </div>
  );
}
