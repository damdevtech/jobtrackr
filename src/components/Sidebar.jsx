import { LayoutDashboard, BriefcaseBusiness, ClipboardList, PlusCircle, Calendar, BarChart, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar({ mobile = false }) {
    const navItems = [
        { name: "Dashboard", path: "/", icon: LayoutDashboard },
        { name: "Applications", path: "/applications", icon: ClipboardList },
        { name: "Add Job", path: "/addJob", icon: PlusCircle },
        { name: "Calendar", path: "/Calendar", icon: Calendar },
        { name: "Statistics", path: "/analytics", icon: BarChart },
        { name: "Settings", path: "/settings", icon: Settings },
    ];
    return (
        <nav
            className={`min-h-screen w-60 bg-slate-950 px-4 py-3 text-white ${mobile ? "block" : "hidden md:block"
                }`}
        >
            <div className="mb-8 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-white">
                <BriefcaseBusiness size={18} className="text-violet-400" />
                <span>JobTrackr</span>
            </div>
            <ul className="space-y-2">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive
                                    ? "bg-violet-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`
                            }
                        >
                            <item.icon size={18} />
                            <span>{item.name}</span>
                        </NavLink>
                    </li>
                ))}

            </ul>
        </nav>


    )
}

export default Sidebar