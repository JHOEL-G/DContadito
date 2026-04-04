import React, { useState, useEffect } from 'react';
import { COLONIAS_MOCK, ESTADOS_MX } from './item/SolicitudItem';
import { Field, inputStyle, RadioGroup, calcularCurp } from './hooks/SolicitudHooks';
import { useNavigate } from 'react-router-dom';

const SolicitudCredito = ({ onClose }) => {
    const [step, setStep] = useState(1);

    const [nombre, setNombre] = useState('');
    const [estadoNac, setEstadoNac] = useState('');
    const [fechaNac, setFechaNac] = useState('');
    const [genero, setGenero] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');

    const [estadoDom, setEstadoDom] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [calle, setCalle] = useState('');
    const [cp, setCp] = useState('');
    const [colonia, setColonia] = useState('');
    const [colonias, setColonias] = useState([]);
    const [tiempoVivienda, setTiempoVivienda] = useState('');
    const [tipoVivienda, setTipoVivienda] = useState('');

    const [estadoCivil, setEstadoCivil] = useState('');
    const [dependientes, setDependientes] = useState('');
    const [perfil, setPerfil] = useState('');
    const [giroNegocio, setGiroNegocio] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [antiguedad, setAntiguedad] = useState('');
    const [ingresos, setIngresos] = useState('');
    const [comprobacion, setComprobacion] = useState('');
    const navigate = useNavigate();

    const curp = calcularCurp(nombre, estadoNac, fechaNac, genero);

    useEffect(() => {
        if (cp.length === 5) {
            const cols = COLONIAS_MOCK[cp] || [];
            setColonias(cols);
            setColonia(cols[0] || '');
        } else {
            setColonias([]);
            setColonia('');
        }
    }, [cp]);

    const steps = [
        { n: 1, label: 'Generales' },
        { n: 2, label: 'Domicilio' },
        { n: 3, label: 'Económicos' },
    ];

    const progress = (step / 3) * 100;

    const containerStyle = {
        background: 'white', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh',
    };

    const headerStyle = {
        background: '#111827', padding: '1rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    };

    const cardStyle = {
        background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '1rem',
        padding: '1.75rem', maxWidth: '720px', margin: '0 auto',
    };

    const gridStyle = {
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
    };

    const sectionHeadStyle = {
        fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.12em', color: '#6b7280', marginBottom: '1.25rem',
        paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb',
    };

    return (
        <div style={containerStyle}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        input:focus, select:focus { outline: none; border-color: #2563eb !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
      `}</style>

            <style dangerouslySetInnerHTML={{
                __html: `
    @keyframes shimmer {
        100% { transform: translateX(100%); }
    }
`}} />

            <div style={{ padding: '2rem 1.5rem' }}>

                <div className="flex items-center justify-between w-full max-w-[800px] mx-auto mb-16 px-4">
                    {steps.map((s, i) => (
                        <React.Fragment key={s.n}>
                            <div className="flex items-center gap-4 group">
                                <div className="relative flex items-center justify-center">
                                    {step === s.n && (
                                        <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></span>
                                    )}
                                    <div className={`
                        relative w-10 h-10 rounded-full flex items-center justify-center text-xs font-black transition-all duration-500 z-10
                        ${step > s.n
                                            ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-white'
                                            : step === s.n
                                                ? 'bg-blue-600 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] text-white scale-110'
                                                : 'bg-gray-50 border border-gray-100 text-gray-300'}
                    `}>
                                        {step > s.n ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <span>0{s.n}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="hidden md:flex flex-col">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${step >= s.n ? 'text-blue-600' : 'text-gray-300'}`}>
                                        Paso
                                    </span>
                                    <span className={`text-sm font-bold tracking-tight transition-colors ${step === s.n ? 'text-gray-900' : 'text-gray-400'}`}>
                                        {s.label}
                                    </span>
                                </div>
                            </div>

                            {i < steps.length - 1 && (
                                <div className="flex-1 mx-4 h-[2px] bg-gray-50 rounded-full overflow-hidden min-w-[20px]">
                                    <div
                                        className={`h-full transition-all duration-700 ease-in-out ${step > s.n ? 'bg-green-500 w-full' : 'bg-gray-100 w-0'}`}
                                        style={{ width: step > s.n ? '100%' : '0%' }}
                                    ></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>


                {step === 1 && (
                    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">

                        <div className="mb-10 flex items-center gap-4">
                            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-gray-900 uppercase italic leading-none">
                                    Datos del <span className="text-blue-600">Cliente.</span>
                                </h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">
                                    Información personal básica
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nombre completo</label>
                                <input
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                    placeholder="Como aparece en tu identificación oficial"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Estado de nacimiento</label>
                                <select
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 appearance-none focus:bg-white focus:border-blue-600 transition-all outline-none cursor-pointer"
                                    value={estadoNac}
                                    onChange={e => setEstadoNac(e.target.value)}
                                >
                                    <option value="">Seleccionar estado</option>
                                    {ESTADOS_MX.map(e => <option key={e} value={e}>{e}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-blue-600 transition-all outline-none"
                                    value={fechaNac}
                                    onChange={e => setFechaNac(e.target.value)}
                                />
                            </div>

                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Género</label>
                                <div className="flex gap-4">
                                    {[{ v: 'M', l: 'Masculino' }, { v: 'F', l: 'Femenino' }].map((opt) => (
                                        <button
                                            key={opt.v}
                                            onClick={() => setGenero(opt.v)}
                                            className={`flex-1 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${genero === opt.v
                                                ? 'bg-gray-900 text-white shadow-xl shadow-gray-200'
                                                : 'bg-gray-50 text-gray-400 border border-gray-100 hover:bg-gray-100'
                                                }`}
                                        >
                                            {opt.l}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">CURP (Auto-generado)</label>
                                <div className={`w-full rounded-2xl px-6 py-5 text-center font-mono text-lg tracking-[0.2em] transition-all border ${curp
                                    ? 'bg-blue-50 border-blue-100 text-blue-700 font-bold'
                                    : 'bg-gray-50 border-dashed border-gray-200 text-gray-300 text-xs font-sans tracking-normal'
                                    }`}>
                                    {curp || 'Esperando datos para generar...'}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Celular (10 dígitos)</label>
                                <input
                                    type="tel"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-blue-600 transition-all outline-none"
                                    value={celular}
                                    onChange={e => setCelular(e.target.value.replace(/\D/g, ''))}
                                    placeholder="55 0000 0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-blue-600 transition-all outline-none"
                                    value={correo}
                                    onChange={e => setCorreo(e.target.value)}
                                    placeholder="tu@correo.com"
                                />
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-50 flex justify-between items-center">
                            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em]">Paso 01 de 04</p>
                            <button
                                onClick={() => setStep(2)}
                                className="group relative bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all hover:shadow-2xl active:scale-95 flex items-center gap-3"
                            >
                                Siguiente
                                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">

                        <div className="mb-10 flex items-center gap-4">
                            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-gray-900 uppercase italic leading-none">
                                    Ubicación <span className="text-blue-600">Actual.</span>
                                </h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">
                                    Detalles de tu domicilio vigente
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Estado</label>
                                <select
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 appearance-none focus:bg-white focus:border-blue-600 transition-all outline-none cursor-pointer"
                                    value={estadoDom}
                                    onChange={e => setEstadoDom(e.target.value)}
                                >
                                    <option value="">Seleccionar</option>
                                    {ESTADOS_MX.map(e => <option key={e} value={e}>{e}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Municipio o Alcaldía</label>
                                <input
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-600 transition-all outline-none"
                                    value={municipio}
                                    onChange={e => setMunicipio(e.target.value)}
                                    placeholder="Ej. Zapopan"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Calle y número</label>
                                <input
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-600 transition-all outline-none"
                                    value={calle}
                                    onChange={e => setCalle(e.target.value)}
                                    placeholder="Av. Juárez 123 Int. 4B"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Código Postal</label>
                                <input
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-600 transition-all outline-none"
                                    value={cp}
                                    maxLength={5}
                                    onChange={e => setCp(e.target.value.replace(/\D/g, ''))}
                                    placeholder="5 dígitos"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Colonia</label>
                                {colonias.length > 0 ? (
                                    <select
                                        className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-sm font-bold text-blue-900 appearance-none focus:bg-white focus:border-blue-600 transition-all outline-none cursor-pointer"
                                        value={colonia}
                                        onChange={e => setColonia(e.target.value)}
                                    >
                                        {colonias.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                ) : (
                                    <div className="w-full bg-gray-50 border border-dashed border-gray-200 rounded-2xl px-6 py-4 text-xs font-medium text-gray-400 italic">
                                        {cp.length === 5 ? 'Buscando colonias...' : 'Ingresa CP primero'}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Antigüedad en domicilio</label>
                                <select
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 appearance-none focus:bg-white focus:border-blue-600 transition-all outline-none cursor-pointer"
                                    value={tiempoVivienda}
                                    onChange={e => setTiempoVivienda(e.target.value)}
                                >
                                    <option value="">Seleccionar tiempo</option>
                                    <option>Menos de 1 año</option>
                                    <option>1 a 3 años</option>
                                    <option>3 a 5 años</option>
                                    <option>Más de 5 años</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Régimen de propiedad</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {[
                                        { value: 'propia', label: 'Propia' },
                                        { value: 'rentada', label: 'Rentada' },
                                        { value: 'familiar', label: 'Familiar' }
                                    ].map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => setTipoVivienda(opt.value)}
                                            className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${tipoVivienda === opt.value
                                                ? 'bg-gray-900 text-white border-gray-900 shadow-xl'
                                                : 'bg-gray-50 text-gray-400 border-gray-100 hover:border-gray-200'
                                                }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-50 flex justify-between items-center">
                            <button
                                onClick={() => setStep(1)}
                                className="px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all"
                            >
                                ← Atrás
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                className="group bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all hover:shadow-2xl flex items-center gap-3"
                            >
                                Siguiente
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">

                        <div className="mb-10 flex items-center gap-4">
                            <div className="w-1.5 h-8 bg-green-500 rounded-full"></div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter text-gray-900 uppercase italic leading-none">
                                    Perfil <span className="text-green-600">Económico.</span>
                                </h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">
                                    Último paso: Análisis de capacidad
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Estado civil</label>
                                <div className="flex gap-3">
                                    {[{ v: 'soltero', l: 'Soltero/a' }, { v: 'casado', l: 'Casado/a' }].map(opt => (
                                        <button
                                            key={opt.v}
                                            onClick={() => setEstadoCivil(opt.v)}
                                            className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${estadoCivil === opt.v ? 'bg-gray-900 text-white border-gray-900 shadow-lg' : 'bg-gray-50 text-gray-400 border-gray-100'
                                                }`}
                                        >
                                            {opt.l}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Dependientes</label>
                                <select
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-green-500 transition-all outline-none appearance-none cursor-pointer"
                                    value={dependientes} onChange={e => setDependientes(e.target.value)}
                                >
                                    {['0', '1', '2', '3', '4', '5+'].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>

                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">¿A qué te dedicas?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        { value: 'nomina', label: 'Empleado / Nómina' },
                                        { value: 'negocio', label: 'Negocio propio' },
                                        { value: 'vales', label: 'Distribuidor' },
                                    ].map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => setPerfil(opt.value)}
                                            className={`py-4 px-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${perfil === opt.value
                                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                                                : 'bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100'
                                                }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Giro del negocio</label>
                                <select
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white focus:border-green-500 transition-all outline-none appearance-none cursor-pointer"
                                    value={giroNegocio} onChange={e => setGiroNegocio(e.target.value)}
                                >
                                    <option value="">Seleccionar</option>
                                    {['Comercio', 'Alimentos', 'Estética', 'Abarrotes', 'Salud', 'Servicios'].map(g => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nombre del negocio</label>
                                <input
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-green-500 transition-all outline-none"
                                    value={empresa} onChange={e => setEmpresa(e.target.value)}
                                    placeholder="Nombre comercial"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Ingresos mensuales aproximados</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-black">$</span>
                                    <input
                                        className="w-full bg-green-50/30 border border-green-100 rounded-2xl pl-10 pr-6 py-5 text-xl font-black text-green-700 placeholder:text-green-200 focus:bg-white focus:border-green-500 transition-all outline-none"
                                        value={ingresos} onChange={e => setIngresos(e.target.value)}
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">¿Cómo compruebas ingresos?</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { v: 'estado_cuenta', l: 'Estado de cuenta' },
                                        { v: 'nomina', l: 'Recibos Nómina' },
                                        { v: 'facturas', l: 'Facturas/Notas' },
                                        { v: 'relacion', l: 'Relación Cobro' },
                                    ].map(opt => (
                                        <button
                                            key={opt.v}
                                            onClick={() => setComprobacion(opt.v)}
                                            className={`py-3 px-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${comprobacion === opt.v ? 'bg-green-600 text-white border-green-600 shadow-md' : 'bg-gray-50 text-gray-400 border-gray-100'
                                                }`}
                                        >
                                            {opt.l}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <button
                                onClick={() => setStep(2)}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-all"
                            >
                                ← Revisar datos
                            </button>
                            <button
                                onClick={() => { alert('¡Solicitud enviada!'); navigate('/'); }}
                                className="w-full sm:w-auto bg-green-600 text-white px-12 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all hover:shadow-[0_20px_40px_-10px_rgba(22,163,74,0.4)] flex items-center justify-center gap-3"
                            >
                                Finalizar Solicitud
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div >
    );
};

export default SolicitudCredito;