export default function Perfil() {
    return (
        <>
            <div class="relative isolate overflow-hidden h-screen py-24 sm:py-32">
                <img src="/explosão.png" alt="" className="block absolute inset-0 -z-10 h-screen w-screen object-cover object-right md:object-center" />
                <div className='flex flex-col'>
                    <h1 className="text-7xl text-center font-extrabold md:text-white">Joice Borges</h1>
                    <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-orange-600 to-orange-300">Artista visual</h1>
                    <h2 className='italic font-semibold text-sm text-white'></h2>
                </div>
            </div>
        </>
    );
}
