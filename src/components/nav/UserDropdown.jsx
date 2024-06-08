import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { Fragment, memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/profile-img.jpg'
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import Cookie from 'cookie-universal';
import { UserContext } from '../../context/UserContext';

import userImg from '../../img/olp.jpeg'


function UserDropdown() {
const {userDetails} = useContext(UserContext)
  const cookie = Cookie()
  const user = sessionStorage.getItem("user-info")
  const token = sessionStorage.getItem("hotel")

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" w-[45px] h-[45px] rounded-full overflow-hidden m-auto inline-flex justify-center p-1  text-sm font-medium text-gray-700  hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75">
          <img src={userDetails?.photo_profile || userImg} alt={user?.name} className='w-full h-full object-cover rounded-full overflow-hidden'/>
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
        <Menu.Items className="absolute px-3 py-4 right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
              <div className='flex items-center pb-3 border-b border-b-slate-200 mb-3'>
                <img src={userDetails?.photo_profile || userImg} alt={user?.name} className='w-12 h-12 object-cover rounded-full overflow-hidden'/>
                <div className='ml-2'>
                  <p className='font-semibold'>{userDetails?.name}</p>
                  <p className='text-gray-500 text-sm'><span className='font-semibold'>type: </span>{userDetails?.account_type}</p>
                </div>
              </div>
            <Menu.Item>
              {({ active }) => (
                <Link to='/profile'
                  className={`flex items-center gap-2 ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <i><CiUser/></i>
                  <span>my account</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/booking-list'
                  className={`flex items-center gap-2 ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <i><CiBookmarkCheck/></i>
                  <span>booking list</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='wishlist'
                  className={`flex items-center gap-2 ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                > 
                  <i><FaRegHeart/></i>
                  <span>wishlist</span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default memo(UserDropdown);

