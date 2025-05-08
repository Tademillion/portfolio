import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='fixed w-full bg-primary/80 backdrop-blur-sm z-50 shadow-lg'>
      <div className='max-w-[1200px] mx-auto px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center space-x-2'
          >
            <div className='flex items-center space-x-1'>
              <FaCode className='text-2xl text-secondary' />
              <span className='text-xl font-bold text-textPrimary'>Dev</span>
            </div>
            <div className='hidden md:flex items-center space-x-1 text-textSecondary text-sm'>
              <span>|</span>
              <FaLaptopCode className='text-sm text-secondary' />
              <span>Full Stack</span>
              <span>|</span>
              <FaCode className='text-sm text-secondary' />
              <span>Frontend</span>
              <span>|</span>
              <FaServer className='text-sm text-secondary' />
              <span>Backend</span>
              <span>|</span>
              <FaDatabase className='text-sm text-secondary' />
              <span>Database</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='text-textPrimary hover:text-secondary transition-colors duration-300'
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-textPrimary hover:text-secondary transition-colors duration-300'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden'
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-textPrimary hover:text-secondary transition-colors duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 