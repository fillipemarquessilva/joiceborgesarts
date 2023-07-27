'use client'

import { motion } from 'framer-motion';

export default function Section() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 h-screen via-blue-200 to-yellow-700">
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
            transition={{ duration: 1, delay: 0.3 }}
            className="p-4"
          >
            <h1 className="text-4xl text-blue-700 font-bold px-4 py-4">Joice Borges Arts</h1>
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
      </div>
    </>
  );
}
