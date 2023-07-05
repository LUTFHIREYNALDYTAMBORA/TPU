import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';

export default function HomeCardItem(props) {
  const { pageDescription, pageLink, pageTitle } = props.item;

  return (
    <Link href={pageLink} passHref>
      <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cyan-500 focus:text-cyan-500">
        <h3 className="text-2xl font-bold">{pageTitle} &rarr;</h3>
        <p className="mt-4 text-xl">{pageDescription}</p>
      </a>
    </Link>
  );
}

HomeCardItem.defaultProps = {
  item: {}
};

HomeCardItem.propTypes = {
  item: PropTypes.object
};
