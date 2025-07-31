import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Home, Building2, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <HardHat size={36} className="text-primary" />,
      title: 'Planejamento e Gestão de Obras',
      description: 'Coordenação completa de todas as fases do projeto, desde o planejamento inicial até a entrega, garantindo prazos, custos e qualidade.',
    },
    {
      icon: <Home size={36} className="text-primary" />,
      title: 'Construção Residencial',
      description: 'Executamos projetos de construção de residências unifamiliares e condomínios, focando no conforto, design e durabilidade.',
    },
    {
      icon: <Building2 size={36} className="text-primary" />,
      title: 'Construção Comercial e Industrial',
      description: 'Desenvolvimento de edifícios comerciais, galpões e instalações industriais com soluções eficientes e adaptadas ao seu negócio.',
    },
    {
      icon: <Wrench size={36} className="text-primary" />,
      title: 'Reformas e Renovações',
      description: 'Serviços especializados de reforma para modernizar, ampliar ou restaurar imóveis, valorizando seu patrimônio.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', damping: 15, stiffness: 100 } 
    },
  };

  return (
    <section id="servicos" className="section bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Nossas Soluções em Construção
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Oferecemos uma gama completa de serviços para atender às diversas necessidades do mercado da construção civil, sempre com o selo de qualidade NTC Brasil.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:g     <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                  placeholder="Seu nome"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                  placeholder="seu.email@exemplo.com"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Sua Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition"
                  placeholder="Como podemos ajudar no seu projeto?"
                ></textarea>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn btn-primary w-full text-lg disabled:bg-opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status.loading ? <Loader2 className="animate-spin mr-2" /> : 'Enviar Mensagem'}
                </button>
              </motion.div>
            </form>
            {status.success && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-green-600 bg-green-100 p-3 rounded-lg"
              >
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </motion.p>
            )}
            {status.error && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-600 bg-red-100 p-3 rounded-lg"
              >
                Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.
              </motion.p>
            )}
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-secondary mb-6">Ou entre em contato diretamente</motion.h3>
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Telefone</h4>
                <a href="tel:+5544991040774" className="text-text-secondary hover:text-primary transition-colors">+55 44 99104-0774</a>
              </div>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary">E-mail</h4>
                <a href="mailto:ffbrunoff@yahoo.com.br" className="text-text-secondary hover:text-primary transition-colors">ffbrunoff@yahoo.com.br</a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Endereço</h4>
                <p className="text-text-secondary">Padre Lebret, 801, G05 Bloco 03</p>
                <p className="text-text-secondary">Maringá - PR, Brasil</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}