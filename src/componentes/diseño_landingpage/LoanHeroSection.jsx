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
        <section className="bg-white p-2 sm:p-6 md:p-10 mt-14 sm:mt-16 relative max-w-[100%] sm:max-w-[97%] mx-auto overflow-hidden">

            <div className="relative">

                <div className="relative min-h-[auto] sm:min-h-[950px] flex items-center overflow-hidden font-sans rounded-bl-[4rem] sm:rounded-bl-[20rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
                    style={{ background: 'linear-gradient(135deg, #93c01f 0%, #93c01f 40%, #2a3d5a 70%, #152036 100%)' }}>

                    <div className="absolute inset-0 z-0">
                        <img
                            src="DISEÑO-DE-SITIO-WEB-2PROP.01.jpg.jpeg"
                            alt=""
                            className="w-full h-full object-cover object-top opacity-60 mix-blend-luminosity"
                        />
                    </div>

                    <div className="relative z-20 w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-10 py-8 sm:py-12 gap-6 sm:gap-8 overflow-x-hidden">

                        <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-5 items-center text-center">
                            <div className="inline-flex w-fit items-center px-6 sm:px-8 py-2 sm:py-2.5 text-white font-black text-xs sm:text-sm uppercase tracking-widest"
                                style={{
                                    background: '#29b6d8',
                                    borderRadius: '999px',
                                    boxShadow: '0 4px 15px rgba(41,182,216,0.4)'
                                }}>
                                STATUS: UNLIMITED
                            </div>

                            <h1 className="uppercase leading-[0.9] w-full"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    letterSpacing: '-0.02em',
                                    fontSize: 'clamp(2.5rem, 12vw, 7rem)'
                                }}>
                                <span className="block text-white font-light">HÁZLO</span>
                                <span className="block font-black" style={{ color: '#152036' }}>REALIDAD</span>
                                <span className="block text-white font-light">AHORA</span>
                            </h1>

                            <div className="w-20 sm:w-28 h-[3px] bg-white rounded-full mt-1 sm:mt-2" />
                        </div>

                        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-end lg:pr-30 gap-4">

                            <div className="bg-white w-full max-w-[320px] sm:max-w-[500px] p-6 sm:p-10 flex flex-col justify-between"
                                style={{
                                    border: '8px solid #152036',
                                    borderRadius: '2.5rem',
                                    minHeight: 'auto',
                                }}>

                                <p className="text-center text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-1">
                                    SELECCIONA TU PODER
                                </p>

                                <h2 className="text-center font-black mb-3 sm:mb-4"
                                    style={{
                                        fontSize: 'clamp(1.8rem, 8vw, 4rem)',
                                        fontFamily: 'Montserrat, sans-serif',
                                        color: '#152036'
                                    }}>
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

                                <div className="grid grid-cols-2 gap-2 sm:gap-3 my-4 sm:my-5">
                                    <div className="rounded-xl p-3 sm:p-4 text-center" style={{ background: '#152036' }}>
                                        <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">PAGO QUINCENAL</p>
                                        <p className="text-base sm:text-xl font-black text-white">${estimatedPayment}</p>
                                    </div>
                                    <div className="rounded-xl p-3 sm:p-4 text-center" style={{ background: '#152036' }}>
                                        <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">TASA ÉLITE</p>
                                        <p className="text-base sm:text-xl font-black" style={{ color: '#93c01f' }}>11.35%</p>
                                    </div>
                                </div>

                                <button
                                    onClick={handleSolicitar}
                                    className="w-full py-3 sm:py-4 rounded-xl font-black text-white text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:opacity-90"
                                    style={{ background: '#152036' }}>
                                    ¡ INYECTAR<br />CAPITAL AHORA !
                                </button>

                                <p className="text-center text-[9px] font-black uppercase tracking-widest mt-3"
                                    style={{ color: '#93c01f' }}>
                                    APROBACIÓN EN 120 SEGUNDOS - SIN AVAL
                                </p>
                            </div>

                            <p className="text-white font-bold text-xs sm:text-sm text-center max-w-[480px] px-2 sm:px-0">
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