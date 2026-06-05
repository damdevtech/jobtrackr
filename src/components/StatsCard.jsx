function StatsCard({ title, value, change, changeColor, icon: Icon, color }) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-sm font-medium text-slate-500">{title}</h2>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
                </div>

                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}>
                    <Icon size={20} />
                </span>
            </div>

            <p className={`text-sm font-medium ${changeColor || "text-slate-500"}`}>
                {change}
            </p>
        </div>
    );
}

export default StatsCard;