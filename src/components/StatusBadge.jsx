export default function StatusBadge({ status }) {
    const colorClassesByStatus = {
        Applied: "bg-slate-100 text-slate-600",
        Offered: "bg-emerald-100 text-emerald-700",
        Interviewing: "bg-violet-100 text-violet-700",
        Rejected: "bg-rose-100 text-rose-700",
    };

    const colorClasses =
        colorClassesByStatus[status] || "bg-slate-100 text-slate-600";

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${colorClasses}`}
        >
            {status}
        </span>
    );
}
