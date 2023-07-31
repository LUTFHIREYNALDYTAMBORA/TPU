import React from 'react';
import styles from './Styles.module.css';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  Polygon,
  TileLayer,
  Tooltip,
} from 'react-leaflet';
import tpu_all_kab_bekasi_geojson from './tpu_all_kab_bekasi_geojson';


export default function Map() {

  const redOptions = { color: 'red' };

  let indents = [];
  tpu_all_kab_bekasi_geojson?.features.map((val, idx) => {
    indents.push(
      <Polygon
        clickable={true}
        key={idx}
        pathOptions={redOptions}
        positions={val?.geometry?.coordinates}
      >
        <Tooltip>
          <div><b>{val?.properties?.Nama_TPU}</b></div>
          <div>{val?.properties?.alamat || ''}</div>
          <div>Kec : <b>{val?.properties?.Kecamatan || ''}</b></div>
          <div>Desa : <b>{val?.properties?.Desa || ''}</b></div>
          <div>Luas(Ha) : <b>{val?.properties?.Luas_Ha || ''}</b></div>
        </Tooltip>
      </Polygon>
    );
  });

  return (
    <div className={styles.containerPeta}>
      <MapContainer
        boundsOptions={{
          padding: [1, 1]
        }}
        center={[-6.18668590415117, 107.08972369505034]}
        scrollWheelZoom={false}
        zoom={12}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {indents}
      </MapContainer>
    </div>
  );
}

