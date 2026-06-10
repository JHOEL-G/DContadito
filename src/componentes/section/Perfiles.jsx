import React from 'react';
import { Box, Store, Briefcase, ShoppingCart } from 'lucide-react';

const Perfiles = () => {
    const perfiles = [
        {
            titulo1: "DISTRIBUIDOR",
            titulo2: "DE VALES",
            desc: "Financiamiento especializado para distribuidores con condiciones adaptadas a tu actividad.",
            icon: <Box size={80} strokeWidth={1.2} className="text-white" />
        },
        {
            titulo1: "MICRO",
            titulo2: "NEGOCIO",
            desc: "Impulsa tu negocio con capital rápido y accesible. Sin burocracia, solo resultados.",
            icon: <Store size={80} strokeWidth={1.2} className="text-white" />
        },
        {
            titulo1: "NÓMINA",
            titulo2: "",
            desc: "Si tienes empleo formal, accede a crédito preferencial con pagos cómodos quincenales.",
            icon: <Briefcase size={80} strokeWidth={1.2} className="text-white" />
        },
        {
            titulo1: "COMERCIANTE",
            titulo2: "",
            desc: "Abastece tu inventario o amplía tu local con crédito disponible cuando lo necesitas.",
            icon: <ShoppingCart size={80} strokeWidth={1.2} className="text-white" />
        }
    ];

    return (
        <section className="relative py-16 sm:py-28 bg-white overflow-hidden">

            <div className="absolute top-50 left-0 w-full z-0">
                <div className="flex justify-between w-full mb-1">
                    <div className="w-5 h-6" style={{ background: '#93c01f' }} />
                    <div className="w-5 h-6" style={{ background: '#93c01f' }} />
                </div>
                <div className="flex w-full">
                    <div className="w-[28%] h-7" style={{ background: '#152036' }} />
                    <div className="flex-1" />
                    <div className="w-[28%] h-7" style={{ background: '#152036' }} />
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

                <div className="text-center mb-10 sm:mb-20">
                    <div className="inline-block px-6 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8"
                        style={{ background: '#93c01f' }}>
                        ¿A QUIÉN VA DIRIGIDO?
                    </div>

                    <h2 className="uppercase leading-none" style={{ color: '#152036' }}>
                        <span className="block text-3xl sm:text-5xl md:text-6xl font-light tracking-tight">
                            DISEÑADO PARA
                        </span>
                        <span className="block text-5xl sm:text-7xl md:text-9xl font-black tracking-tight">
                            TU PERFIL
                        </span>
                    </h2>
                </div>

                <div className="flex flex-col sm:hidden gap-8">
                    {perfiles.map((p, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-[2rem] flex items-center justify-center mb-4 shadow-lg"
                                 style={{ background: '#29b6d8' }}>
                                {React.cloneElement(p.icon, { size: 52 })}
                            </div>
                            <h3 className="text-xl font-black uppercase leading-tight mb-2"
                                style={{ color: '#152036' }}>
                                {p.titulo1}{p.titulo2 && <><br />{p.titulo2}</>}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="hidden sm:block">
                    <div className="relative flex items-start justify-center gap-0 mb-20">
                        <div className="flex flex-col items-center text-center w-[45%]">
                            <div className="w-48 h-48 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-lg"
                                style={{ background: '#29b6d8' }}>
                                {perfiles[0].icon}
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-3"
                                style={{ color: '#152036' }}>
                                DISTRIBUIDOR<br />DE VALES
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                                {perfiles[0].desc}
                            </p>
                        </div>

                        <div className="flex items-center justify-center w-[10%] pt-20">
                            <div className="w-6 h-6 rounded-full" style={{ background: '#93c01f' }} />
                        </div>

                        <div className="flex flex-col items-center text-center w-[45%]">
                            <div className="w-48 h-48 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-lg"
                                style={{ background: '#29b6d8' }}>
                                {perfiles[1].icon}
                            </div>
                            <h3 className="text-2xl uppercase leading-tight mb-3"
                                style={{ color: '#152036' }}>
                                <span className="font-black">MICRO</span><span className="font-light">NEGOCIO</span>
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                                {perfiles[1].desc}
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-start justify-center gap-0">
                        <div className="flex flex-col items-center text-center w-[45%]">
                            <div className="w-48 h-48 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-lg"
                                style={{ background: '#29b6d8' }}>
                                {perfiles[2].icon}
                            </div>
                            <h3 className="text-3xl font-black uppercase leading-tight mb-3"
                                style={{ color: '#152036' }}>
                                NÓMINA
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                                {perfiles[2].desc}
                            </p>
                        </div>

                        <div className="flex items-center justify-center w-[10%] pt-20">
                            <div className="w-6 h-6 rounded-full" style={{ background: '#93c01f' }} />
                        </div>

                        <div className="flex flex-col items-center text-center w-[45%]">
                            <div className="w-48 h-48 rounded-[2.5rem] flex items-center justify-center mb-6 shadow-lg"
                                style={{ background: '#29b6d8' }}>
                                {perfiles[3].icon}
                            </div>
                            <h3 className="text-3xl font-black uppercase leading-tight mb-3"
                                style={{ color: '#152036' }}>
                                COMERCIANTE
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                                {perfiles[3].desc}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Perfiles;