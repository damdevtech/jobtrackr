export default function StatusBadge({ status }) {
    let colorClasses = "";

    switch (status) {
        case "Applied":
            colorClasses = "bg-slate-100 text-slate-600";
            break;
        case "Offered":
            colorClasses = "bg-emerald-100 text-emerald-700";
            break;
        case "Interviewing":
            colorClasses = "bg-violet-100 text-violet-700";
            break;
        case "Rejected":
            colorClasses = "bg-rose-100 text-rose-700";
            break;
        default:
            colorClasses = "bg-slate-100 text-slate-600";
    }

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${colorClasses}`}
        >
            {status}
        </span>
    );
}