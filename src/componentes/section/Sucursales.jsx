import React from 'react';

const Sucursales = () => {
    const sucursales = [
        { estado: 'DURANGO', ciudades: ['Durango', 'Santiago Papasquiaro', 'El Salto'] },
        { estado: 'ZACATECAS', ciudades: ['Rio Grande', 'Fresnillo'] },
        { estado: 'SINALOA', ciudades: ['Mazatlán', 'La Cruz de Elota'] },
        { estado: 'NAYARIT', ciudades: ['Acaponeta', 'Santiago Ixcuintla', 'Tepic'] },
        { estado: 'CHIHUAHUA', ciudades: ['Chihuahua', 'Casas Grandes', 'Delicias', 'Camargo', 'Parral', 'Juárez'] },
        { estado: 'TAMAULIPAS', ciudades: ['Altamira', 'Tampico', 'Cd. Madero'] },
        { estado: 'VERACRUZ', ciudades: ['Tuxpan', 'Martínez de la Torre'] },
        { estado: 'COAHUILA', ciudades: ['Torreón', 'Matamoros', 'Madero Chávez', 'San Pedro'] },
    ];

    return (
        <section id="sucursales" className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado Centrado */}
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-block px-6 py-1.5 rounded-full bg-[#8cc63f] text-[#1d2d5b] text-[10px] font-bold uppercase tracking-widest">
                        ESTAMOS CERCA DE TI
                    </div>
                    <h2 className="text-5xl md:text-7xl font-light text-[#1d2d5b] uppercase tracking-tight leading-none">
                        PRESENCIA <br />
                        <span className="text-6xl md:text-9xl font-black block mt-2 text-[#284a80]">NACIONAL</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-light mt-6 max-w-3xl mx-auto">
                        Expandimos nuestra red para inyectar capital donde más lo necesites. <br />
                        <span className="text-[#1d2d5b] font-bold">8 estados y más de 25 puntos estratégicos.</span>
                    </p>
                </div>

                {/* Grilla de Estados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sucursales.map((s) => (
                        <div
                            key={s.estado}
                            className="bg-white border-2 border-[#3fb4e9]/20 rounded-[2.5rem] p-8 text-center transition-all hover:border-[#3fb4e9] hover:shadow-lg group"
                        >
                            {/* Nombre del Estado */}
                            <h3 className="text-lg font-black text-[#1d2d5b] uppercase tracking-tighter mb-4">
                                {s.estado}
                            </h3>

                            {/* Lista de Ciudades */}
                            <div className="space-y-1">
                                {s.ciudades.map((c) => (
                                    <p key={c} className="text-sm font-medium text-gray-500 leading-tight">
                                        {c}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Sucursales;