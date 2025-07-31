import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const scrollToContact = e => {
    e.preventDefault();
    document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-light overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-20%] w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight"
          >
            Transformando projetos em realidade com{' '}
            <span className="gradient-text">excelência</span> e{' '}
            <span className="gradient-text">compromisso</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
          >
            NTC Brasil: Soluções inovadoras e qualidade garantida em cada
            projeto de construção.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#contato"
              onClick={scrollToContact}
              className="btn btn-primary text-lg"
            >
              Solicite um Orçamento
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#sobre"
          onClick={e => {
            e.preventDefault();
            document
              .querySelector('#sobre')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronsDown size={32} className="text-primary" />
        </a>
      </motion.div>
    </section>
  );
}
