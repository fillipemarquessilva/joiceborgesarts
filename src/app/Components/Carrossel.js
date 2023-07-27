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
            <img src={pintura.imagemUrl} alt={pintura.titulo} className="mx-auto w-3/4" />
            <p className="mt-4 font-bold">{pintura.titulo}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
