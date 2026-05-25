import { EllipsisVertical } from "lucide-react";
import StatusBadge from "./StatusBadge";
import {applications} from "../data/applications"
import { NavLink } from "react-router-dom";

function RecentApplications() {

    const recentApplications = applications.slice(0, 4);

    return (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                    Recent Applications
                </h2>

                <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
                    <NavLink to="/applications">
                        View All
                    </NavLink>
                </button>
            </div>
            <div className="overflow-x-auto min-w-0">
                <table className="w-full min-w-full divide-y divide-slate-200 text-sm table-auto">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Company</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Type</th>
                            <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Date Applied</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {recentApplications.map((app) => (
                            <tr key={app.id}>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">
                                    {app.company}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                                    {app.role}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                                    {app.type}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <StatusBadge status={app.status} />
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                                    {app.dateApplied}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                                        <EllipsisVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default RecentApplications;