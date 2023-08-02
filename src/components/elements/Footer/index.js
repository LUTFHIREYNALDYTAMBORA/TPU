import React from 'react';
import logo from '../../assets/logo.svg';
import Image from 'next/image';
import styles from './Styles.module.css';

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div>2023 Powered by Pemkab. Bekasi</div>
      <Image alt="" src={logo} width={20} />
    </div>
  );
}
