import React from 'react';
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <h2 className="py-4">Conheça nossas redes sociais</h2>
      <div className="flex justify-center space-x-4">
        <a
          href="https://api.whatsapp.com/send?phone=5561995682323&text=Ol%C3%A1,%20vim%20do%20site%0AGostaria%20de%20marcar%20um%20atendimento"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500 transition-all"
        >
          <BsWhatsapp className="w-8 h-8"></BsWhatsapp>
        </a>
        <a
          href="https://www.instagram.com/joice.borges.art/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-all"
        >
          <BsInstagram className="w-8 h-8"></BsInstagram>
        </a>
        <a
          href="mailto:SEU_EMAIL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-all"
        >
          <AiOutlineMail className="w-9 h-9"></AiOutlineMail>
        </a>
      </div>
      <p className="mt-4">Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
