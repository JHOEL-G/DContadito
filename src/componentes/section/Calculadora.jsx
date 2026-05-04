import React from 'react';

const Calculadora = ({ monto, setMonto, quincenas, setQuincenas, pagoQuincenal, totalPagar, fmt, handleSolicitar }) => {

    const getPercent = (value, min, max) => ((value - min) / (max - min)) * 100;

    return (
        <section id="calculadora" className="relative py-12 sm:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
                    <div className="inline-block px-8 py-1.5 rounded-full bg-[#8cc63f] text-[#1d2d5b] text-[10px] font-bold uppercase tracking-widest">
                        SIMULA TU CRÉDITO
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-[#1d2d5b] uppercase tracking-tight leading-none">
                        ¿CUÁNTO <br />
                        <span className="text-4xl sm:text-6xl md:text-9xl font-black block mt-2">NECESITAS?</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light mt-4 sm:mt-6">
                        Calcula tu pago quincenal de forma transparente y sin sorpresas ocultas.
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center gap-2">

                    <div className="w-full lg:w-[80%] bg-[#93c01f] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-14 shadow-xl relative z-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 mb-8 sm:mb-12">

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex justify-between items-end text-[#1d2d5b]">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-80">Monto del crédito</label>
                                    <span className="text-3xl sm:text-5xl font-black tracking-tighter">{fmt(monto)}</span>
                                </div>
                                <div className="relative h-6 flex items-center">
                                    <style>{`
    input[type=range] { -webkit-appearance: none; appearance: none; }
    input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 0; height: 0; background: transparent; }
    input[type=range]::-moz-range-thumb { width: 0; height: 0; background: transparent; border: none; }
    input[type=range]::-ms-thumb { width: 0; height: 0; background: transparent; }
`}</style>
                                    <div className="absolute w-full h-[3px] bg-[#1d2d5b] rounded-full opacity-30"></div>
                                    <input
                                        type="range"
                                        min="6000"
                                        max="20000"
                                        step="1000"
                                        value={monto}
                                        onChange={(e) => setMonto(Number(e.target.value))}
                                        className="absolute w-full bg-transparent appearance-none cursor-pointer z-20
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-0
        [&::-webkit-slider-thumb]:h-0
        [&::-moz-range-thumb]:w-0
        [&::-moz-range-thumb]:h-0
        [&::-moz-range-thumb]:border-0
        [&::-moz-range-thumb]:bg-transparent"
                                    />
                                    <div
                                        className="absolute w-5 h-5 bg-[#1d2d5b] rotate-45 pointer-events-none transition-all duration-75 ease-out shadow-lg border-2 border-[#8cc63f]/20"
                                        style={{
                                            left: `calc(${getPercent(monto, 6000, 20000)}% - 10px)`,
                                            top: '50%',
                                            marginTop: '-10px'
                                        }}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-[#1d2d5b] uppercase opacity-70">
                                    <span>$6,000</span>
                                    <span>$20,000</span>
                                </div>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex justify-between items-end text-[#1d2d5b]">
                                    <label className="text-[10px] font-black uppercase tracking-widest opacity-80">Plazo (Quincenas)</label>
                                    <span className="text-3xl sm:text-5xl font-black tracking-tighter">
                                        {quincenas}<span className="text-xl sm:text-2xl ml-1">Q</span>
                                    </span>
                                </div>
                                <div className="relative h-6 flex items-center">
                                    <div className="absolute w-full h-[3px] bg-[#1d2d5b] rounded-full opacity-30"></div>
                                    <input
                                        type="range"
                                        min="6"
                                        max="12"
                                        step="1"
                                        value={quincenas}
                                        onChange={(e) => setQuincenas(Number(e.target.value))}
                                        className="absolute w-full bg-transparent appearance-none cursor-pointer z-20
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-0
        [&::-webkit-slider-thumb]:h-0
        [&::-moz-range-thumb]:w-0
        [&::-moz-range-thumb]:h-0
        [&::-moz-range-thumb]:border-0
        [&::-moz-range-thumb]:bg-transparent"
                                    />
                                    <div
                                        className="absolute w-5 h-5 bg-[#1d2d5b] rotate-45 pointer-events-none shadow-lg"
                                        style={{ left: `calc(${getPercent(quincenas, 6, 12)}% - 10px)`, top: '50%', marginTop: '-10px' }}
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-[#1d2d5b] uppercase opacity-70">
                                    <span>6 Quincenas</span>
                                    <span>12 Quincenas</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-12">
                            {[
                                { val: fmt(pagoQuincenal), label: 'Pago quincenal', color: 'text-[#3fb4e9]' },
                                { val: fmt(totalPagar), label: 'Total a pagar', color: 'text-[#3fb4e9]' },
                            ].map((r) => (
                                <div key={r.label} className="bg-white rounded-[1.2rem] sm:rounded-[1.5rem] p-5 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <span className={`block text-2xl sm:text-4xl font-black tracking-tighter ${r.color} mb-1`}>
                                        {r.val}
                                    </span>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-[#1d2d5b] opacity-60">
                                        {r.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 pt-4 border-t border-[#1d2d5b]/10">
                            <p className="text-[11px] sm:text-[12px] text-[#1d2d5b] leading-tight max-w-sm font-medium text-center md:text-left">
                                Tasa mensual mínima 11.35%. Sujeto a aprobación de crédito. El CAT máximo 216.00% sin IVA.
                                <span className="block font-bold mt-2 italic">Cálculo meramente informativo, los valores finales pueden variar.</span>
                            </p>
                            <button
                                onClick={handleSolicitar}
                                className="w-full sm:w-auto bg-[#3fb4e9] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-[#1d2d5b] hover:-translate-y-1 transition-all shadow-xl active:scale-95"
                            >
                                Solicitar este crédito
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:w-1/3 relative ml-6 mt-10">
                        <img
                            src="/DISEÑO-DE-SITIO-WEB-2PROP.03.jpg.jpeg"
                            alt="Cliente"
                            className="w-full h-auto object-contain z-20 relative"
                        />
                        <div className="absolute bottom-10 right-0 flex gap-2 translate-y-8">
                            <div className="w-8 h-8 bg-[#8cc63f] rounded-md rotate-12 shadow-md"></div>
                            <div className="w-8 h-8 bg-[#3fb4e9] rounded-md -rotate-12 shadow-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculadora;