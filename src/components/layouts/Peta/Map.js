/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines */
/* eslint-disable sonarjs/cognitive-complexity */
import React from 'react';
import styles from './Styles.module.css';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  Polygon,
  Polyline,
  TileLayer,
  Tooltip,
} from 'react-leaflet';
import { Box, Button, Checkbox, IconButton } from '@mui/material';
import { Add, CheckCircle, Close, Layers, Menu, Remove } from '@mui/icons-material';
import { ListLayers } from './layers';
import dataTPU from './dataTPU';
import jalan from './jalan';
import sungai from './sungai';
import pengembangan from './pengembangan';
import Image from 'next/image';
import arteri from '../../assets/arteri.svg';
import kolektor from '../../assets/kolektor.svg';
import lokal from '../../assets/lokal.svg';
import kecamatan from './kecamatan';
import kelurahan from './kelurahan';

export default function Map() {
  const [layer, setLayer] = React.useState('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  const [showListLayer, setShowListLayer] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [layerActive, setLayerActive] = React.useState(0);
  const [mapSungai, setSungai] = React.useState(false);
  const [mapJaringanJalan, setJaringanJalan] = React.useState(false);
  const [mapJalanTol, setJalanTol] = React.useState(false);
  const [mapRelKA, setRelKA] = React.useState(false);
  const [mapAdm, setMapAdm] = React.useState([false, false]);
  const [childMap, setChildMap] = React.useState([false, false, false]);
  const [showDescStreet, setShowDescStreet] = React.useState(false);
  const [mapWP, setMapWP] = React.useState([false, false, false, false]);
  const [listSebaranTPU, setListSebaranTPU] = React.useState([]);
  const [showAllTPU, setshowAllTPU] = React.useState(false);

  const handleShowLayer = () => {
    setShowListLayer(current => !current);
  };

  const handleChangeLayer = (type, id) => () => {
    setLayer(type?.url);
    setLayerActive(id);
    setShowListLayer(false);
  };

  const handleMenu = () => {
    setShowMenu(current => !current);
  };

  const handleResetMaps = () => {
    setMapAdm([false, false]);
    setMapWP([false, false, false, false]);
    setSungai(false);
    setJalanTol(false);
    setRelKA(false);
    setJaringanJalan(false);
    setListSebaranTPU([]);
    setshowAllTPU(false);
  };


  let newArr = [...listSebaranTPU];
  const handleChangeSebaranTPU = (val, allTPU) => (e) => {
    let dataAllTPU = allTPU.map((names) => {
      return { 'checked': e.target.checked, 'name': names };
    });
    let data = { 'checked': e.target.checked, 'name': val };
    if (val === 'showAllTPU') {
      if (e.target.checked) {
        newArr.push(
          ...dataAllTPU,
          { 'checked': e.target.checked, 'name': 'TPU KARANGRAHARJA' },
          { 'checked': e.target.checked, 'name': 'TPU SUKABUDI' }
        );
        setshowAllTPU(true);
      } else {
        newArr = [];
        setshowAllTPU(false);
      }
    } else {
      setshowAllTPU(false);
      newArr.push(data);
    }
    let findSameName = newArr.filter(value => value?.name === val);
    let index = newArr.findIndex(object => {
      return object.name === val;
    });
    if (findSameName.length !== 1) {
      newArr.splice(index, 1);
      newArr.splice(newArr.length - 1, 1);
    }
    setListSebaranTPU(newArr);
  };

  const handleChangeMenu = (val) => (e) => {
    if (val === 'jaringanJalan') {
      if (e.target.checked) {
        setJaringanJalan(true);
      } else {
        setJaringanJalan(false);
      }
    } else if (val === 'sungai') {
      if (e.target.checked) {
        setSungai(true);
      } else {
        setSungai(false);
      }
    } else if (val === 'tol') {
      if (e.target.checked) {
        setJalanTol(true);
      } else {
        setJalanTol(false);
      }
    } else if (val === 'relKA') {
      if (e.target.checked) {
        setRelKA(true);
      } else {
        setRelKA(false);
      }
    }
  };

  const colorOptions = {
    allTPU: { color: 'red' },
    arteriPrimer: { color: '#9A0000' },
    jalanTol: { color: '#450202' },
    kecamatan: { color: 'rgb(124, 124, 125)' },
    kelurahan: { color: 'rgb(124, 124, 125, .5)' },
    kolektorPrimer: { color: '#FB5906' },
    lokalPrimer: { color: '#FED480' },
    pengembangan: { color: '#1afa0a' },
    relKereta: { color: '#444452' },
    sungai: { color: '#3d86fc' },
  };

  const dataArteriPrimer = jalan?.data?.geoJSON?.features.filter(val => val?.properties?.FUNGSI_JLN === 'Jalan Arteri Primer').map(val => val?.geometry?.coordinates);
  const dataKolektorPrimer = jalan?.data?.geoJSON?.features.filter(val => val?.properties?.FUNGSI_JLN === 'Jalan Kolektor Primer').map(val => val?.geometry?.coordinates);
  const dataLokalPrimer = jalan?.data?.geoJSON?.features.filter(val => val?.properties?.FUNGSI_JLN === 'Jalan Lokal Primer').map(val => val?.geometry?.coordinates);
  const dataJalanTol = jalan?.data?.geoJSON?.features.filter(val => val?.properties?.FUNGSI_JLN === 'Jalan Tol').map(val => val?.geometry?.coordinates);
  const dataRelKA = jalan?.data?.geoJSON?.features.filter(val => val?.properties?.FUNGSI_JLN === 'Rel Kereta Api').map(val => val?.geometry?.coordinates);

  // Polygon Sebaran TPU
  let valuePolygonTPU = [];
  const polygonTPU = (listTPU) => {
    dataTPU?.data?.geoJSON?.features.map((val, idx) => {
      let luas = Number(val?.properties?.Luas_Ha);
      listTPU.map((value) => {
        (val?.properties?.Nama_TPU === value?.name) &&
          valuePolygonTPU.push(
            <Polygon
              clickable={true}
              key={idx}
              pathOptions={colorOptions?.allTPU}
              positions={val?.geometry?.coordinates}
            >
              <Tooltip>
                <div><b>{val?.properties?.Nama_TPU}</b></div>
                <div>{val?.properties?.alamat || ''}</div>
                <div>Kec : <b>{val?.properties?.Kecamatan || ''}</b></div>
                <div>Desa : <b>{val?.properties?.Desa || ''}</b></div>
                <div>Luas(Ha) : <b>{luas.toFixed(2) || ''}</b></div>
              </Tooltip>
            </Polygon>
          );
      });
    });
  };

  // Koordinat Sungai
  let dataSungai = sungai?.data?.geoJSON?.features.map(val => val?.geometry?.coordinates);

  // Polygon Wilayah Pengembang
  let dataPengembangan1 = [];
  let dataPengembangan2 = [];
  let dataPengembangan3 = [];
  let dataPengembangan4 = [];
  const dataWP1 = pengembangan?.data?.geoJSON?.features.filter(val => val?.properties?.WP === 'Wilayah Pengembangan I');
  const dataWP2 = pengembangan?.data?.geoJSON?.features.filter(val => val?.properties?.WP === 'Wilayah Pengembangan II');
  const dataWP3 = pengembangan?.data?.geoJSON?.features.filter(val => val?.properties?.WP === 'Wilayah Pengembangan III');
  const dataWP4 = pengembangan?.data?.geoJSON?.features.filter(val => val?.properties?.WP === 'Wilayah Pengembangan IV');

  dataWP1.map((val, idx) => {
    dataPengembangan1.push(
      <Polygon
        clickable={true}
        key={idx}
        pathOptions={colorOptions?.pengembangan}
        positions={val?.geometry?.coordinates}
      >
        <Tooltip>
          <div><b>{val?.properties?.WP}</b></div>
        </Tooltip>
      </Polygon>
    );
  });

  dataWP2.map((val, idx) => {
    dataPengembangan2.push(
      <Polygon
        clickable={true}
        key={idx}
        pathOptions={colorOptions?.pengembangan}
        positions={val?.geometry?.coordinates}
      >
        <Tooltip>
          <div><b>{val?.properties?.WP}</b></div>
        </Tooltip>
      </Polygon>
    );
  });

  dataWP3.map((val, idx) => {
    dataPengembangan3.push(
      <Polygon
        clickable={true}
        key={idx}
        pathOptions={colorOptions?.pengembangan}
        positions={val?.geometry?.coordinates}
      >
        <Tooltip>
          <div><b>{val?.properties?.WP}</b></div>
        </Tooltip>
      </Polygon>
    );
  });

  dataWP4.map((val, idx) => {
    dataPengembangan4.push(
      <Polygon
        clickable={true}
        key={idx}
        pathOptions={colorOptions?.pengembangan}
        positions={val?.geometry?.coordinates}
      >
        <Tooltip>
          <div><b>{val?.properties?.WP}</b></div>
        </Tooltip>
      </Polygon>
    );
  });

  // Koordinat Batas Administrasi
  const valueKec = kecamatan?.data?.geoJSON?.features.map(val => val?.geometry?.coordinates);
  const valueKel = kelurahan?.data?.geoJSON?.features.map(val => val?.geometry?.coordinates);

  const handleChangeIndeterminate = (val) => (event) => {
    if (val === 'adm') {
      setMapAdm([event.target.checked, event.target.checked]);
    } else if (val === 'wp') {
      setMapWP([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
    }
  };

  const handleChangeChildWP = (val) => (event) => {
    if (val === '0') {
      setMapWP([event.target.checked, mapWP[1], mapWP[2], mapWP[3]]);
    } else if (val === '1') {
      setMapWP([mapWP[0], event.target.checked, mapWP[2], mapWP[3]]);
    } else if (val === '2') {
      setMapWP([mapWP[0], mapWP[1], event.target.checked, mapWP[3]]);
    } else if (val === '3') {
      setMapWP([mapWP[0], mapWP[1], mapWP[2], event.target.checked]);
    } else if (val === 'kec') {
      setMapAdm([event.target.checked, mapAdm[1]]);
    } else if (val === 'kel') {
      setMapAdm([mapAdm[0], event.target.checked]);
    }
  };

  const handleChildMap = (val) => () => {
    if (val === 'batasAdm') {
      setChildMap([true, childMap[1], childMap[2]]);
    } else if (val === 'batasAdmClose') {
      setChildMap([false, childMap[1], childMap[2]]);
    } else if (val === 'WP') {
      setChildMap([childMap[0], true, childMap[2]]);
    } else if (val === 'WP-close') {
      setChildMap([childMap[0], false, childMap[2]]);
    } else if (val === 'street') {
      setShowDescStreet(current => !current);
    } else if (val === 'allTPU-close') {
      setChildMap([childMap[0], childMap[1], false]);
    } else if (val === 'allTPU') {
      setChildMap([childMap[0], childMap[1], true]);
    }
  };

  const batasAdministrasi = () => {
    return (
      <div className={styles.wrapParentCheckbox}>
        <div className={styles.wrapCheckbox}>
          {childMap[0] ? <Remove fontSize="10" onClick={handleChildMap('batasAdmClose')} /> : <Add fontSize="10" onClick={handleChildMap('batasAdm')} />}
          <Checkbox
            checked={mapAdm[0] && mapAdm[1]}
            color="default"
            indeterminate={mapAdm[0] !== mapAdm[1]}
            onChange={handleChangeIndeterminate('adm')}
            size="small"
          />
          <div style={{ fontWeight: 'bold' }}>Batas Administrasi</div>
        </div>
        {childMap[0] &&
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <div className={styles.wrapCheckbox}>
              <Checkbox
                checked={mapAdm[0]}
                color="default"
                onChange={handleChangeChildWP('kec')}
                size="small"
              />
              Kecamatan
            </div>
            <div className={styles.wrapCheckbox}>
              <Checkbox
                checked={mapAdm[1]}
                color="default"
                onChange={handleChangeChildWP('kel')}
                size="small"
              />
              Kelurahan
            </div>
          </Box>
        }
      </div>
    );
  };

  const wilayahPengembangan = () => {
    return (
      <div className={styles.wrapParentCheckbox}>
        <div className={styles.wrapCheckbox}>
          {childMap[1] ? <Remove fontSize="10" onClick={handleChildMap('WP-close')} /> : <Add fontSize="10" onClick={handleChildMap('WP')} />}
          <Checkbox
            checked={mapWP[0] && mapWP[1] && mapWP[2] && mapWP[3]}
            color="default"
            indeterminate={mapWP[0] !== mapWP[1] || mapWP[0] !== mapWP[2] || mapWP[0] !== mapWP[3]}
            onChange={handleChangeIndeterminate('wp')}
            size="small"
          />
          <div style={{ fontWeight: 'bold' }}>Wilayah Pengembangan</div>
        </div>
        {childMap[1] &&
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <div className={styles.wrapCheckbox}>
              <Checkbox
                checked={mapWP[0]}
                color="default"
                onChange={handleChangeChildWP('0')}
                size="small"
              />
              Wilayah Pengembangan I
            </div>
            <div className={styles.wrapCheckbox}>
              <Checkbox
                checked={mapWP[1]}
                color="default"
                onChange={handleChangeChildWP('1')}
                size="small"
              />
              Wilayah Pengembangan II
            </div>
            <div className={styles.wrapCheckbox}>
              <Checkbox
                checked={mapWP[2]}
                color="default"
                onChange={handleChangeChildWP('2')}
                size="small"
              />
              Wilayah Pengembangan III
            </div>
            <div className={styles.wrapCheckbox}>
              <Checkbox
                checked={mapWP[3]}
                color="default"
                onChange={handleChangeChildWP('3')}
                size="small"
              />
              Wilayah Pengembangan IV
            </div>
          </Box>
        }
      </div>
    );
  };

  const jaringanJalan = () => {
    return (
      <div className={styles.wrapParentCheckbox}>
        <div className={styles.wrapCheckbox}>
          {showDescStreet ? <Remove fontSize="10" onClick={handleChildMap('street')} /> : <Add fontSize="10" onClick={handleChildMap('street')} />}
          <Checkbox
            checked={mapJaringanJalan}
            color="default"
            onChange={handleChangeMenu('jaringanJalan')}
            size="small"
          />
          <div style={{ fontWeight: 'bold' }}>Jaringan Jalan</div>
        </div>
        {showDescStreet &&
          <React.Fragment>
            <div style={{ alignItems: 'center', display: 'flex', margin: '5px 30px' }}>
              <Image alt="" src={arteri} />
              <div className="ml-1">Jalan Arteri Primer</div>
            </div>
            <div style={{ alignItems: 'center', display: 'flex', margin: '5px 30px' }}>
              <Image alt="" src={kolektor} />
              <div className="ml-1">Jalan Kolektor Primer</div>
            </div>
            <div style={{ alignItems: 'center', display: 'flex', margin: '5px 30px' }}>
              <Image alt="" src={lokal} />
              <div className="ml-1">Jalan Lokal Primer</div>
            </div>
          </React.Fragment>
        }
      </div>
    );
  };

  const removeDuplicates = (arr) => {
    const names = arr.map((item) => item?.properties?.Nama_TPU);
    return names.filter((val, idx) => names.indexOf(val) === idx);
  };

  const sebaranTPU = () => {
    let datasTPU = dataTPU?.data?.geoJSON?.features;
    const namesTPU = removeDuplicates(datasTPU);
    let checkIndeterminate;
    if (namesTPU.length !== listSebaranTPU.length) {
      if (listSebaranTPU.length === 0) {
        checkIndeterminate = false;
      } else {
        checkIndeterminate = true;
      }
    } else {
      checkIndeterminate = false;
    }
    return (
      <div className={styles.wrapParentCheckbox}>
        <div className={styles.wrapCheckbox}>
          {childMap[2] ? <Remove fontSize="10" onClick={handleChildMap('allTPU-close')} /> : <Add fontSize="10" onClick={handleChildMap('allTPU')} />}
          <Checkbox
            checked={showAllTPU || listSebaranTPU.length === namesTPU.length}
            color="default"
            indeterminate={checkIndeterminate}
            onChange={handleChangeSebaranTPU('showAllTPU', namesTPU)}
            size="small"
          />
          <div style={{ fontWeight: 'bold' }}>Sebaran TPU</div>
        </div>
        {childMap[2] &&
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {namesTPU.map((val, idx) => {
              let getSomeData = (listSebaranTPU || []).filter(value => value?.name === val).map(val => val?.checked)?.toString();
              return (
                <div className={styles.wrapCheckbox} key={idx}>
                  <Checkbox
                    checked={getSomeData}
                    color="default"
                    onChange={handleChangeSebaranTPU(val, namesTPU)}
                    size="small"
                  />
                  {val}
                </div>
              );
            })}
          </Box>
        }
      </div>
    );
  };

  return (
    <div className={styles.containerPeta}>
      <MapContainer
        boundsOptions={{
          padding: [1, 1]
        }}
        center={[-6.18668590415117, 107.08972369505034]}
        scrollWheelZoom={false}
        zoom={10}
      >
        <div className={showMenu ? styles.wrapMenuShow : styles.wrapMenu} onClick={handleMenu}>
          {showMenu ? <Close sx={{ color: '#FFF' }} /> : <Menu />}
        </div>
        <div className={showMenu ? styles.containerMenu : styles.containerMenuHide}>
          {batasAdministrasi()}
          {wilayahPengembangan()}
          <div className={styles.wrapCheckboxSingle}>
            <Checkbox checked={mapSungai} color="default" onChange={handleChangeMenu('sungai')} size="small" value={mapSungai} />
            Sungai Besar
          </div>
          <div className={styles.wrapCheckboxSingle}>
            <Checkbox checked={mapRelKA} color="default" onChange={handleChangeMenu('relKA')} size="small" />
            Rel Kereta Api
          </div>
          <div className={styles.wrapCheckboxSingle}>
            <Checkbox checked={mapJalanTol} color="default" onChange={handleChangeMenu('tol')} size="small" />
            Jalan TOL
          </div>
          {jaringanJalan()}
          {sebaranTPU()}
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0px' }}>
            <Button
              color="error"
              onClick={handleResetMaps}
              size="small"
              sx={{ textTransform: 'capitalize' }}
              variant="outlined"
            >
              Reset
            </Button>
          </div>
        </div>
        <div
          style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'row-reverse', position: 'absolute', right: 15, top: 15, zIndex: 400 }}
        >
          <IconButton onClick={handleShowLayer} style={{ backgroundColor: '#acacad', width: '40px' }}>
            <Layers style={{ color: '#FFF' }} />
          </IconButton>
          {showListLayer &&
            <React.Fragment>
              {ListLayers.map((val, idx) => {
                return (
                  <div className={layerActive === idx ? styles.wrapListLayerActive : styles.wrapListLayer} key={idx} onClick={handleChangeLayer(val, idx)}>
                    {layerActive === idx ? <CheckCircle style={{ color: '#1EB74C', left: 7, position: 'absolute', top: 12, zIndex: '2' }} /> : ''}
                    {val?.pic}
                  </div>
                );
              })}
            </React.Fragment>
          }
        </div>
        <TileLayer
          url={layer}
        />
        {mapJaringanJalan && <Polyline pathOptions={colorOptions?.lokalPrimer} positions={dataLokalPrimer} />}
        {mapJaringanJalan && <Polyline pathOptions={colorOptions?.kolektorPrimer} positions={dataKolektorPrimer} />}
        {mapJaringanJalan && <Polyline pathOptions={colorOptions?.arteriPrimer} positions={dataArteriPrimer} />}
        {mapJalanTol && <Polyline pathOptions={colorOptions?.jalanTol} positions={dataJalanTol} />}
        {mapRelKA && <Polyline pathOptions={colorOptions?.relKereta} positions={dataRelKA} />}
        {mapAdm[1] && <Polyline pathOptions={colorOptions?.kelurahan} positions={valueKel} />}
        {mapAdm[0] && <Polyline pathOptions={colorOptions?.kecamatan} positions={valueKec} />}
        {mapSungai && <Polyline pathOptions={colorOptions?.sungai} positions={dataSungai} />}
        {mapWP[0] && dataPengembangan1}
        {mapWP[1] && dataPengembangan2}
        {mapWP[2] && dataPengembangan3}
        {mapWP[3] && dataPengembangan4}
        {(listSebaranTPU.length !== 0) && polygonTPU(listSebaranTPU)}
        {valuePolygonTPU}
      </MapContainer >
    </div >
  );
}

