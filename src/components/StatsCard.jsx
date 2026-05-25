function StatsCard({ title, value, change, icon: Icon, color }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-4 flex items-start gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}>
                    <Icon size={20} />
                </span>

                <div>
                    <h2 className="text-sm font-medium text-slate-500">{title}</h2>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
                </div>

            </div>

            <p className="text-sm text-center text-emerald-600">{change}</p>
        </div>
    );
}

export default StatsCard;