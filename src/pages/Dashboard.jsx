import { useMemo } from "react";
import { CheckCircle, Target, TrendingUp, XCircle } from "lucide-react";
import {
    DonutChart,
    LineChart,
    MetricCard,
} from "../components/AnalyticsCharts";
import Header from "../components/Header";
import RecentApplications from "../components/RecentApplications";
import { useApplications } from "../context/useApplications";
import { formatPercent, getApplicationAnalytics } from "../utils/applicationAnalytics";

function Dashboard() {
    const { applications } = useApplications();

    const analytics = useMemo(
        () => getApplicationAnalytics(applications),
        [applications]
    );

    return (
        <main className="min-w-0">
            <Header title="Dashboard" subtitle="Overview of your job application journey" />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

            <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)]">
                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-950">Monthly Trend</h2>
                    <div className="mt-4">
                        <LineChart points={analytics.monthlyCounts} />
                    </div>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-slate-950">Applications by Status</h2>
                    <div className="mt-5">
                        <DonutChart segments={analytics.statusSegments} total={analytics.total} />
                    </div>
                </section>
            </div>

            <RecentApplications />
        </main>
    );
}

export default Dashboard;
