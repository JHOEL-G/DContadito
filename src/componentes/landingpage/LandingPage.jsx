import React, { useState, useEffect } from 'react';
import NavbarPro from '../diseño_landingpage/navbar/Navbar';
import LoanHeroUltra from '../diseño_landingpage/LoanHeroSection';
import './page_estilos/stilos.css';
import { sucursales, perfiles } from '../diseño_landingpage/navbar/item/LandingItem';
import { useNavigate } from 'react-router-dom';
import NuestraEsencia from '../section/NuestraEsencia';
import Perfiles from '../section/Perfiles';
import Caracteristicas from '../section/Caracteristicas';
import Calculadora from '../section/Calculadora';
import Sucursales from '../section/Sucursales';
import Transparencia from '../section/Transparencia';
import FooterSection from '../section/FooterSection';

const LandingPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [monto, setMonto] = useState(10000);
    const [quincenas, setQuincenas] = useState(9);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const tasaMensual = 0.1135;
    const tasaQuincenal = tasaMensual / 2;
    const pagoQuincenal = monto * (tasaQuincenal * Math.pow(1 + tasaQuincenal, quincenas)) / (Math.pow(1 + tasaQuincenal, quincenas) - 1);
    const totalPagar = pagoQuincenal * quincenas;
    const intereses = totalPagar - monto;
    const fmt = (n) => n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 });

    const handleSolicitar = () => {
        navigate('/solicitar-credito');
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-800"
            style={{ paddingTop: '0' }}>

            <NavbarPro />

            <LoanHeroUltra />

            <div className="flex justify-center w-full mb-4">
                <div className="w-[98%] max-w-[95%] h-[6px] bg-[#152036]"></div>
            </div>

            <div className="bg-[#152036] rounded-br-[2rem] rounded-b-[2rem] px-4 sm:px-8 py-4 sm:py-6 grid grid-cols-2 sm:flex sm:justify-around items-center max-w-[95%] mx-auto border border-[#152036]/50 mb-10 gap-4 sm:gap-0">
                {[
                    { num: '24H', label: 'CRÉDITO AUTORIZADO' },
                    { num: '$6K-$20K', label: 'RANGO DE CRÉDITO' },
                    { num: '8+', label: 'ESTADO DEL PAÍS' },
                    { num: '100%', label: 'ATENCIÓN PERSONALIZADA' },
                ].map((s, i) => (
                    <div key={s.label} className="flex items-center">
                        <div className="text-center w-full">
                            <div className="text-2xl sm:text-4xl font-black uppercase tracking-wide leading-none"
                                style={{ color: '#93c01f' }}>
                                {s.num}
                            </div>
                            <div className="text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-widest mt-1.5"
                                style={{ color: '#93c01f99' }}>
                                {s.label}
                            </div>
                        </div>
                        {i < 3 && (
                            <div className="hidden sm:block w-px h-10 ml-8" style={{ background: '#93c01f30' }} />
                        )}
                    </div>
                ))}
            </div>

            <div className="divider"></div>

            <NuestraEsencia />

            <div className="divider"></div>

            <Perfiles />

            <div className="divider"></div>

            <Caracteristicas />

            <div className="divider"></div>

            <Calculadora
                monto={monto}
                setMonto={setMonto}
                quincenas={quincenas}
                setQuincenas={setQuincenas}
                pagoQuincenal={pagoQuincenal}
                totalPagar={totalPagar}
                fmt={fmt}
                handleSolicitar={handleSolicitar}
            />

            <div className="divider"></div>

            <Sucursales />

            <div className="divider"></div>

            <Transparencia />

            <div className="divider"></div>

            <FooterSection />

        </div>
    );
};

export default LandingPage;