import React from 'react';

const Caracteristicas = () => {
    const beneficios = [
        'Pagos quincenales cómodos',
        'Bonificación por pago puntual',
        'Atención personalizada',
        'Sin importar tu historial crediticio',
        'Sin letras pequeñas ni trámites eternos',
        'Crédito aprobado en 24 horas',
    ];

    return (
        <section id="caracteristicas" className="relative py-12 sm:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
                    <div className="inline-block px-6 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: '#29b6d8' }}>
                        ¿Por qué elegirnos?
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-light uppercase tracking-tight leading-none"
                        style={{ color: '#152036' }}>
                        SIMPLES - RÁPIDOS <br />
                        <span className="text-4xl sm:text-6xl md:text-9xl font-black block mt-2">PARA TI</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light mt-4 sm:mt-6">
                        Simplificamos el acceso al dinero que necesitas. Sin letras pequeñas, sin trámites eternos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {beneficios.map((f) => (
                            <div key={f} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl transition-transform hover:scale-105"
                                style={{ background: '#93c01f' }}>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                                    style={{ borderColor: '#152036' }}>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#152036" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs sm:text-sm font-bold leading-tight" style={{ color: '#152036' }}>
                                    {f}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-5 relative mt-8 sm:mt-0">
                        <div className="absolute inset-0 translate-x-4 sm:translate-x-6 -translate-y-4 sm:-translate-y-6 bg-[#29b6d8] rounded-[2rem] sm:rounded-[3rem]"></div>
                        <div className="absolute inset-0 translate-x-4 sm:translate-x-6 translate-y-4 sm:translate-y-6 rounded-[2rem] sm:rounded-[3rem] -z-30"
                            style={{ background: '#152036' }}></div>
                        <div className="absolute inset-0 translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4 rounded-[2rem] sm:rounded-[3rem] -z-20"
                            style={{ background: '#152036' }}></div>
                        <div className="absolute top-3 sm:top-4 translate-x-3 sm:translate-x-4 w-full h-full rounded-[2rem] sm:rounded-[3rem] -z-10"
                            style={{ background: '#29b6d8' }}></div>

                        <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] text-center shadow-xl relative z-10"
                            style={{ background: '#93c01f' }}>
                            <div className="inline-block px-4 py-1 rounded-full border text-[10px] font-medium mb-4 sm:mb-6"
                                style={{ borderColor: '#152036', color: '#152036' }}>
                                Premio a tu puntualidad
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black uppercase leading-none mb-3 sm:mb-4 text-brand-navy">
                                AHORRAS CON <br /> TU PUNTUALIDAD
                            </h3>
                            <img src="LOGOB.png" alt="AHORRAS CON" className="w-48 sm:w-75 h-auto mx-auto" />
                            <p className="text-sm sm:text-base leading-snug font-medium mt-3 sm:mt-4"
                                style={{ color: '#152036' }}>
                                Premia cada pago a tiempo con bonificaciones reales. Tu disciplina financiera tiene recompensa directa.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 sm:mt-20 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8 sm:pt-10">
                    <p className="text-gray-500 text-sm italic max-w-md text-center md:text-left mb-6 md:mb-0">
                        Confía en nosotros para dar el siguiente paso a tus proyectos, emergencias y metas personales.
                    </p>
                    <div className="flex gap-2">
                        <div className="w-8 h-10 rounded-lg rotate-12" style={{ background: '#93c01f' }}></div>
                        <div className="w-8 h-10 rounded-lg -rotate-12" style={{ background: '#29b6d8' }}></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Caracteristicas;