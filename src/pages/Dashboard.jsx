import Header from '../components/Header'
import RecentApplictions from '../components/RecentApplications'
import StatsCard from '../components/StatsCard'
import { ClipboardList, Users, CheckCircle, XCircle } from "lucide-react"
import { applications } from "../data/applications"


function Dashboard() {
    const totalApplications = applications.length;
    const interviews = applications.filter(
        (app) => app.status === "Interviewing"
    ).length;

    const offers = applications.filter(
        (app) => app.status === "Offered"
    ).length;

    const rejections = applications.filter(
        (app) => app.status === "Rejected"
    ).length;

    const stats = [
        {
            title: "Total Applications",
            value: totalApplications.toString(),
            change: "12% from last month",
            icon: ClipboardList,
            color: "bg-violet-100 text-violet-600"
        },
        {
            title: "Interviews",
            value: interviews.toString(),
            change: "14% from last month",
            icon: Users,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Offers",
            value: offers.toString(),
            change: "50% from last month",
            icon: CheckCircle,
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            title: "Rejections",
            value: rejections.toString(),
            change: "10% from last month",
            icon: XCircle,
            color: "bg-rose-100 text-rose-600"
        }
    ];

    const statusSummary = [
        {
            label: "Applied",
            value: applications.filter((app) => app.status === "Applied").length,
            color: "bg-slate-400",
        },
        {
            label: "Interviewing",
            value: applications.filter((app) => app.status === "Interviewing").length,
            color: "bg-violet-500",
        },
        {
            label: "Offered",
            value: applications.filter((app) => app.status === "Offered").length,
            color: "bg-emerald-500",
        },
        {
            label: "Rejected",
            value: applications.filter((app) => app.status === "Rejected").length,
            color: "bg-rose-500",
        },
    ];

    return (
        <main className="min-w-0">
            <Header title="Dashboard" subtitle="Overview of your job application journey" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatsCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        icon={stat.icon}
                        color={stat.color}
                    />
                ))}
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <h2 className="mb-4 text-sm font-semibold text-slate-900">Application Over Time</h2>
                    <div className="flex h-64 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-500">
                        Chart goes here
                    </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                    <h2 className="mb-4 text-sm font-semibold text-slate-900">Application by Status</h2>
                    <div className="space-y-4">
                        {statusSummary.map((item) => (
                            <div key={item.label} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className={`h-3 w-3 rounded-full ${item.color}`} />
                                    <span className="text-sm text-slate-600">{item.label}</span>
                                </div>

                                <span className="text-sm font-semibold text-slate-900">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <RecentApplictions />
        </main>

    );
}


export default Dashboard