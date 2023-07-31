import { LocationOn, PieChart, Settings } from '@mui/icons-material';
import React from 'react';
import footerSidebar from '../../assets/footerSidebar.svg';
import styles from './Styles.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Sidebar({ valueMenu }) {
  const [menuActive, setMenuActive] = React.useState(0);

  const menuList = [
    {
      icon: <LocationOn className={styles.wrappIconMenu} />,
      title: 'Sebaran TPU'
    },
    {
      icon: <PieChart className={styles.wrappIconMenu} />,
      title: 'Kelola Data TPU'
    },
    {
      icon: <Settings className={styles.wrappIconMenu} />,
      title: 'Pengaturan Akun'
    }
  ];

  const handleMenu = (val) => () => {
    setMenuActive(val);
    valueMenu(val);
  };

  return (
    <div className={styles.containerSidebar}>
      {menuList.map((val, idx) => {
        return (
          <div
            className={menuActive === idx ? styles.wrappMenuActive : styles.wrappMenu}
            key={idx}
            onClick={handleMenu(idx)}
          >
            <span style={{ color: menuActive === idx ? '#5BE584' : 'white' }}>{val?.icon}</span> {val?.title}
          </div>
        );
      })}
      <div className={styles.wrappFooterImg}>
        <Image alt="" src={footerSidebar} />
      </div>
    </div >
  );
}

Sidebar.propTypes = {
  valueMenu: PropTypes.func.isRequired,
};
