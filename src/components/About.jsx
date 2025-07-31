import React from 'react';
import { motion } from 'framer-motion';
import { Building, ShieldCheck, Lightbulb } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: 'beforeChildren' },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const featureList = [
    {
      icon: <Building className="w-10 h-10 text-primary" />,
      title: 'Expertise em Construção',
      description:
        'Vasta experiência em projetos de construção de todos os portes, garantindo execução impecável.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: 'Qualidade Assegurada',
      description:
        'Nosso compromisso inabalável com a qualidade e segurança em cada etapa do processo.',
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: 'Soluções Inovadoras',
      description:
        'Utilizamos tecnologias e métodos construtivos modernos para otimizar resultados e custos.',
    },
  ];

  return (
    <section id="sobre" className="section bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Sobre a NTC Brasil
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Somos uma empresa respeitada no setor de construção, dedicada a
            oferecer soluções inovadoras e eficientes, com um compromisso sólido
            com a qualidade e a satisfação do cliente.
          </motion.p>
        </motion.div>

        <div className="mt-16">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featureList.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 bg-light"
                variants={itemVariants}
              >
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Pronto para construir o futuro?
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            De pequenas reformas a grandes empreendimentos, a NTC Brasil é sua
            parceira ideal para transformar visão em realidade com
            profissionalismo e excelência.
          </p>
          <a
            href="#contato"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector('#contato')
                .scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-secondary"
          >
            Vamos Conversar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
