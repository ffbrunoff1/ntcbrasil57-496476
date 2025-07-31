import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };
  
  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  const footerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}
  }

  return (
    <motion.footer 
        className="bg-secondary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')}>
              <img 
                 src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754004357899_0.png" 
                alt="NTC Brasil Logo" 
                className="h-12 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-xs text-gray-300 text-sm">
              Construindo o futuro com inovação, qualidade e um compromisso sólido com nossos clientes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => scrollToSectiorid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="mb-5 flex justify-start items-center">
                <div className="bg-primary/10 p-3 rounded-lg">
                    {service.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a href="#contato" onClick={(e) => { e.preventDefault(); document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' }); }} className="font-semibold text-primary hover:text-primary-dark transition-colors duration-300">
                  Saiba Mais →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}