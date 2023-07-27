import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carrossel() {
  const pinturas = [
    {
      titulo: 'Obra 1',
      imagemUrl: 'pintura1.jpg',
    },
    {
      titulo: 'Obra 2',
      imagemUrl: 'pintura2.jpg',
    },
    {
      titulo: 'Obra 3',
      imagemUrl: 'pintura3.jpg',
    },
    // Adicione mais pinturas conforme necessário
  ];

  return (
    <div className="mt-8">
      {/* Renderizar o carrossel apenas na versão mobile */}
      <div className="md:hidden">
        <Carousel
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          {pinturas.map((pintura, index) => (
            <div key={index} className="text-center">
              <img
                src={pintura.imagemUrl}
                className="w-full h-60 mx-auto my-auto mb-4"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}





