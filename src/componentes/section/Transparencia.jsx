import React from 'react';

const Transparencia = () => {
    const normativas = [
        'Contratar créditos por arriba de tu capacidad de pago puede afectar tu historial crediticio.',
        'El avalista u obligado solidario responderá como obligado principal por el total del pago.',
        'Cuide su capacidad de pago: su deuda no debe exceder del 35% de sus ingresos periódicos.',
        'Incumplir tus obligaciones te puede generar intereses moratorios elevados.',
        'Sin seguro de vida, el adeudo pendiente quedará a cargo del obligado solidario o avalista.',
        'Empresa por confirmar.',
    ];

    return (
        <section className="relative py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
                    <div className="inline-block px-6 py-1.5 rounded-full bg-[#93c01f] text-[#1d2d5b] text-[10px] font-bold uppercase tracking-widest">
                        CUMPLIMIENTO Y NORMATIVA
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-[#152036] uppercase tracking-tight leading-none">
                        TRANSPARENCIA <br />
                        <span className="text-4xl sm:text-6xl md:text-9xl font-black block mt-2 text-[#284a80]">TOTAL</span>
                    </h2>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-12">
                    {normativas.map((texto, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 sm:gap-6 bg-[#93c01f] rounded-xl p-3 sm:p-4 md:px-8 transition-transform hover:scale-[1.01]"
                        >
                            <span className="text-xl sm:text-3xl md:text-4xl font-black italic text-[#1d2d5b] flex-shrink-0">
                                0{i + 1}
                            </span>
                            <p className="text-xs sm:text-sm md:text-base font-medium text-[#1d2d5b] leading-tight">
                                {texto}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-[#152036] rounded-[1.5rem] sm:rounded-[2.5rem] p-7 sm:p-10 text-center text-white flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                        <h4 className="text-lg sm:text-xl font-black uppercase tracking-tighter">CONDUSEF</h4>
                        <p className="text-sm font-light leading-relaxed max-w-xs">
                            Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros.
                        </p>
                        <div className="pt-2 space-y-1">
                            <a
                                href="https://www.condusef.gob.mx"
                                target="_blank"
                                rel="noreferrer"
                                className="block text-sm font-bold hover:text-[#3fb4e9] transition-colors"
                            >
                                WWW.CONDUSEF.GOB.MX
                            </a>
                            <span className="block text-sm font-light opacity-80">
                                TEL: 55 5340 0999
                            </span>
                        </div>
                    </div>

                    <div className="bg-[#152036] rounded-[1.5rem] sm:rounded-[2.5rem] p-7 sm:p-10 text-center text-white flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                        <h4 className="text-lg sm:text-xl font-black uppercase tracking-tighter">AVISO COBRANZA</h4>
                        <p className="text-sm font-light leading-relaxed">
                            Dcontadito informa que <span className="font-bold">NO CUENTA CON DESPACHOS DE COBRANZA</span> externos. No tenemos despachos inscritos en REDECO de CONDUSEF.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Transparencia;