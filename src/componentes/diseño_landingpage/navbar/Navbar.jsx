import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { menuItems } from "./nav_item/NavItem";

const NavbarPro = () => {
    const navigate = useNavigate();

    const handleSolicitarAhora = () => {
        navigate("/solicitar-credito");
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out py-4 px-4`}>
            <div className={`max-w-[95%] mx-auto px-6 py-2.5 flex justify-between items-center bg-[#152036] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(21,32,54,0.3)]`}>

                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <img src="LOGOB.png" alt="logo dcontadito" className="w-32 h-auto" />
                    </div>

                    <div className="hidden md:flex items-center gap-1">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <a
                                    href={item.href || "#"}
                                    className="relative px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#93c01f] transition-all duration-300 flex items-center gap-1"
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <span className="text-[8px] transition-transform duration-300 group-hover:rotate-180">▼</span>
                                    )}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#93c01f] rounded-full transition-all duration-300 group-hover:w-4"></span>
                                </a>

                                {item.submenu && (
                                    <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                        <div className="bg-[#152036] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_40px_rgba(21,32,54,0.4)] overflow-hidden">
                                            <div className="py-2 flex flex-col">
                                                {item.submenu.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white hover:text-[#93c01f] hover:bg-white/5 transition-colors"
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://wa.me/51951072293"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-[#93c01f]/20 rounded-full transition-colors duration-300"
                    >
                        <FaWhatsapp className="w-7 h-7 text-white" />
                    </a>

                    <button className="hidden lg:block px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-white/60 hover:text-[#93c01f] transition-colors duration-300">
                        Iniciar Sesión
                    </button>

                    <button
                        className="relative group px-7 py-2.5 rounded-2xl overflow-hidden transition-all duration-300 active:scale-95"
                        style={{ background: '#93c01f', boxShadow: '0 10px_25px_rgba(147,192,31,0.3)' }}
                        onClick={handleSolicitarAhora}
                    >
                        <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.15em] text-[#152036] flex items-center gap-2">
                            Solicitar Ahora
                            <div className="w-1.5 h-1.5 rounded-full bg-[#152036]/40 animate-pulse"></div>
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarPro;