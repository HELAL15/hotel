
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/profile-img.jpg'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import Tabs from './LangTabs';
import { Select, Space } from 'antd';
import Lang from './Lang';
import Currency from './Currency';
// import 'antd/dist/antd.css';



function LangCurrency() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" grid place-items-center w-fit  rounded-full overflow-hidden m-auto bg-transparent  py-1 px-5  text-sm font-medium text-gray-700  focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
          <div className='flex items-center gap-1 text-gray-500 text-lg'>
          <i><AiOutlineGlobal/></i>
            <span>/</span>
          <i><AiFillDollarCircle/></i>
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute px-3 py-4 right-0 z-10  mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 flex items-center gap-2 ">
              {/* <Tabs/> */}
              <Lang/>
              <Currency/>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

  );
}

export default memo(LangCurrency);

