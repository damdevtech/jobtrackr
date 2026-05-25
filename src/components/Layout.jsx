import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-100 md:flex">
            {/* Desktop sidebar */}
            <Sidebar />

            {/* Mobile top bar */}
            <div className="flex items-center justify-between bg-white px-4 py-3 shadow-sm md:hidden">
                <button
                    type="button"
                    onClick={() => setSidebarOpen(true)}
                    className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
                >
                    <Menu size={22} />
                </button>

                <span className="text-sm font-semibold text-slate-900">
                    JobTrackr
                </span>
            </div>

            {sidebarOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div
                        className="absolute inset-0 bg-slate-900/50"
                        onClick={() => setSidebarOpen(false)}
                    />

                    <div className="relative h-full w-60">
                        <Sidebar mobile />
                    </div>
                </div>
            )}

            <main className="flex-1 min-w-0 p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;