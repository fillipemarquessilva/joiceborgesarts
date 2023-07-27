'use client'

import { motion } from 'framer-motion';
import Obras from './Obras'
import { BsWhatsapp } from 'react-icons/bs';

export default function Section() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-100  via-white to-orange-300 h-full">
        {/* Grade */}
        <div className="grid md:grid-cols-2 md:flex md:justify-center md:items-center text-center gap-4">
          {/* Imagem */}
          <img
            src="/perfil.jpg"
            className="w-96 h-96 p-4 mt-8 mx-auto md:mx-0"
            alt="Perfil"
          />

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="p-4"
         >
            <h1 className="text-4xl text-blue-700 font-bold px-4 py-4">Joice Borges Art</h1>
            <p className="text-lg font-semibold">
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
        <Obras></Obras>
        <BsWhatsapp href="https://api.whatsapp.com/send?phone=5561981350444&text=Ol%C3%A1,%20vim%20do%20site%0AGostaria%20de%20marcar%20um%20atendimento" className='fixed bottom-10 cursor-pointer  right-10 w-10 h-10 text-white bg-green-500 rounded-full'>
          <a className="mb-10 inline-block shadow-md rounded-md border border-transparent bg-amber-400 px-8 py-3 text-center font-medium text-white hover:bg-amber-500" about="blank"  href="https://api.whatsapp.com/send?phone=5561981350444&text=Ol%C3%A1,%20vim%20do%20site%0AGostaria%20de%20marcar%20um%20atendimento" >Quero minha armação agora</a>
        </BsWhatsapp>
      </div>
    </>
  );
}
