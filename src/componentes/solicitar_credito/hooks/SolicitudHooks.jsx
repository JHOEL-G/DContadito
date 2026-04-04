import { ESTADO_CODES } from "../item/SolicitudItem";

export function calcularCurp(nombre, estadoNac, fechaNac, genero) {
    if (!nombre || !estadoNac || !fechaNac || !genero) return '';
    const parts = nombre.trim().toUpperCase().split(' ').filter(Boolean);
    if (parts.length < 2) return '';
    const [ap1, ap2 = 'X', nom = 'X'] = parts;
    const vocales = 'AEIOU';
    const primerVocal = (s) => { for (let i = 1; i < s.length; i++) if (vocales.includes(s[i])) return s[i]; return 'X'; };
    const primerCons = (s) => { for (let i = 1; i < s.length; i++) if (!vocales.includes(s[i]) && s[i] >= 'A') return s[i]; return 'X'; };
    const d = fechaNac.replace(/-/g, '');
    const yy = d.substring(2, 4), mm = d.substring(4, 6), dd = d.substring(6, 8);
    const ec = ESTADO_CODES[estadoNac] || 'XX';
    const cons = primerCons(ap1) + primerCons(ap2) + primerCons(nom);
    return ap1[0] + primerVocal(ap1) + ap2[0] + nom[0] + yy + mm + dd + genero + ec + cons + '0';
}

export const Field = ({ label, children, full }) => (
    <div style={{ gridColumn: full ? '1 / -1' : undefined, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</label>
        {children}
    </div>
);

export const inputStyle = {
    border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '0.55rem 0.75rem',
    fontSize: '0.9rem', color: '#111827', outline: 'none', background: 'white', width: '100%',
};

export const RadioGroup = ({ options, value, onChange }) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {options.map((opt) => (
            <button key={opt.value} type="button"
                onClick={() => onChange(opt.value)}
                style={{
                    flex: 1, minWidth: '80px', padding: '8px 12px', border: '1px solid',
                    borderColor: value === opt.value ? '#2563eb' : '#e5e7eb',
                    borderRadius: '0.5rem', fontSize: '0.85rem', cursor: 'pointer',
                    background: value === opt.value ? '#eff6ff' : 'white',
                    color: value === opt.value ? '#1d4ed8' : '#374151',
                    fontWeight: value === opt.value ? 600 : 400,
                    transition: 'all .15s',
                }}>
                {opt.label}
            </button>
        ))}
    </div>
);