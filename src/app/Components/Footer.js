import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="URL_DO_WHATSAPP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-all"
        >
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>
        <a
          href="URL_DO_INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-all"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="mailto:SEU_EMAIL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-all"
        >
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
      <p className="mt-4">Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
