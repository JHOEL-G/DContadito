import React, { useState, useEffect } from 'react';
import NavbarPro from '../diseño_landingpage/navbar/Navbar';
import LoanHeroUltra from '../diseño_landingpage/LoanHeroSection';
import './page_estilos/stilos.css';
import { sucursales, perfiles } from '../diseño_landingpage/navbar/item/LandingItem';
import { useNavigate } from 'react-router-dom';

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
            style={{ fontFamily: "'DM Sans', sans-serif" }}>

            <NavbarPro />
            <LoanHeroUltra />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
                <div className="stats-bar">
                    {[
                        { num: '24h', label: 'Crédito autorizado' },
                        { num: '$6K–$20K', label: 'Rango de crédito' },
                        { num: '8+', label: 'Estados del país' },
                        { num: '100%', label: 'Atención personalizada' },
                    ].map((s) => (
                        <div key={s.label} className="stat-cell">
                            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: '#111827', lineHeight: 1 }}>{s.num}</div>
                            <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginTop: '0.3rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="divider"></div>

            <section id="perfiles" className="relative py-24 bg-white overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 space-y-4">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50 border-l-2 border-blue-600 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">
                            ¿A quién va dirigido?
                        </div>

                        <h2 className="text-6xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic leading-[0.9]">
                            Diseñado para <br />
                            tu <span className="text-blue-600">Perfil.</span>
                        </h2>

                        <p className="text-gray-500 text-lg max-w-xl leading-tight border-l border-gray-100 pl-6 pt-2">
                            Ya sea que tengas un negocio, trabajes en nómina o seas distribuidor,
                            <span className="text-gray-900 font-bold ml-1">tenemos una solución hecha a tu medida.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {perfiles.map((p) => (
                            <div
                                key={p.titulo}
                                className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="relative w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                                    <span className="text-3xl relative z-10">{p.icon}</span>
                                    <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                <h3 className="text-4xl font-black tracking-tighter text-gray-900 uppercase italic mb-4 leading-none group-hover:text-blue-600 transition-colors">
                                    {p.titulo}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    {p.desc}
                                </p>

                                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-blue-600 transition-all duration-700 group-hover:w-full"></div>

                                <div className="absolute top-10 right-10 opacity-0 -translate-x-4 group-hover:opacity-10 group-hover:translate-x-0 transition-all duration-500">
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
                            Soluciones adaptables • Dcontadito Elite
                        </p>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section id="caracteristicas" className="relative py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-blue-50 border-l-2 border-blue-600 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">
                                    ¿Por qué elegirnos?
                                </div>

                                <h2 className="text-7xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic leading-[0.85]">
                                    Simples.<br />
                                    Rápidos.<br />
                                    <span className="text-blue-600">Para ti.</span>
                                </h2>

                                <p className="text-gray-500 text-lg max-w-sm leading-tight border-l border-gray-100 pl-6 pt-2">
                                    Simplificamos el acceso al dinero que necesitas. Sin letras pequeñas, sin trámites eternos.
                                </p>
                            </div>

                            <div className="relative p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-4.001 3.638-4.001 5.849h4v10h-9.995z" /></svg>
                                </div>
                                <p className="relative z-10 text-gray-700 font-bold italic leading-relaxed">
                                    "Confía en nosotros para dar el siguiente paso en tus proyectos, emergencias o metas personales."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="relative p-10 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-[3rem] mb-8 group transition-all hover:shadow-2xl hover:shadow-amber-200/20">
                                <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-amber-700 mb-4 px-3 py-1 bg-white rounded-full border border-amber-200">
                                    Premio a tu puntualidad
                                </span>
                                <h3 className="text-4xl font-black tracking-tighter text-gray-900 uppercase italic mb-4 leading-none">
                                    Ahorras con tu <br /> <span className="text-amber-600">puntualidad.</span>
                                </h3>
                                <p className="text-amber-900/60 text-sm leading-relaxed font-medium">
                                    Dcontadito premia cada pago a tiempo con bonificaciones reales. Tu disciplina financiera tiene recompensa directa.
                                </p>

                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl group-hover:bg-amber-300/30 transition-all"></div>
                            </div>

                            <div className="grid gap-3">
                                {[
                                    'Pagos quincenales cómodos',
                                    'Bonificación por pago puntual',
                                    'Crédito aprobado en 24 horas',
                                    'Atención personalizada',
                                    'Sin importar tu historial crediticio',
                                    'Sin letras pequeñas ni trámites eternos',
                                ].map((f) => (
                                    <div key={f} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-50 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 group">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-tight text-gray-700 group-hover:text-blue-600 transition-colors">
                                            {f}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section id="nosotros" className="relative py-24 bg-white overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16 space-y-4">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50 border-l-2 border-blue-600 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">
                            Quiénes somos
                        </div>

                        <h2 className="text-6xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic">
                            Nuestra <span className="text-blue-600">Esencia.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                            <div className="absolute top-0 left-10 w-12 h-1 bg-blue-600 rounded-b-full"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6 block">Misión</span>
                            <h3 className="text-3xl font-black tracking-tighter text-gray-900 uppercase italic mb-4">
                                Lo que <br /> hacemos
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                Facilitar acceso a soluciones financieras inmediatas y accesibles a distintos perfiles económicos, ofreciendo créditos ágiles que fortalezcan proyectos personales.
                            </p>
                        </div>

                        <div className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                            <div className="absolute top-0 left-10 w-12 h-1 bg-green-500 rounded-b-full"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-600 mb-6 block">Visión</span>
                            <h3 className="text-3xl font-black tracking-tighter text-gray-900 uppercase italic mb-4">
                                A dónde <br /> vamos
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                Ser la institución de crédito preferida y de mayor confianza, reconocida por nuestra rapidez, transparencia y compromiso con el desarrollo de nuestras comunidades.
                            </p>
                        </div>

                        <div className="group relative bg-gray-900 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)] hover:-translate-y-2">
                            <div className="absolute top-0 left-10 w-12 h-1 bg-yellow-500 rounded-b-full"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500 mb-6 block">Valores</span>
                            <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic mb-6">
                                Lo que nos <br /> define
                            </h3>

                            <div className="grid gap-3">
                                {['Compromiso', 'Integridad', 'Innovación'].map((v) => (
                                    <div key={v} className="flex items-center gap-3 group/item">
                                        <div className="w-6 h-[1px] bg-yellow-500 group-hover/item:w-10 transition-all duration-300"></div>
                                        <span className="text-sm font-bold text-gray-300 group-hover/item:text-white transition-colors">{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section id="calculadora" className="relative py-24 bg-white overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    <div className="text-center mb-12 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Simula tu crédito</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic">
                            ¿Cuánto <span className="text-blue-600">Necesitas?</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-tight">
                            Calcula tu pago quincenal de forma transparente y sin sorpresas ocultas.
                        </p>
                    </div>

                    <div className="w-full max-w-4xl bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Monto del crédito</label>
                                    <span className="text-4xl font-black tracking-tighter text-gray-900 italic">
                                        {fmt(monto)}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="6000"
                                    max="20000"
                                    step="1000"
                                    value={monto}
                                    onChange={(e) => setMonto(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                                    <span>$6,000</span>
                                    <span>$20,000</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Plazo (Quincenas)</label>
                                    <span className="text-4xl font-black tracking-tighter text-gray-900 italic">
                                        {quincenas} <span className="text-lg not-italic text-gray-400">Q</span>
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="6"
                                    max="12"
                                    step="1"
                                    value={quincenas}
                                    onChange={(e) => setQuincenas(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                                    <span>6 Meses</span>
                                    <span>12 Meses</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            {[
                                { val: fmt(pagoQuincenal), label: 'Pago quincenal', color: 'text-blue-600', bg: 'bg-blue-50/50' },
                                { val: fmt(totalPagar), label: 'Total a pagar', color: 'text-gray-900', bg: 'bg-gray-50' },
                                { val: fmt(intereses), label: 'Intereses totales', color: 'text-red-500', bg: 'bg-red-50/30' },
                            ].map((r) => (
                                <div key={r.label} className={`${r.bg} rounded-3xl p-6 border border-gray-100 transition-transform hover:scale-[1.02] duration-300`}>
                                    <span className={`block text-3xl font-black tracking-tighter ${r.color} italic mb-1`}>
                                        {r.val}
                                    </span>
                                    <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400">
                                        {r.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-[10px] text-gray-400 leading-relaxed max-w-xl text-center md:text-left font-medium">
                                Tasa mensual mínima 11.35%. Sujeto a aprobación de crédito. El CAT máximo 216.00% sin IVA.
                                <span className="block text-gray-300 font-normal">Cálculo meramente informativo, los valores finales pueden variar.</span>
                            </p>
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all hover:shadow-2xl active:scale-95"
                                onClick={handleSolicitar}
                            >
                                Solicitar este crédito
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section id="sucursales" className="relative py-24 bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Estamos cerca de ti</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic">
                            Presencia <span className="text-blue-600">Nacional.</span>
                        </h2>

                        <p className="text-gray-500 text-lg max-w-xl leading-tight border-l-2 border-gray-100 pl-6">
                            Expandimos nuestra red para inyectar capital donde más lo necesites.
                            <span className="text-gray-900 font-bold ml-1">8 estados y más de 25 puntos estratégicos.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sucursales.map((s) => (
                            <div
                                key={s.estado}
                                className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                                        {s.estado}
                                    </div>
                                    <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>

                                <div className="space-y-1">
                                    {s.ciudades.map((c, i) => (
                                        <div
                                            key={c}
                                            className="group/item flex items-center gap-2 py-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-gray-200 group-hover/item:bg-blue-500 group-hover/item:scale-150 transition-all"></span>
                                            {c}
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Dcontadito © 2026 • Red de Atención Prioritaria
                        </p>
                        <button className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 uppercase tracking-widest">
                            Ver mapa interactivo
                            <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section className="relative py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-12 space-y-4">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50 border-l-2 border-gray-400 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
                            Cumplimiento & Normativa
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase italic leading-none">
                                Transparencia <span className="text-gray-400">Total.</span>
                            </h2>

                            <div className="flex items-center gap-4 bg-amber-50 border border-amber-100 px-6 py-3 rounded-2xl">
                                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">CAT MÁXIMO</span>
                                <span className="text-3xl font-black text-amber-800 italic leading-none">216.00%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.03)]">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {[
                                'Contratar créditos por arriba de tu capacidad de pago puede afectar tu historial crediticio.',
                                'El avalista u obligado solidario responderá como obligado principal por el total del pago.',
                                'Cuide su capacidad de pago: su deuda no debe exceder del 35% de sus ingresos periódicos.',
                                'Incumplir tus obligaciones te puede generar intereses moratorios elevados.',
                                'Sin seguro de vida, el adeudo pendiente quedará a cargo del obligado solidario o avalista.',
                                '*Empresa por confirmar*',
                            ].map((t, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <span className="text-blue-600 font-black text-sm italic">0{i + 1}</span>
                                    <p className="text-xs font-medium text-gray-500 leading-relaxed group-hover:text-gray-900 transition-colors">
                                        {t}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            <div className="bg-blue-50/30 border border-blue-100 rounded-[2rem] p-8 transition-all hover:bg-blue-50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px]">C</div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">CONDUSEF</h4>
                                </div>
                                <p className="text-[11px] text-blue-900/70 leading-relaxed font-medium mb-4">
                                    Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-bold uppercase tracking-tight">
                                    <a href="https://www.condusef.gob.mx" target="_blank" className="text-blue-600 hover:underline">www.condusef.gob.mx</a>
                                    <span className="text-blue-800">Tel: 55 5340 0999</span>
                                </div>
                            </div>

                            <div className="bg-green-50/30 border border-green-100 rounded-[2rem] p-8 transition-all hover:bg-green-50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-[10px]">A</div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-green-700">Aviso Cobranza</h4>
                                </div>
                                <p className="text-[11px] text-green-900/70 leading-relaxed font-medium italic">
                                    Dcontadito informa que <strong className="text-green-800 uppercase">no cuenta con despachos de cobranza</strong> externos. No tenemos despachos inscritos en el REDECO de CONDUSEF.
                                </p>
                            </div>

                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-gray-300">
                            <span>Dcontadito S.A. de C.V. 2026</span>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-blue-500 transition-colors">Términos y condiciones</a>
                                <a href="#" className="hover:text-blue-500 transition-colors">Aviso de privacidad</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ padding: '0 1.5rem 5rem', maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{ background: '#111827', borderRadius: '2rem', padding: '5rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '360px', height: '360px', background: 'radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%)', pointerEvents: 'none' }}></div>
                    <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(180,214,46,0.18), transparent 70%)', pointerEvents: 'none' }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem,6vw,5rem)', color: 'white', marginBottom: '1rem', lineHeight: 0.95 }}>
                            ¿Listo para el siguiente paso?
                        </h2>
                        <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '420px', margin: '0 auto 2.5rem' }}>
                            ¡No te la compliques! Únete a quienes ya confían en Dcontadito.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="#calculadora" style={{ background: '#2563eb', color: 'white', padding: '0.9rem 2.2rem', borderRadius: '0.9rem', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
                                Solicitar mi crédito
                            </a>
                            <a href="#sucursales" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'white', background: 'rgba(255,255,255,0.06)', padding: '0.9rem 2.2rem', borderRadius: '0.9rem', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                                Ver sucursales
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{ borderTop: '1px solid #e5e7eb', padding: '2.5rem 1.5rem', background: '#f9fafb' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.04em', color: '#111827' }}>
                        D<span style={{ color: '#2563eb' }}>contadito</span>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {[
                            { label: 'Privacidad', href: '#' },
                            { label: 'Términos', href: '#' },
                            { label: 'CONDUSEF', href: 'https://www.condusef.gob.mx' },
                        ].map((l) => (
                            <a key={l.label} href={l.href}
                                target={l.href.startsWith('http') ? '_blank' : undefined}
                                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                                style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', textDecoration: 'none' }}
                            >{l.label}</a>
                        ))}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600 }}>
                        © 2026 DCONTADITO. TODOS LOS DERECHOS RESERVADOS.
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;