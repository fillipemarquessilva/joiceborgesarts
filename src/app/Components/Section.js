'use client'

import { motion } from 'framer-motion';
import Obras from './Obras'
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import Carrossel from './Carrossel';

export default function Section() {
  return (
    <>
      <div className="h-full bg-gradient-to-b from-sky-800 to-amber-600">
        {/* Grade */}
        <div className="grid md:grid-cols-2 md:flex md:justify-center md:items-center text-center gap-4">
          {/* Imagem */}
          <img
            src="/perfil.jpg"
            className="w-96 h-96 rounded-full p-4 mt-8 mx-auto md:mx-0"
            alt="Perfil"
          />

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-4"
          >
            <div className='flex flex-col bg-blue-700'>
              <h1 className="italic text-4xl text-white font-bold">Joice Borges</h1>
              <h2 className='italic font-semibold text-sm text-white'>Artista visual</h2>
            </div>
            <p className="text-lg text-white font-semibold mt-6">
              Suas obras têm a intenção de estimular o imaginário ainda
              inconsciente, através de formas e da sinergia das cores
              contrastantes provenientes da natureza.
              A arte passou a fazer parte da sua vida na adolescência. Entre 2003
              e 2006, cursou Artes Plásticas na Arte São Paulo - Escola de Arte
              e Profissões e, posteriormente, fez aulas em ateliês.
              A pintura caminhou paralelamente às atividades corporativas na
              área de Gestão de Pessoas até 2016. Em 2017, passou a ser
              prioridade.
              Pérsia Meneghetti, nasceu em Bauru/SP, reside e trabalha na cidade
              de São Paulo desde meados de 1987.
            </p>
          </motion.div>
        </div>
        <Carrossel></Carrossel>
        <Obras></Obras>
        <Link href="https://api.whatsapp.com/send?phone=5561995682323&text=Ol%C3%A1,%20vim%20do%20site%0AGostaria%20de%20marcar%20um%20atendimento" className='fixed bottom-10 cursor-pointer right-10 w-10 h-10 text-white bg-green-500 rounded-full'>
          <BsWhatsapp className='w-10 h-10 fixed bottom-30 right-10' />
        </Link>
      </div>
    </>
  );
}
