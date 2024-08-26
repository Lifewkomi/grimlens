import React from 'react'
import FloatingNav from "./floatingnavbar";
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';

export default function Demo() {

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Gallery',
      link: '/gallery',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className='relative w-full'>
      <FloatingNav navItems={navItems} />
    </div>
  )
}

