import React from 'react';
import { LogoutIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import PropTypes from 'prop-types';

import SidebarItem from '../../elements/Dashboard/SidebarItem';
import sidebarItemData from '../../pages/Dashboard/constants';

export default function AdminBase(props) {
  const { children } = props;

  const renderSidebar = () => {
    return (
      <aside className="w-64 flex-shrink-0">
        <div className="flex-auto bg-gray-900 h-full">
          <ul className="relative m-0 p-0 list-none h-full">
            <li className="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
              Codebase
            </li>

            {/* Category List */}
            {/* <li className="p-4 w-full flex relative shadow-sm">
                <div className="flex-auto my-1">
                  <span className="text-white font-medium">Develop</span>
                </div>
              </li> */}
            {sidebarItemData.items.map((item, idx) => (
              <SidebarItem item={item} key={idx} />
            ))}
          </ul>
        </div>
      </aside>
    );
  };

  const renderContent = () => {
    return (
      <div className="flex flex-col w-full">
        <header className="text-white bg-cyan-500 left-auto top-0 right-0 p-2">
          <div className="h-12 px-4 flex items-center justify-end">
            <button className="flex text-white hover:text-gray-200 focus:outline-none">
              <Link href="/" passHref>
                <LogoutIcon className="h-6 w-6" />
              </Link>
            </button>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen">
      {renderSidebar()}
      {renderContent()}
    </div>
  );
}

AdminBase.propTypes = {
  children: PropTypes.element,
};

AdminBase.defaultProps = {
  children: null,
};
