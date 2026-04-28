import React from 'react';

const NuestraEsencia = () => {
    return (
        <section id="nosotros" className="relative py-24 bg-white overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

                <div className="mb-5">
                    <span className="inline-block px-8 py-2 rounded-full text-white text-[11px] font-black uppercase tracking-[0.25em]"
                        style={{ background: '#93c01f' }}>
                        ¿Quiénes somos?
                    </span>
                </div>

                <div className="mb-20">
                    <h2 className="font-light uppercase tracking-tight leading-none"
                        style={{ color: '#152036', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Nuestra
                    </h2>
                    <span className="font-black block uppercase leading-none mt-[-8px]"
                        style={{ color: '#152036', fontSize: 'clamp(4rem, 10vw, 7rem)' }}>
                        ESENCIA
                    </span>
                    <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: '#93c01f' }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(21,32,54,0.15)]">

                    <div className="p-12 flex flex-col items-center justify-start min-h-[420px] relative"
                        style={{ background: '#152036' }}>
                        <div className="w-12 h-1 rounded-full mb-6" style={{ background: '#93c01f' }} />
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">MISIÓN</h3>
                        <p className="text-[11px] font-black italic uppercase tracking-[0.2em] mb-8"
                            style={{ color: '#93c01f' }}>
                            Lo que hacemos
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed max-w-[260px]">
                            Facilitar acceso a soluciones financieras inmediatas y accesibles a distintos perfiles económicos, ofreciendo créditos ágiles que fortalezcan proyectos personales.
                        </p>
                    </div>

                    <div className="p-12 flex flex-col items-center justify-start min-h-[420px] relative scale-[1.02] z-10 shadow-[0_0_60px_rgba(147,192,31,0.3)]"
                        style={{ background: '#93c01f' }}>
                        <div className="w-12 h-1 rounded-full mb-6 bg-white/40" />
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">VISIÓN</h3>
                        <p className="text-[11px] font-black italic uppercase tracking-[0.2em] mb-8"
                            style={{ color: '#152036' }}>
                            A dónde vamos
                        </p>
                        <p className="text-white text-sm leading-relaxed max-w-[260px]">
                            Ser la institución de crédito preferida y de mayor confianza, reconocida por nuestra rapidez, transparencia y compromiso con el desarrollo de nuestras comunidades.
                        </p>
                    </div>

                    <div className="p-12 flex flex-col items-center justify-start min-h-[420px]"
                        style={{ background: '#152036' }}>
                        <div className="w-12 h-1 rounded-full mb-6" style={{ background: '#93c01f' }} />
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">VALORES</h3>
                        <p className="text-[11px] font-black italic uppercase tracking-[0.2em] mb-10"
                            style={{ color: '#93c01f' }}>
                            Lo que nos define
                        </p>
                        <ul className="space-y-5 w-full max-w-[220px]">
                            {['Compromiso', 'Integridad', 'Innovación'].map((v) => (
                                <li key={v} className="flex items-center gap-3 text-white text-base font-semibold tracking-wide">
                                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#93c01f' }} />
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NuestraEsencia;