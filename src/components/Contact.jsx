import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, error: false, success: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: false, success: false });

    try {
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'ffbrunoff@yahoo.com.br',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus({ loading: false, error: false, success: true });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ loading: false, error: false, success: false }), 5000);
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus({ loading: false, error: true, success: false });
      setTimeout(() => setStatus({ loading: false, error: false, success: false }), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 100 } 
    },
  };

  return (
    <section id="contato" className="section bg-white">
      <div className="container mx-auto px-6">
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2 variants={itemVariants} className="section-title">
            Entre em Contato
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
            Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre isso. Preencha o formulário abaixo ou utilize nossos canais de contato direto.
            </motion.p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >