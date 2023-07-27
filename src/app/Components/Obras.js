import React from 'react';
import { motion } from 'framer-motion';

export default function Obras() {
    const obras = [
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura1.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura2.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura3.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura4.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura5.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura6.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura7.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura8.jpg',
        },
        {
            titulo: 'Nome da arte',
            imagemUrl: 'pintura9.jpg',
        },
    ];

    return (
        <>
        <h1 className="text-2xl text-center font-bold">Obras expressionistas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
            {obras.map((obra, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 0.8 }}
                    >
                        <img
                            src={obra.imagemUrl}
                            alt={obra.titulo}
                            className="w-full h-60 object-cover"
                        />
                        <p className="font-bold mt-2 text-white">{obra.titulo}</p>
                        <p className="font-bold mt-2 text-white">Descrição</p>
                    </motion.div>
            ))}
        </div>
        </>
    );
}
