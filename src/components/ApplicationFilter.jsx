import { Search, Filter } from "lucide-react";


export default function ApplicationFilter() {
    return (
        <div className="mt-4 min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm functionality">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(220px,1fr)_140px_120px_140px_auto]">
                <div className="relative col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-1 min-w-0">
                    <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="search"
                        placeholder="Search company, role..."
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                </div>

                <select className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                    <option>All Statuses</option>
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Rejected</option>
                    <option>Offered</option>
                </select>

                <select className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                    <option>Type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                </select>

                <select className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                    <option>Location</option>
                    <option>Lagos, Nigeria</option>
                    <option>Remote</option>
                    <option>Abuja, Nigeria</option>
                    <option>Port Harcourt</option>
                </select>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 md:col-span-2 lg:col-span-1 xl:col-span-1 min-w-0">
                    <Filter size={16} className="text-slate-400" />
                    Filter
                </button>
            </div>
        </div>
    )
}