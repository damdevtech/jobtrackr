import { useMemo, useState } from "react";
import { CheckCircle, Target, TrendingUp, XCircle } from "lucide-react";
import {
    AnalyticsInsights,
    BarChart,
    DonutChart,
    LineChart,
    MetricCard,
} from "../components/AnalyticsCharts";
import Header from "../components/Header";
import { useApplications } from "../context/useApplications";
import {
    filterApplicationsByPeriod,
    formatPercent,
    getApplicationAnalytics,
} from "../utils/applicationAnalytics";

const filterOptions = [
    { label: "This Year", value: "year" },
    { label: "This Month", value: "month" },
    { label: "All Time", value: "all" },
];

function Statistics() {
    const { applications } = useApplications();
    const [period, setPeriod] = useState("year");

    const filteredApplications = useMemo(
        () => filterApplicationsByPeriod(applications, period),
        [applications, period]
    );

    const analytics = useMemo(
        () => getApplicationAnalytics(filteredApplications),
        [filteredApplications]
    );

    return (
        <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <Header title="Statistics" subtitle="Analyze your application performance" />

                <select
                    value={period}
                    onChange={(event) => setPeriod(event.target.value)}
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 sm:w-36"
                >
                    {filterOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                    title="Response Rate"
                    value={formatPercent(analytics.responseRate)}
                    helper={`${analytics.interviews + analytics.offers + analytics.rejections} responses tracked`}
                    icon={TrendingUp}
                    tone="violet"
                />
                <MetricCard
                    title="Interview Rate"
                    value={formatPercent(analytics.interviewRate)}
                    helper={`${analytics.interviews} interview opportunities`}
                    icon={Target}
                    tone="blue"
                />
                <MetricCard
                    title="Offer Rate"
                    value={formatPercent(analytics.offerRate)}
                    helper={`${analytics.offers} successful outcomes`}
                    icon={CheckCircle}
                    tone="emerald"
                />
                <MetricCard
                    title="Rejection Rate"
                    value={formatPercent(analytics.rejectionRate)}
                    helper={`${analytics.rejections} closed applications`}
                    icon={XCircle}
                    tone="rose"
                />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-950">Applications by Type</h2>
                    <div className="mt-5">
                        <DonutChart segments={analytics.typeSegments} total={analytics.total} />
                    </div>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-950">Applications by Location</h2>
                    <div className="mt-5">
                        <BarChart items={analytics.locationItems} maxValue={analytics.maxLocationValue} />
                    </div>
                </section>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">
                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-950">Monthly Trend</h2>
                    <div className="mt-4">
                        <LineChart points={analytics.monthlyCounts} />
                    </div>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-950">Insights</h2>
                    <div className="mt-5">
                        <AnalyticsInsights analytics={analytics} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Statistics;
