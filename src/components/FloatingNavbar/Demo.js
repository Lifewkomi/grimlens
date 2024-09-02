import React from 'react';
import FloatingNav from "./floatingnavbar";
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery2 from '../Gallery2';
import Contact from '../../sections/Contact';

export default function Demo() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Gallery',
      link: '/gallery',
      icon: <IconUser className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <IconMessage className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <>
    <FloatingNav navItems={navItems} />
      <Routes>
        <Route path="/gallery" element={<Gallery2 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
      
  );
}
