export const parsearCurp = (curp, setGenero, setFechaNac, setEstadoNac, setNombre) => {
    if (curp.length !== 18) return;

    // ── Sexo: posición 10 ──
    const sexoChar = curp[10];
    if (sexoChar === 'H') setGenero('M');
    else if (sexoChar === 'M') setGenero('F');

    // ── Fecha nacimiento: posiciones 4-9 (AAMMDD) ──
    const anio = curp.substring(4, 6);
    const mes = curp.substring(6, 8);
    const dia = curp.substring(8, 10);
    const anioCompleto = parseInt(anio) > 30 ? `19${anio}` : `20${anio}`;
    setFechaNac(`${anioCompleto}-${mes}-${dia}`);

    // ── Estado nacimiento: posiciones 11-12 ──
    const claveEstado = curp.substring(11, 13);
    const mapaEstados = {
        AS: 'Aguascalientes', BC: 'Baja California', BS: 'Baja California Sur',
        CC: 'Campeche', CL: 'Coahuila', CM: 'Colima', CS: 'Chiapas',
        CH: 'Chihuahua', DF: 'Ciudad de México', DG: 'Durango',
        GT: 'Guanajuato', GR: 'Guerrero', HG: 'Hidalgo', JC: 'Jalisco',
        MC: 'Estado de México', MN: 'Michoacán', MS: 'Morelos', NT: 'Nayarit',
        NL: 'Nuevo León', OC: 'Oaxaca', PL: 'Puebla', QT: 'Querétaro',
        QR: 'Quintana Roo', SP: 'San Luis Potosí', SL: 'Sinaloa', SR: 'Sonora',
        TC: 'Tabasco', TS: 'Tamaulipas', TL: 'Tlaxcala', VZ: 'Veracruz',
        YN: 'Yucatán', ZS: 'Zacatecas', NE: 'Extranjero',
    };
    const estado = mapaEstados[claveEstado];
    if (estado) setEstadoNac(estado);

    // ── Iniciales desde CURP: posiciones 0-3 ──
    // GALJ260512HNLRDHA6
    // G = inicial apellido paterno
    // A = vocal interna apellido paterno (no es inicial)
    // L = inicial apellido materno
    // J = inicial del nombre
    const inicialApellidoPaterno = curp[0];  // G
    const inicialApellidoMaterno = curp[2];  // L
    const inicialNombre = curp[3];  // J

    if (setNombre) {
        // Formato: "J. G. L." → nombre, ap.paterno, ap.materno
        setNombre(`${inicialNombre}. ${inicialApellidoPaterno}. ${inicialApellidoMaterno}.`);
    }
};