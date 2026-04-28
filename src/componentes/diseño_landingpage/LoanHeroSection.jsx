import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanHeroUltra = () => {
    const [amount, setAmount] = useState(70000);
    const maxLoan = 70000;
    const estimatedPayment = (amount * 0.1135).toFixed(2);
    const navigate = useNavigate();

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0,
    });

    const handleSolicitar = () => {
        navigate('/solicitar-credito');
    };

    return (
        <section className="bg-white p-6 md:p-10 mt-16 relative max-w-[97%] mx-auto">

            <div className="relative">

                <div className="relative min-h-[950px] flex items-center overflow-hidden font-sans rounded-bl-[20rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
                    style={{ background: 'linear-gradient(135deg, #93c01f 0%, #93c01f 40%, #2a3d5a 70%, #152036 100%)' }}>

                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
                            alt=""
                            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
                        />
                    </div>

                    <div className="relative z-20 w-full flex flex-col lg:flex-row items-center justify-center px-10 py-12 gap-8">

                        <div className="w-full lg:w-1/2 flex flex-col gap-5 items-center text-center">
                            <div className="inline-flex w-fit items-center px-8 py-2.5 text-white font-black text-sm uppercase tracking-widest"
                                style={{
                                    background: '#29b6d8',
                                    borderRadius: '999px',
                                    boxShadow: '0 4px 15px rgba(41,182,216,0.4)'
                                }}>
                                STATUS: UNLIMITED
                            </div>

                            <h1 className="uppercase leading-[0.9]"
                                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em', fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
                                <span className="block text-white font-light">HÁZLO</span>
                                <span className="block font-black" style={{ color: '#152036' }}>REALIDAD</span>
                                <span className="block text-white font-light">AHORA</span>
                            </h1>

                            <div className="w-28 h-[3px] bg-white rounded-full mt-2" />
                        </div>

                        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-end lg:pr-30 gap-4">

                            <div className="bg-white rounded-[2rem] p-10 w-full max-w-[480px]"
                                style={{ border: '4px solid #152036', boxShadow: '0 25px 60px rgba(21,32,54,0.4), 0 0 0 1px rgba(21,32,54,0.1)' }}>

                                <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-1">
                                    SELECCIONA TU PODER
                                </p>

                                <h2 className="text-center font-black mb-4"
                                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'Montserrat, sans-serif', color: '#152036' }}>
                                    {formatter.format(amount)}
                                </h2>

                                <div className="relative mb-2 px-1">
                                    <input
                                        type="range"
                                        min="1000"
                                        max={maxLoan}
                                        step="1000"
                                        value={amount}
                                        onChange={(e) => setAmount(parseInt(e.target.value))}
                                        className="w-full cursor-pointer"
                                        style={{
                                            WebkitAppearance: 'none',
                                            height: '4px',
                                            borderRadius: '2px',
                                            background: `linear-gradient(to right, #152036 ${(amount / maxLoan) * 100}%, #ddd ${(amount / maxLoan) * 100}%)`,
                                            outline: 'none',
                                        }}
                                    />
                                    <style>{`
                                        input[type=range]::-webkit-slider-thumb {
                                            -webkit-appearance: none;
                                            width: 18px;
                                            height: 18px;
                                            border-radius: 50%;
                                            background: #152036;
                                            cursor: pointer;
                                        }
                                    `}</style>
                                    <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase mt-1">
                                        <span>BASE</span>
                                        <span>ELITE LEVEL</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 my-5">
                                    <div className="rounded-xl p-4 text-center" style={{ background: '#152036' }}>
                                        <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">PAGO QUINCENAL</p>
                                        <p className="text-xl font-black text-white">${estimatedPayment}</p>
                                    </div>
                                    <div className="rounded-xl p-4 text-center" style={{ background: '#152036' }}>
                                        <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">TASA ÉLITE</p>
                                        <p className="text-xl font-black" style={{ color: '#93c01f' }}>11.35%</p>
                                    </div>
                                </div>

                                <button
                                    onClick={handleSolicitar}
                                    className="w-full py-4 rounded-xl font-black text-white text-base uppercase tracking-wider transition-all duration-300 hover:opacity-90"
                                    style={{ background: '#152036' }}>
                                    ¡ INYECTAR<br />CAPITAL AHORA !
                                </button>

                                <p className="text-center text-[9px] font-black uppercase tracking-widest mt-3"
                                    style={{ color: '#93c01f' }}>
                                    APROBACIÓN EN 120 SEGUNDOS - SIN AVAL
                                </p>
                            </div>

                            <p className="text-white font-bold text-sm text-center max-w-[480px]">
                                No es un préstamo, es el impulso para tu siguiente gran movimiento.
                            </p>
                        </div>
                    </div>
                </div>

                <svg
                    className="absolute bottom-0 left-0 z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 160"
                    style={{ width: '160px', height: '160px', display: 'block' }}
                >
                    <path
                        d="M0,0 L0,160 L160,160 Q30,100 0,0 Z"
                        fill="#93c01f"
                    />
                </svg>
            </div>
        </section>
    );
};

export default LoanHeroUltra;