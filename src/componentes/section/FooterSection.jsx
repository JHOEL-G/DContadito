import React from 'react';

const FooterSection = () => {
    return (
        <>
            <div className="px-3 sm:px-6 pb-12 sm:pb-20 max-w-7xl mx-auto py-12 sm:py-20">
                <div className="relative flex justify-center">

                    <div className="absolute inset-0 -translate-x-3 sm:-translate-x-6 -translate-y-3 sm:-translate-y-6 bg-[#152036] rounded-[2rem] sm:rounded-[3rem]"></div>

                    <div className="relative bg-[#93c01f] rounded-[2rem] sm:rounded-[3rem] py-10 sm:py-16 px-5 sm:px-8 text-center w-full">

                        <h2 className="text-white text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-4 sm:mb-6">
                            ¿Listo para el <br className="md:hidden" /> siguiente paso?
                        </h2>

                        <p className="text-[#1d2d5b] text-base sm:text-lg md:text-xl font-medium mb-7 sm:mb-10 opacity-90">
                            ¡No te la compliques! Únete a quienes ya confían en D'C.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
                            <a
                                href="#calculadora"
                                className="bg-[#152036] text-white px-8 sm:px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#152036] transition-colors shadow-lg"
                            >
                                Solicitar mi crédito
                            </a>
                            <a
                                href="#sucursales"
                                className="bg-[#152036] text-white px-8 sm:px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#152036] transition-colors shadow-lg"
                            >
                                Ver sucursales
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-white pt-6 sm:pt-10">
                <div className="max-w-full mx-auto px-4 sm:px-6 flex flex-col items-center">
                    <div className="mb-6 sm:mb-10">
                        <img
                            src="LOGOB.png"
                            alt="DContadito Logo"
                            className="h-24 sm:h-40 w-auto"
                        />
                    </div>

                    <div className="w-full bg-[#152036] py-6 sm:py-8 px-4 sm:px-6 rounded-t-[2rem] flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                        <div className="flex gap-5 sm:gap-8">
                            <a href="#" className="text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#93c01f] transition-colors">
                                Privacidad
                            </a>
                            <a href="#" className="text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#93c01f] transition-colors">
                                Términos
                            </a>
                            <a href="https://www.condusef.gob.mx" target="_blank" rel="noreferrer" className="text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#8cc63f] transition-colors">
                                CONDUSEF
                            </a>
                        </div>

                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.15em] text-center md:text-right">
                            2026 DCONTADITO. TODOS LOS DERECHOS RESERVADOS.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterSection;