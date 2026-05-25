import {applications} from "../data/applications"
import StatusBadge from "./StatusBadge";
import { Pencil, Trash2 } from "lucide-react";

export default function ApplicationFilter() {
    return(
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-full divide-y divide-slate-200 text-sm table-auto">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Company
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Location
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Date Applied
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 bg-white">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-slate-50">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">
                                        {app.company}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                                        {app.role}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                                        {app.type}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                                        {app.location}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-center">
                                        <StatusBadge status={app.status} />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                                        {app.dateApplied}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-violet-600">
                                                <Pencil size={16} />
                                            </button>

                                            <button className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}