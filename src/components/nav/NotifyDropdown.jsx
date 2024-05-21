
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


function NotifyDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" grid place-items-center w-[50px] h-[50px] rounded-full overflow-hidden m-auto  p-1  text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
          <i className='text-3xl text-gray-500'><IoIosNotificationsOutline/></i>
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
        <Menu.Items className="absolute px-3 py-4 right-0 z-10 w-[400px] mt-2 origin-top-right bg-white   rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <h3 className='text-black mb-3 text-2xl capitalize'>Notification</h3>
          <div className="px-1 py-1 divide-y divide-gray-100">
              <Menu.Item>
                <div className='flex items-center justify-between  gap-3 hover:bg-gray-100 duration-300 rounded-md p-1'>
                  <div className='flex items-center gap-3'>
                    <img src={img} alt='userphoto' className='w-12 h-12 object-cover rounded-full overflow-hidden'/>
                    <div className='ml-2'>
                      <p className='font-semibold'>John Doe</p>
                      <p className='text-gray-500 text-sm'>los angelos</p>
                      <p className='text-gray-500 text-sm'>3 minutes ago</p>
                    </div>
                  </div>
                  <span className='readed w-[10px] h-[10px] bg-blue-600 rounded-full'></span>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className='flex items-center justify-between  gap-3 hover:bg-gray-100 duration-300 rounded-md p-1'>
                  <div className='flex items-center gap-3'>
                    <img src={img} alt='userphoto' className='w-12 h-12 object-cover rounded-full overflow-hidden'/>
                    <div className='ml-2'>
                      <p className='font-semibold'>John Doe</p>
                      <p className='text-gray-500 text-sm'>los angelos</p>
                      <p className='text-gray-500 text-sm'>3 minutes ago</p>
                    </div>
                  </div>
                  <span className='readed w-[10px] h-[10px] bg-blue-600 rounded-full'></span>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className='flex items-center justify-between pb-3  gap-3 hover:bg-gray-100 duration-300 rounded-md p-1'>
                  <div className='flex items-center gap-3'>
                    <img src={img} alt='userphoto' className='w-12 h-12 object-cover rounded-full overflow-hidden'/>
                    <div className='ml-2'>
                      <p className='font-semibold'>John Doe</p>
                      <p className='text-gray-500 text-sm'>los angelos</p>
                      <p className='text-gray-500 text-sm'>3 minutes ago</p>
                    </div>
                  </div>
                  <span className='readed w-[10px] h-[10px] bg-blue-600 rounded-full'></span>
                </div>
              </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default memo(NotifyDropdown);

