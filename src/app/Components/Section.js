'use client'

import { motion } from 'framer-motion';
import Obras from './Obras'
import Perfil from './Perfil'
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import Carrossel from './Carrossel';

export default function Section() {
  return (
    <>
      <Perfil></Perfil>
      {/* Grade */}
      <div className="grid md:grid-cols-2 md:flex md:justify-center md:items-center text-center gap-4">
        {/* Imagem */}

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="p-4"
        >
          <div className='flex flex-col'>
            <h1 className="text-7xl text-center font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-pink-700 to-pink-400">Biografia</h1>
            <h2 className='italic font-semibold text-sm text-white'></h2>
            <p className="font-semibold mt-2">Olá, Bem vindo ao meu site, esteja preparado para im mix de emoções</p>
          </div>
        </motion.div>
        <img
          src="/perfil.png"
          className="w-72 h-72 mt-8 mx-auto md:mx-0"
          alt="Perfil"
        />
      </div>
      <Carrossel></Carrossel>
      <Obras></Obras>
      <Link href="https://api.whatsapp.com/send?phone=5561995682323&text=Ol%C3%A1,%20vim%20do%20site%0AGostaria%20de%20marcar%20um%20atendimento" className='fixed bottom-10 cursor-pointer right-10 w-10 h-10 text-white bg-green-500 rounded-full'>
        <BsWhatsapp className='w-10 h-10 fixed bottom-30 right-10' />
      </Link>
    </>
  );
}
