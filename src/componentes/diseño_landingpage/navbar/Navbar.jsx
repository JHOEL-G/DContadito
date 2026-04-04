import { useNavigate } from "react-router-dom";
import { menuItems } from "./nav_item/NavItem";

const NavbarPro = () => {
    const navigate = useNavigate();

    const handleSolicitarAhora = () => {
        navigate("/solicitar-credito");
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out py-4 px-4`}>
            <div className={`max-w-[95%] mx-auto px-6 py-2.5 flex justify-between items-center bg-transparent/5 backdrop-blur-xl border border-gray-200/50 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)]`}>

                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-500 group-hover:-rotate-6">
                            <span className="font-black text-white text-base relative z-10">D</span>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h1 className="text-xl font-black tracking-[-0.05em] uppercase italic text-gray-900">
                            D<span className="text-blue-600">contadito</span>
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center gap-1">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <a
                                    href={item.href || "#"}
                                    className="relative px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-blue-600 transition-all duration-300 flex items-center gap-1"
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <span className="text-[8px] transition-transform duration-300 group-hover:rotate-180">▼</span>
                                    )}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-4"></span>
                                </a>

                                {item.submenu && (
                                    <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                        <div className="bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                                            <div className="py-2 flex flex-col">
                                                {item.submenu.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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
                        className="p-2 hover:bg-green-50 rounded-full transition-colors duration-300"
                    >
                        <img
                            src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=000000"
                            alt="WhatsApp"
                            className="w-7 h-7 hover:grayscale-0 transition-all duration-500"
                        />
                    </a>

                    <button className="hidden lg:block px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 hover:text-blue-600 transition-colors duration-300">
                        Iniciar Sesión
                    </button>

                    <button className="relative group px-7 py-2.5 rounded-2xl bg-gray-900 overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)] active:scale-95"
                        onClick={handleSolicitarAhora}
                    >
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.15em] text-white flex items-center gap-2">
                            Solicitar Ahora
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse group-hover:bg-white"></div>
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </button>
                </div>
            </div>
        </nav >
    );
};

export default NavbarPro;