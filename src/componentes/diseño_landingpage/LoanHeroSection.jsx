import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanHeroUltra = () => {
    const [amount, setAmount] = useState(25000);
    const maxLoan = 70000;
    const estimatedPayment = (amount * 0.1135).toFixed(2);
    const navigate = useNavigate();

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency', currency: 'MXN', minimumFractionDigits: 0,
    });

    const handleSolicitar = () => {
        navigate('/solicitar-credito');
    };

    return (
        <section className="bg-white text-gray-900 min-h-[90vh] relative flex items-center justify-center overflow-hidden font-sans py-20">
            <div className="max-w-[1500px] mx-auto w-full px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-100 border-l-2 border-[#B4D62E] text-gray-600 text-xs font-black uppercase tracking-[0.3em]">
                            Status: Unlimited
                        </div>

                        <h1 className="text-7xl md:text-8xl xl:text-[110px] font-black leading-[0.8] tracking-tighter italic uppercase text-gray-900">
                            Hazlo <br />
                            <span className="text-[#B4D62E] drop-shadow-[0_0_20px_rgba(180,214,46,0.3)]">Realidad</span> <br />
                            <span className="text-outline">Ahora.</span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-sm leading-tight border-l border-gray-200 pl-6">
                            No es un préstamo, es el impulso para tu siguiente gran movimiento.
                        </p>

                        <div className="flex gap-4">
                            <div className="flex -space-x-4">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/100?img=${index + 15}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-gray-900">+10k Usuarios</p>
                                <p className="text-gray-400 text-xs font-bold">Confiando en Dcontadito</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px]">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-[#D4FF3F]/20 to-purple-100 blur-3xl opacity-60"></div>

                            <div className="relative bg-[#0A0A0A] border border-gray-800 rounded-[4rem] p-10 lg:p-14 shadow-2xl overflow-hidden group">
                                <div className="text-center mb-12">
                                    <p className="text-[#D4FF3F] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Selecciona tu poder</p>
                                    <div className="flex items-center justify-center gap-6">
                                        <button
                                            onClick={() => setAmount(Math.max(1000, amount - 5000))}
                                            className="group relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all hover:border-[#D4FF3F]"
                                        >
                                            <div className="absolute inset-0 bg-[#D4FF3F] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                            <span className="relative z-10 text-2xl font-light text-white group-hover:text-black transition-colors">−</span>
                                        </button>

                                        <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                                            {formatter.format(amount)}
                                        </h3>

                                        <button
                                            onClick={() => setAmount(Math.min(maxLoan, amount + 5000))}
                                            className="group relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all hover:border-[#D4FF3F]"
                                        >
                                            <div className="absolute inset-0 bg-[#D4FF3F] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                            <span className="relative z-10 text-2xl font-light text-white group-hover:text-black transition-colors">+</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="relative mb-16 px-2">
                                    <input
                                        type="range"
                                        min="1000"
                                        max={maxLoan}
                                        step="1000"
                                        value={amount}
                                        onChange={(e) => setAmount(parseInt(e.target.value))}
                                        className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#D4FF3F]"
                                    />
                                    <div className="absolute top-6 left-0 w-full flex justify-between text-[9px] font-black text-gray-500 tracking-widest uppercase">
                                        <span>Base</span>
                                        <span>Elite Level</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="bg-white/[0.05] border border-white/5 rounded-3xl p-6">
                                        <p className="text-[9px] uppercase font-black text-gray-500 mb-2 text-center">Pago Quincenal</p>
                                        <p className="text-2xl font-black text-white tracking-tighter text-center">${estimatedPayment}</p>
                                    </div>
                                    <div className="bg-white/[0.05] border border-white/5 rounded-3xl p-6">
                                        <p className="text-[9px] uppercase font-black text-gray-500 mb-2 text-center">Tasa Elite</p>
                                        <p className="text-2xl font-black text-[#D4FF3F] tracking-tighter text-center">11.35%</p>
                                    </div>
                                </div>

                                <button className="group relative w-full h-20 bg-[#D4FF3F] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(212,255,63,0.3)] hover:shadow-[#D4FF3F]/50 transition-all duration-500"
                                    onClick={handleSolicitar}
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000"></div>
                                    <span className="relative z-10 text-black font-black text-xl uppercase italic tracking-tighter">
                                        ¡Inyectar Capital Ahora!
                                    </span>
                                </button>

                                <p className="text-center text-[9px] text-gray-500 mt-6 font-bold uppercase tracking-widest">
                                    Aprobación en 120 segundos • Sin aval
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
    .text-outline {
        color: transparent;
        -webkit-text-stroke: 1.5px #111;
        opacity: 0.8;
    }
    
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    .group:hover .group-hover\\:animate-shimmer {
        animation: shimmer 1.5s infinite;
    }

    input[type=range]::-webkit-slider-thumb {
        appearance: none;
        width: 35px;
        height: 35px;
        background: #D4FF3F;
        border: 8px solid #0A0A0A;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        transform: rotate(45deg);
    }
  `}
            </style>
        </section>
    );
};

export default LoanHeroUltra;