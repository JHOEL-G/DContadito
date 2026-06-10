import React, { useState, useEffect } from 'react';
import { COLONIAS_MOCK, ESTADOS_MX } from './item/SolicitudItem';
import { Field, RadioGroup, calcularCurp } from './hooks/SolicitudHooks';
import { useNavigate } from 'react-router-dom';
import { parsearCurp } from './hooks/parsearCurp';

const CIUDADES_PRESENCIA = [
    { estado: 'Jalisco', ciudades: ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá'] },
    { estado: 'Ciudad de México', ciudades: ['Iztapalapa', 'Gustavo A. Madero', 'Álvaro Obregón', 'Coyoacán'] },
    { estado: 'Estado de México', ciudades: ['Ecatepec', 'Nezahualcóyotl', 'Naucalpan', 'Toluca'] },
    { estado: 'Puebla', ciudades: ['Puebla', 'Tehuacán', 'San Martín Texmelucan'] },
    { estado: 'Veracruz', ciudades: ['Veracruz', 'Xalapa', 'Coatzacoalcos', 'Orizaba'] },
    { estado: 'Guanajuato', ciudades: ['León', 'Irapuato', 'Celaya', 'Salamanca'] },
];

const SolicitudCredito = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [curpManual, setCurpManual] = useState('');
    const [curpModo, setCurpModo] = useState('auto');
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
    const [perfiles, setPerfiles] = useState([{ perfil: '', giroNegocio: '', empresa: '', antiguedad: '', ingresos: '', otrosIngresos: '', comprobacion: '' }]);
    const navigate = useNavigate();
    const [cpCargando, setCpCargando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const curp = calcularCurp(nombre, estadoNac, fechaNac, genero);
    const [ineFrontal, setIneFrontal] = useState(null);
    const [ineTraser, setIneTraser] = useState(null);
    const [geoError, setGeoError] = useState('');
    const [geoCargando, setGeoCargando] = useState(false);
    const [ciudadesVisible, setCiudadesVisible] = useState(false);

    useEffect(() => {
        if (cp.length === 5) {
            setCpCargando(true);
            fetch(`https://api.zippopotam.us/MX/${cp}`)
                .then(r => {
                    if (!r.ok) throw new Error('CP no encontrado');
                    return r.json();
                })
                .then(data => {
                    setCpCargando(false);
                    if (!data.places || data.places.length === 0) return;
                    const coloniasList = data.places.map(p => p['place name']);
                    setColonias(coloniasList);
                    setColonia(coloniasList[0] || '');
                    const lugar = data.places[0];
                    if (lugar) {
                        setMunicipio(lugar['place name']);
                        const estadoApi = lugar['state'];
                        const match = ESTADOS_MX.find(e =>
                            e.toLowerCase().includes(estadoApi.toLowerCase()) ||
                            estadoApi.toLowerCase().includes(e.toLowerCase())
                        );
                        if (match) setEstadoDom(match);
                    }
                })
                .catch(() => {
                    setCpCargando(false);
                    setColonias([]);
                    setColonia('');
                });
        } else {
            setColonias([]);
            setColonia('');
            setMunicipio('');
            setEstadoDom('');
        }
    }, [cp]);

    const steps = [
        { n: 1, label: 'Generales' },
        { n: 2, label: 'Domicilio' },
        { n: 3, label: 'Económicos' },
    ];

    const containerStyle = {
        background: 'white', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh',
    };

    const obtenerUbicacion = () => {
        if (!navigator.geolocation) {
            setGeoError('Tu navegador no soporta geolocalización');
            return;
        }
        setGeoCargando(true);
        setGeoError('');
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                try {
                    const { latitude, longitude } = pos.coords;
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`);
                    const data = await res.json();
                    const addr = data.address;
                    const estadoApi = addr.state || '';
                    const match = ESTADOS_MX.find(e =>
                        e.toLowerCase().includes(estadoApi.toLowerCase()) ||
                        estadoApi.toLowerCase().includes(e.toLowerCase())
                    );
                    if (match) setEstadoDom(match);
                    setMunicipio(addr.city || addr.town || addr.municipality || addr.county || '');
                    if (addr.postcode) setCp(addr.postcode.slice(0, 5));
                } catch {
                    setGeoError('No se pudo obtener la ubicación');
                }
                setGeoCargando(false);
            },
            () => {
                setGeoError('Permiso denegado. Activa la ubicación en tu navegador');
                setGeoCargando(false);
            }
        );
    };

    const actualizarPerfil = (index, campo, valor) => {
        setPerfiles(prev => prev.map((p, i) => i === index ? { ...p, [campo]: valor } : p));
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
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">CURP</label>

                                {/* Toggle modo */}
                                <div className="flex gap-2 mb-2">
                                    {[{ v: 'auto', l: 'Auto-generar' }, { v: 'manual', l: 'Ingresar manualmente' }].map(opt => (
                                        <button
                                            key={opt.v}
                                            onClick={() => { setCurpModo(opt.v); setCurpManual(''); }}
                                            className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${curpModo === opt.v
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'bg-gray-50 text-gray-400 border-gray-100'
                                                }`}
                                        >
                                            {opt.l}
                                        </button>
                                    ))}
                                </div>

                                {curpModo === 'auto' ? (
                                    <div className={`w-full rounded-2xl px-6 py-5 text-center font-mono text-lg tracking-[0.2em] transition-all border ${curp
                                        ? 'bg-blue-50 border-blue-100 text-blue-700 font-bold'
                                        : 'bg-gray-50 border-dashed border-gray-200 text-gray-300 text-xs font-sans tracking-normal'
                                        }`}>
                                        {curp || 'Completa nombre, estado, fecha y género...'}
                                    </div>
                                ) : (
                                    <input
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 font-mono text-lg tracking-[0.2em] text-blue-700 uppercase placeholder:text-gray-300 focus:bg-white focus:border-blue-600 transition-all outline-none"
                                        value={curpManual}
                                        maxLength={18}
                                        onChange={e => {
                                            const val = e.target.value.toUpperCase();
                                            setCurpManual(val);
                                            parsearCurp(val, setGenero, setFechaNac, setEstadoNac, setNombre);
                                        }}
                                        placeholder="CURP de 18 caracteres"
                                    />
                                )}
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nombre completo</label>
                                <input
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                    placeholder="Como aparece en tu identificación oficial"
                                    disabled={curpModo === 'manual' && curpManual.length === 18}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Estado de nacimiento</label>
                                <select
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 appearance-none focus:bg-white focus:border-blue-600 transition-all outline-none cursor-pointer"
                                    value={estadoNac}
                                    onChange={e => setEstadoNac(e.target.value)}
                                    disabled={curpModo === 'manual' && curpManual.length === 18}
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
                                    disabled={curpModo === 'manual' && curpManual.length === 18}
                                />
                            </div>

                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Género</label>
                                <div className="flex gap-4">
                                    {[{ v: 'M', l: 'Masculino' }, { v: 'F', l: 'Femenino' }].map((opt) => (
                                        <button
                                            key={opt.v}
                                            onClick={() => setGenero(opt.v)}
                                            disabled={curpModo === 'manual' && curpManual.length === 18}
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

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Celular (10 dígitos)</label>
                                <input
                                    type="tel"
                                    className={`w-full bg-gray-50/50 border rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white transition-all outline-none ${celular.length > 0 && celular.length !== 10 ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-blue-600'}`}
                                    value={celular}
                                    onChange={e => setCelular(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    placeholder="55 0000 0000"
                                />
                                {celular.length > 0 && celular.length !== 10 && (
                                    <p className="text-[10px] font-bold text-red-400 ml-4">Debe tener exactamente 10 dígitos</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Correo electrónico</label>
                                <input
                                    type="email"
                                    className={`w-full bg-gray-50/50 border rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:bg-white transition-all outline-none ${correo.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) ? 'border-red-300 focus:border-red-500' : 'border-gray-100 focus:border-blue-600'}`}
                                    value={correo}
                                    onChange={e => setCorreo(e.target.value)}
                                    placeholder="tu@correo.com"
                                />
                                {correo.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) && (
                                    <p className="text-[10px] font-bold text-red-400 ml-4">Formato de correo inválido</p>
                                )}
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">INE / Identificación oficial</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                    {/* FRONTAL */}
                                    <label className={`flex items-center gap-4 border-2 border-dashed rounded-2xl px-6 py-5 cursor-pointer transition-all ${ineFrontal ? 'border-blue-300 bg-blue-50/40' : 'border-gray-200 bg-gray-50/50 hover:border-blue-300 hover:bg-blue-50/20'}`}>
                                        <input type="file" accept="image/*,application/pdf" className="hidden" onChange={e => setIneFrontal(e.target.files[0] || null)} />
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${ineFrontal ? 'bg-blue-600' : 'bg-gray-200'}`}>
                                            <svg className={`w-5 h-5 ${ineFrontal ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col">
                <span className={`text-xs font-black uppercase tracking-widest ${ineFrontal ? 'text-blue-700' : 'text-gray-400'}`}>
                    {ineFrontal ? ineFrontal.name : 'Lado frontal'}
                </span>
                                            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mt-0.5">
                    {ineFrontal ? 'Archivo listo ✓' : 'Frente de tu INE · JPG, PNG o PDF'}
                </span>
                                        </div>
                                    </label>

                                    {/* TRASERA */}
                                    <label className={`flex items-center gap-4 border-2 border-dashed rounded-2xl px-6 py-5 cursor-pointer transition-all ${ineTraser ? 'border-blue-300 bg-blue-50/40' : 'border-gray-200 bg-gray-50/50 hover:border-blue-300 hover:bg-blue-50/20'}`}>
                                        <input type="file" accept="image/*,application/pdf" className="hidden" onChange={e => setIneTraser(e.target.files[0] || null)} />
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${ineTraser ? 'bg-blue-600' : 'bg-gray-200'}`}>
                                            <svg className={`w-5 h-5 ${ineTraser ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col">
                <span className={`text-xs font-black uppercase tracking-widest ${ineTraser ? 'text-blue-700' : 'text-gray-400'}`}>
                    {ineTraser ? ineTraser.name : 'Lado trasero'}
                </span>
                                            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mt-0.5">
                    {ineTraser ? 'Archivo listo ✓' : 'Vuelta de tu INE · JPG, PNG o PDF'}
                </span>
                                        </div>
                                    </label>

                                </div>

                                {/* Indicador de progreso */}
                                {(ineFrontal || ineTraser) && (
                                    <p className={`text-[10px] font-bold ml-4 mt-1 ${ineFrontal && ineTraser ? 'text-blue-500' : 'text-amber-400'}`}>
                                        {ineFrontal && ineTraser ? '✓ Ambos lados cargados' : `Falta: ${!ineFrontal ? 'lado frontal' : 'lado trasero'}`}
                                    </p>
                                )}
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

                        <div className="mb-10 flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-4">
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
                            <button
                                onClick={obtenerUbicacion}
                                disabled={geoCargando}
                                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all disabled:opacity-50"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {geoCargando ? 'Detectando...' : 'Usar mi ubicación'}
                            </button>
                        </div>
                        {geoError && (
                            <p className="text-[10px] font-bold text-red-400 ml-4 -mt-4 mb-4">{geoError}</p>
                        )}

                        {/* Ciudades con presencia */}
                        <div className="mb-8 border border-blue-100 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setCiudadesVisible(!ciudadesVisible)}
                                className="w-full flex items-center justify-between px-5 py-4 bg-blue-50/50 hover:bg-blue-100/50 transition-all"
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Ciudades con presencia</p>
                                </div>
                                <svg
                                    className={`w-4 h-4 text-blue-400 transition-transform duration-300 ${ciudadesVisible ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${ciudadesVisible ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-5 flex flex-col gap-3 bg-white">
                                    {CIUDADES_PRESENCIA.map(item => (
                                        <div key={item.estado}>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1.5">{item.estado}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.ciudades.map(ciudad => (
                                                    <button
                                                        key={ciudad}
                                                        onClick={() => {
                                                            const match = ESTADOS_MX.find(e => e.toLowerCase().includes(item.estado.toLowerCase()) || item.estado.toLowerCase().includes(e.toLowerCase()));
                                                            if (match) setEstadoDom(match);
                                                            setMunicipio(ciudad);
                                                            setCiudadesVisible(false);
                                                        }}
                                                        className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${municipio === ciudad ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600'}`}
                                                    >
                                                        {ciudad}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => { setEstadoDom(''); setMunicipio(''); setCiudadesVisible(false); }}
                                        className="mt-2 text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors text-left"
                                    >
                                        No encuentro mi ciudad →
                                    </button>
                                </div>
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
                                        {cpCargando ? '🔍 Buscando...' : cp.length === 5 ? 'CP no encontrado' : 'Ingresa CP primero'}
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
                                            onClick={() => actualizarPerfil(0, 'perfil', opt.value)}
                                            className={`py-4 px-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${perfiles[0]?.perfil === opt.value
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
                                    value={perfiles[0].giroNegocio}
                                    onChange={e => actualizarPerfil(0, 'giroNegocio', e.target.value)}
                                >
                                    <option value="">Seleccionar</option>
                                    {['Comercio', 'Alimentos', 'Estética', 'Abarrotes', 'Salud', 'Servicios'].map(g => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nombre del negocio</label>
                                <input
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-green-500 transition-all outline-none"
                                    value={perfiles[0].empresa}
                                    onChange={e => actualizarPerfil(0, 'empresa', e.target.value)}
                                    placeholder="Nombre comercial"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Antigüedad del negocio <span className="text-blue-500 normal-case tracking-normal font-bold">(en meses)</span></label>
                                <input
                                    className={`w-full bg-gray-50/50 border rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 focus:bg-white focus:border-green-500 transition-all outline-none ${perfiles[0].antiguedad && (isNaN(perfiles[0].antiguedad) || Number(perfiles[0].antiguedad) > 480 || Number(perfiles[0].antiguedad) < 0) ?  'border-red-300' : 'border-gray-100'}`}
                                    value={perfiles[0].antiguedad}
                                    onChange={e => actualizarPerfil(0, 'antiguedad', e.target.value.replace(/\D/g, ''))}
                                    placeholder="Ej. 24 (máx. 480 meses = 40 años)"
                                    maxLength={3}
                                />
                                {perfiles[0].antiguedad && (isNaN(perfiles[0].antiguedad) || Number(perfiles[0].antiguedad) > 480) && (
                                    <p className="text-[10px] font-bold text-red-400 ml-4">Máximo 480 meses (40 años)</p>
                                )}
                                {perfiles[0].antiguedad && !isNaN(perfiles[0].antiguedad) && Number(perfiles[0].antiguedad) <= 480 && Number(perfiles[0].antiguedad) > 0 && (
                                    <p className="text-[10px] font-bold text-blue-400 ml-4">
                                        {Math.floor(Number(perfiles[0].antiguedad) / 12) > 0 ? `${Math.floor(Number(perfiles[0].antiguedad) / 12)} año(s) ` : ''}
                                        {Number(perfiles[0].antiguedad) % 12 > 0 ? `${Number(perfiles[0].antiguedad) % 12} mes(es)` : ''}
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Ingresos mensuales aproximados</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-black">$</span>
                                    <input
                                        className={`w-full bg-green-50/30 border rounded-2xl pl-10 pr-6 py-5 text-xl font-black text-green-700 placeholder:text-green-200 focus:bg-white focus:border-green-500 transition-all outline-none ${perfiles[0].ingresos && Number(perfiles[0].ingresos.replace(/,/g, '')) < 1000 ?  'border-red-300' : 'border-green-100'}`}
                                        value={perfiles[0].ingresos}
                                        onChange={e => {
                                            const raw = e.target.value.replace(/[^\d]/g, '');
                                            actualizarPerfil(0, 'ingresos', raw ? Number(raw).toLocaleString('es-MX') : '');
                                        }}
                                        placeholder="0"
                                    />
                                </div>
                                {perfiles[0].ingresos && Number(perfiles[0].ingresos.replace(/,/g, '')) < 1000 && (
                                    <p className="text-[10px] font-bold text-red-400 ml-4">El monto mínimo es $1,000</p>
                                )}
                                {perfiles[0].ingresos && Number(perfiles[0].ingresos.replace(/,/g, '')) >= 1000 && (
                                    <p className="text-[10px] font-bold text-green-500 ml-4">
                                        $ {Number(perfiles[0].ingresos.replace(/,/g, '')).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Otros ingresos <span className="text-gray-300 normal-case tracking-normal font-bold">(opcional)</span></label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-black">$</span>
                                    <input
                                        className="w-full bg-gray-50/30 border border-gray-100 rounded-2xl pl-10 pr-6 py-5 text-xl font-black text-gray-700 placeholder:text-gray-200 focus:bg-white focus:border-green-500 transition-all outline-none"
                                        value={perfiles[0].otrosIngresos}
                                        onChange={e => {
                                            const raw = e.target.value.replace(/[^\d]/g, '');
                                            actualizarPerfil(0, 'otrosIngresos', raw ? Number(raw).toLocaleString('es-MX') : '');
                                        }}
                                        placeholder="0"
                                    />
                                </div>
                                {perfiles[0].otrosIngresos && Number(perfiles[0].otrosIngresos.replace(/,/g, '')) > 0 && (
                                    <p className="text-[10px] font-bold text-gray-400 ml-4">
                                        Ingreso total: $ {(Number(perfiles[0].ingresos.replace(/,/g, '') || 0) + Number(perfiles[0].otrosIngresos.replace(/,/g, ''))).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                                    </p>
                                )}
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
                                            onClick={() => actualizarPerfil(0, 'comprobacion', opt.v)}
                                            className={`py-3 px-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${perfiles[0].comprobacion === opt.v ? 'bg-green-600 text-white border-green-600 shadow-md' : 'bg-gray-50 text-gray-400 border-gray-100'
                                                }`}
                                        >
                                            {opt.l}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal de confirmación */}
                        {enviado && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                                <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col items-center gap-5 text-center">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-200">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-black tracking-tighter text-gray-900 uppercase italic leading-none">
                                        🎉 ¡Felicidades!
                                    </h4>
                                    <p className="text-sm font-bold text-gray-500 leading-relaxed">
                                        Tu solicitud está en proceso. Un ejecutivo de{' '}
                                        <span className="text-green-700 font-black">Dcontadito</span>{' '}
                                        te contactará en breve para dar continuidad a tu trámite.
                                    </p>
                                    <button
                                        onClick={() => navigate('/')}
                                        className="mt-2 w-full px-8 py-4 bg-green-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all"
                                    >
                                        Ir al inicio →
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <button
                                onClick={() => setStep(2)}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-all"
                            >
                                ← Revisar datos
                            </button>
                            <button
                                onClick={() => setEnviado(true)}
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