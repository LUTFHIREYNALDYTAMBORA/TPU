/* eslint-disable react/jsx-max-depth */
import React from 'react';
import big from '../../assets/big.svg';
import bps from '../../assets/bps.svg';
import pemkabBekasi from '../../assets/pemkabBekasi.svg';
import kominfo from '../../assets/kominfo.svg';
import fitur1 from '../../assets/fitur1.png';
import fitur2 from '../../assets/fitur2.png';
import fitur3 from '../../assets/fitur3.png';
import location from '../../assets/location.png';
import section1 from '../../assets/section1.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';
import facebook from '../../assets/facebook.svg';
import { aboutApp, sasaran } from './Contents';
import { MenuAlt1Icon, ViewGridIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { ArrowForwardIos } from '@mui/icons-material';
import styles from './Styles.module.css';
import { Button } from '@mui/material';
import Image from 'next/image';
import tpu from '../../assets/tpu.svg';
import PropTypes from 'prop-types';
// import ReactPlayer from 'react-player/youtube';
// import video from '../../assets/video.mp4';
// import videos from '../../../../public/video/video.mp4';
// import { CldVideoPlayer } from 'next-cloudinary';
// import VideoPlayer from 'react-video-js-player';

export default function ContentHome({ onManage }) {
  // const vid = video;
  return (
    <div>
      <div className={styles.firstSection}>
        <div className={styles.titleSection1}>
          Web Pengelolaan Data <span className={styles.lahanTPU}>Lahan TPU</span>
        </div>
        <p className={styles.descSection1}>
          Kelola dan cari informasi rinci tentang lahan TPU serta lokasinya, yang ada pada wilayah Pemerintah Daerah Kabupaten Bekasi dengan mudah dan cepat.
        </p>
        <Button
          className={styles.btnStartManage}
          onClick={onManage}
          variant="outlined"
        >
          Mulai Kelola <ArrowForwardIos className="ml-2" fontSize="8" />
        </Button>
        <div className={styles.wrappImgSection1}>
          <Image alt="" src={section1} />
        </div>
      </div>

      <div className={styles.thirdSection}>
        <div className={styles.sideLeftThirdSection}>
          <div className={styles.wrappTitleThirdSection}>
            <div className={styles.aboutApp}>Tentang Aplikasi</div>
            <div className={styles.bgApp}>
              Updating Inventarisasi Lahan TPU adalah sebuah sistem informasi manajemen
              berbasis webgis yang memadukan database lahan TPU pemerintahan Kabupaten Bekasi dan pemetaannya.
            </div>
          </div>
          <div className={styles.wrappIconThirdSection}>
            <Image alt="" className={styles.tpuThirdSection} src={tpu} />
          </div>
        </div>
        <div className={styles.sideRightThirdSection}>
          {aboutApp.map((val, idx) => {
            return (
              <div className={styles.cardThirdSection} key={idx}>
                <div className={styles.numberThirdSection}>{val?.title}</div>
                <div className={styles.wrappDesc}>{val?.desc}</div>
              </div>
            );
          })}
          <div className={styles.cardThirdSection}>
            <div className={styles.numberThirdSection}>Sasaran</div>
            <ul className={styles.wrappSasaran}>
              {sasaran.map((val, idx) => {
                return (
                  <li key={idx}>{val}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.fourthSection}>
        {/* <video src={(require(videos))} /> */}
        {/* <video height="500" width="700">
          <src src="/video/video.mp4" type="video/mp4" />
        </video> */}
        {/* <ReactPlayer
          controls
          height="50%"
          url={{ ...video }}
          width="50%"
        /> */}
        {/* <CldVideoPlayer
          autoPlay
          loop
          src="../../assets/video.mp4"
          src={vid}
        /> */}
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=wWgIAphfn2U" /> */}
        <div className={`${styles.h3} text-center mt-10 mb-10`}>Fitur</div>
        <div className="flex item-center">
          <div className={styles.sideLeftFourthSection}>
            <Image alt="" className={styles.fitur1} src={fitur1} />
          </div>
          <div className={styles.sideRightFourthSection}>
            <div className="flex items-center">
              <p className={styles.h4}>Log In Page</p>
              <div className={styles.wrappIcon}><MenuAlt1Icon color="white" width={15} /></div>
            </div>
            <div>Halaman ini disediakan untuk user yang memiliki akses pada aplikasi seperti Masyarakat dan Admin SKPD</div>
          </div>
        </div>

        <div className="flex item-center mt-10">
          <div className={styles.sideRightFourthSection2}>
            <div className="flex items-center">
              <p className={styles.h4}>Dashboard</p>
              <div className={styles.wrappIcon}><ViewGridIcon color="white" width={15} /></div>
            </div>
            <div className="text-justify">
              Halaman ini dimaksudkan untuk memberi visualisasi data yang informatif dan membantu para pemangku kepentingan mengambil keputusan lebih cepat dan tepat
            </div>
          </div>
          <div className={styles.sideLeftFourthSection2}>
            <Image alt="" className={styles.fitur1} src={fitur2} />
          </div>
        </div>

        <div className="flex item-center mt-10 mb-20">
          <div className={styles.sideLeftFourthSection}>
            <Image alt="" className={styles.fitur1} src={fitur3} />
          </div>
          <div className={styles.sideRightFourthSection}>
            <div className="flex items-center">
              <p className={styles.h4}>Kelola Data TPU</p>
              <div className={styles.wrappIcon}><LocationMarkerIcon color="white" width={15} /></div>
            </div>
            <div>Halaman ini disediakan untuk user yang memiliki akses untuk melihat, mengubah, membuat data terkait lahan TPU pada aplikasi</div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className={`${styles.h3} text-center mt-10`}>Didukung Oleh</div>
        <div className="text-center mb-5">Program pengembangan sistem ini banyak melibatkan dan didukung oleh banyak lembaga seperti :</div>
        <div className="flex justify-center">
          <div className={styles.wrappLogos}>
            <Image alt="" src={pemkabBekasi} />
          </div>
          <div className={styles.wrappLogos}>
            <Image alt="" src={kominfo} />
          </div>
          <div className={styles.wrappLogos}>
            <Image alt="" src={bps} />
          </div>
          <div className={styles.wrappLogos}>
            <Image alt="" src={big} />
          </div>
        </div>
      </div>

      <div className={styles.sixthSection}>
        <div className={styles.wrappContentFooter}>
          <div className={styles.sideLefitSixthSection}>
            <div className={styles.titleFooter}>Pemerintah Daerah Kabupaten Bekasi</div>
            <div className={styles.descFooter}>
              Aplikasi Web Updating Inventarisasi Lahan TPU Kabupaten Bekasi
            </div>
            <div className={styles.descFooter}>
              Version 1.0
            </div>
            <div className={styles.sosmedFooter}>
              <a href="https://www.instagram.com/pemkabbekasi/" target="blank">
                <Image alt="" src={instagram} />
              </a>
              <a href="https://www.youtube.com/@pemkab_bekasi" target="blank">
                <Image alt="" src={youtube} />
              </a>
              <a href="https://www.facebook.com/KabupatenBekasi.Bks/?locale=id_ID" target="blank">
                <Image alt="" src={facebook} />
              </a>
            </div>
          </div>
          <div className={styles.sideRightSixthSection}>
            <a href="https://shorturl.at/ipN49" target="blank">
              <Image alt="" src={location} />
            </a>
            <a
              className={styles.descFooter}
              href="https://shorturl.at/ipN49"
              target="blank"
            >
              Kantor Pemerintah Daerah Kabupaten Bekasi, J5MF+G49, Jl. Wibawa Mukti, Sukamahi, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530
            </a>
          </div>
        </div>
        <div className={styles.copyright}>© 2023 Pemerintah Daerah Kabupaten Bekasi. All rights reserved.</div>
      </div>
    </div>
  );
}

ContentHome.propTypes = {
  onManage: PropTypes.func.isRequired,
};
