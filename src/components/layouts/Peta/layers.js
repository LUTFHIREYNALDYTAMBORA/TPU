import Image from 'next/image';
import React from 'react';
import OSM from '../../assets/OSM.svg';
import satellite from '../../assets/satellite.svg';
import street from '../../assets/street.svg';
import outdoor from '../../assets/outdoor.svg';
import backdrop from '../../assets/backdrop.svg';

export const ListLayers = [
  {
    pic: <Image alt="" src={OSM} width={70} />,
    title: 'OSM',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    pic: <Image alt="" src={satellite} width={70} />,
    title: 'Satellite',
    url: 'https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=51wgXJ05XA7ytvLjY33G'
  },
  {
    pic: <Image alt="" src={street} width={70} />,
    title: 'Streets',
    url: 'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=51wgXJ05XA7ytvLjY33G'
  },
  {
    pic: <Image alt="" src={outdoor} width={70} />,
    title: 'Outdoor',
    url: 'https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=51wgXJ05XA7ytvLjY33G'
  },
  {
    pic: <Image alt="" src={backdrop} width={70} />,
    title: 'Backdrop',
    url: 'https://api.maptiler.com/maps/backdrop/256/{z}/{x}/{y}.png?key=51wgXJ05XA7ytvLjY33G'
  },
];
