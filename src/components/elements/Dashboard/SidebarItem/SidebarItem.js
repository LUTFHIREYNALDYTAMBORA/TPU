import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function SidebarItem(props) {
  const { name, link } = props.item;

  return (
    <div className="text-cyan-500 flex relative px-4 hover:bg-gray-700 cursor-pointer">
      <Link href={link} passHref>
        <span className="my-3">{name}</span>
      </Link>
    </div>
  );
}

SidebarItem.defaultProps = {
  item: {}
};

SidebarItem.propTypes = {
  item: PropTypes.object
};
