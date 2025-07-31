import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const headerVariants = {
    initial: {
      backgroundColor: 'rgba(248, 249, 250, 0)',
      backdropFilter: 'blur(0px)',
      boxShadow: 'none',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        variants={headerVariants}
        animate={scrolled ? 'scrolled' : 'initial'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#inicio"
            onClick={e => scrollToSection(e, '#inicio')}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754004357899_0.png"
              alt="NTC Brasil Logo"
              className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className="text-text-primary font-medium hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 bg-white shadow-lg md:hidden z-40"
          >
            <motion.div
              className="flex flex-col items-center space-y-6 py-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map(link => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => scrollToSection(e, link.href)}
                  className="text-lg text-secondary font-semibold hover:text-primary"
                  variants={menuItemVariants}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
