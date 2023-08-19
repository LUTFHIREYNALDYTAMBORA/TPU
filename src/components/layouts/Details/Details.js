/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackOutlined, BorderAllOutlined, CheckCircleRounded, HourglassFullOutlined, PeopleAltOutlined } from '@mui/icons-material';
import { Grid, IconButton, Paper } from '@mui/material';
import styles from './Styles.module.css';
import Image from 'next/image';
import blok from '../../assets/blok.svg';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import { labelCadangan, labelNonOperasional, labelOperasional } from '../../elements/TableDashboard/constant';

export default function Details({ data, onBack }) {

  const valCard = [
    {
      icon: <BorderAllOutlined style={{ color: '#00B8D9', fontSize: '18px', marginRight: '5px' }} />,
      label: 'Kapasitas Total Makam',
      persen: '100%',
      value: '800',
    },
    {
      icon: <CheckCircleRounded style={{ color: '#36B37E', fontSize: '18px', marginRight: '5px' }} />,
      label: 'Kapasitas Makam Yang Tersedia',
      persen: '10%',
      value: '80',
    },
    {
      icon: <HourglassFullOutlined style={{ color: '#FF5630', fontSize: '18px', marginRight: '5px' }} />,
      label: 'Kapasitas Makam Yang Terisi',
      persen: '90%',
      value: '720',
    },
    {
      icon: <span><Image alt="" src={blok} /></span>,
      label: 'Blok Yang Terdapat Pada Lahan TPU',
      value: '20',
    },
    {
      icon: <PeopleAltOutlined style={{ color: '#FFAB00', fontSize: '18px', marginRight: '5px' }} />,
      label: 'Jumlah Pengelola Lahan TPU',
      value: '5',
    },
  ];

  const dataDetail = Object.assign({}, ...data);
  const handleBack = () => {
    onBack(true);
  };

  const limeOptions = { color: 'lime' };

  let labelStatus;
  if (dataDetail?.statusLahan === 'Oprasional') {
    labelStatus = labelOperasional;
  } else if (dataDetail?.statusLahan === 'Non Oprasional') {
    labelStatus = labelNonOperasional;
  } else {
    labelStatus = labelCadangan;
  }

  return (
    <div style={{ marginBottom: '70px' }}>
      <div style={{ alignItems: 'center', display: 'flex', fontSize: '24px' }}>
        <IconButton onClick={handleBack} sx={{ marginRight: '5px' }}>
          <ArrowBackOutlined sx={{ color: 'black', fontSize: '18px' }} />
        </IconButton>
        <b>{dataDetail?.namaTPU}</b>
      </div>

      <Grid className="mt-2" container spacing={2}>
        <Grid item xs={2.5}>
          <Paper className="p-5" elevation={3}>
            <div className={styles.wrapTitle}>Nama TPU</div>
            <div className="mb-9">{dataDetail?.namaTPU}</div>
            <div className={styles.wrapTitle}>Alamat</div>
            <div className="mb-9">{dataDetail?.alamat || '-'}</div>
            <div className={styles.wrapTitle}>Kelurahan</div>
            <div className="mb-9">{dataDetail?.kelurahanDesa}</div>
            <div className={styles.wrapTitle}>Kecamatan</div>
            <div className="mb-9">{dataDetail?.kecamatan}</div>
            <div className={styles.wrapTitle}>Titik Koordinat</div>
            <div className="mb-9">{dataDetail?.Y}, {dataDetail?.X}</div>
            <div className={styles.wrapTitle}>Luas TPU Existing(Ha)</div>
            <div className="mb-9">{Number(dataDetail?.luasHa).toFixed(6)}</div>
            <div className={styles.wrapTitle}>Nomor Sertifikat Kepemilikan Lahan/ Sumber Data</div>
            <div className="mb-9">{dataDetail?.nomorSertifikatKepemilikanLahan || '-'}</div>
            <div className={styles.wrapTitle}>Status Lahan</div>
            <div className="mb-4" style={labelStatus}>{dataDetail?.statusLahan || '-'}</div>
          </Paper>
        </Grid>
        <Grid item xs={9.5}>
          <Paper className="p-5" elevation={3}>
            <MapContainer
              center={[(dataDetail?.Y), (dataDetail?.X)]}
              scrollWheelZoom={false}
              zoom={15}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=gs3svoCS6YyryTZJJAm0"
              />
              <Polygon
                pathOptions={limeOptions}
                positions={dataDetail?.geoJSON?.geometry?.coordinates}
              />
            </MapContainer>
          </Paper>
          <Grid className="mt-3" container spacing={1}>
            {valCard.map((val, idx) => {
              let colorPersen;
              if (idx === 0) {
                colorPersen = '#00B8D9';
              } else if (idx === 1) {
                colorPersen = '#36B37E';
              } else if (idx === 2) {
                colorPersen = '#FF5630';
              } else {
                colorPersen = '';
              }
              return (
                <Grid
                  item
                  key={idx}
                  xs={2.4}
                >
                  <Paper className="p-5" elevation={3} sx={{ minHeight: '180px' }}>
                    <div style={{ fontSize: '48px', fontWeight: 700 }}>{val?.value}</div>
                    <div style={{ color: '#637381', fontSize: '12px', marginBottom: '5px' }}>{val?.label}</div>
                    <div className={styles.wrapPersen} style={{ color: colorPersen }}>{val?.icon}{val?.persen}</div>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

Details.propTypes = {
  data: PropTypes.object,
  onBack: PropTypes.bool,
};

Details.defaultProps = {
  data: {},
  onBack: false,
};
