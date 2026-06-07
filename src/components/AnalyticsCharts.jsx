import { BriefcaseBusiness, CheckCircle, Target, TrendingUp } from "lucide-react";
import { formatPercent } from "../utils/applicationAnalytics";

export function MetricCard({ title, value, helper, icon: Icon, tone }) {
    const tones = {
        violet: "bg-violet-100 text-violet-700",
        blue: "bg-blue-100 text-blue-700",
        emerald: "bg-emerald-100 text-emerald-700",
        rose: "bg-rose-100 text-rose-700",
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-slate-500">{title}</p>
                    <p className="mt-2 text-3xl font-bold text-slate-950">{value}</p>
                </div>

                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${tones[tone]}`}>
                    <Icon size={20} />
                </span>
            </div>

            <p className="text-sm font-medium text-emerald-600">{helper}</p>
        </div>
    );
}

export function DonutChart({ segments, total }) {
    return (
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
            <div className="relative grid h-44 w-44 shrink-0 place-items-center">
                <svg viewBox="0 0 42 42" className="h-44 w-44 -rotate-90">
                    <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="7" />
                    {segments.map((segment) => (
                        <circle
                            key={segment.label}
                            cx="21"
                            cy="21"
                            r="15.915"
                            fill="transparent"
                            stroke={segment.color}
                            strokeWidth="7"
                            strokeDasharray={`${segment.dash} ${100 - segment.dash}`}
                            strokeDashoffset={segment.offset}
                        />
                    ))}
                </svg>

                <div className="absolute text-center">
                    <p className="text-3xl font-bold text-slate-950">{total}</p>
                    <p className="text-xs font-medium text-slate-500">Total</p>
                </div>
            </div>

            <div className="w-full space-y-3">
                {segments.map((segment) => (
                    <div key={segment.label} className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2">
                            <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: segment.color }} />
                            <span className="truncate text-sm text-slate-600">{segment.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                            {segment.value} ({formatPercent(total ? (segment.value / total) * 100 : 0)})
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BarChart({ items, maxValue }) {
    return (
        <div className="flex h-72 items-end gap-4 border-b border-l border-slate-200 px-3 pt-4">
            {items.map((item) => (
                <div key={item.label} className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2">
                    <div className="flex flex-1 items-end justify-center">
                        <div
                            className="w-full max-w-14 rounded-t-lg bg-blue-500"
                            style={{ height: `${maxValue > 0 ? Math.max((item.value / maxValue) * 100, 6) : 0}%` }}
                        />
                    </div>
                    <p className="text-center text-xs font-medium text-slate-400">{item.value}</p>
                    <p className="truncate text-center text-xs font-medium text-slate-500">{item.label}</p>
                </div>
            ))}
        </div>
    );
}

export function LineChart({ points }) {
    const width = 620;
    const height = 220;
    const padding = 24;
    const maxValue = Math.max(...points.map((point) => point.value), 1);
    const step = (width - padding * 2) / Math.max(points.length - 1, 1);
    const coordinates = points.map((point, index) => {
        const x = padding + index * step;
        const y = height - padding - (point.value / maxValue) * (height - padding * 2);
        return { ...point, x, y };
    });
    const path = coordinates.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
    const fillPath = `${path} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

    return (
        <div className="overflow-hidden">
            <svg viewBox={`0 0 ${width} ${height}`} className="h-64 w-full">
                <defs>
                    <linearGradient id="trendGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#5b35f2" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#5b35f2" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {[0, 1, 2, 3].map((line) => {
                    const y = padding + line * ((height - padding * 2) / 3);
                    return <line key={line} x1={padding} x2={width - padding} y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="4 6" />;
                })}
                <path d={fillPath} fill="url(#trendGradient)" />
                <path d={path} fill="none" stroke="#5b35f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                {coordinates.map((point) => (
                    <circle key={point.label} cx={point.x} cy={point.y} r="4" fill="#5b35f2" />
                ))}
            </svg>
            <div className="grid grid-cols-12 gap-1 px-2">
                {points.map((point) => (
                    <span key={point.label} className="text-center text-xs font-medium text-slate-400">
                        {point.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function InsightItem({ icon: Icon, color, text }) {
    return (
        <div className="flex items-start gap-3">
            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${color}`}>
                <Icon size={14} />
            </span>
            <p className="text-sm font-medium leading-6 text-slate-600">{text}</p>
        </div>
    );
}

export function AnalyticsInsights({ analytics }) {
    return (
        <div className="space-y-4">
            <InsightItem
                icon={BriefcaseBusiness}
                color="bg-violet-100 text-violet-700"
                text={`${analytics.total} applications are currently tracked.`}
            />
            <InsightItem
                icon={Target}
                color="bg-blue-100 text-blue-700"
                text={`${analytics.bestLocation?.label || "No location"} has the highest application count.`}
            />
            <InsightItem
                icon={CheckCircle}
                color="bg-emerald-100 text-emerald-700"
                text={`${analytics.dominantType?.label || "No job type"} roles make up the largest share.`}
            />
            <InsightItem
                icon={TrendingUp}
                color="bg-amber-100 text-amber-700"
                text={`${formatPercent(analytics.interviewRate)} of applications have reached interview stage.`}
            />
        </div>
    );
}
