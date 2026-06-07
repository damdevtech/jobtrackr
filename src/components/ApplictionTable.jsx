import StatusBadge from "./StatusBadge";
import { Pencil, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useApplications } from "../context/useApplications";


export default function ApplicationTable({
    applications = [],
    currentPage = 1,
    itemsPerPage = 10,
}) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedApplications = applications.slice(startIndex, endIndex);

    const { deleteApplication } = useApplications();

    return (
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] divide-y divide-slate-200 text-sm">
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
                        {paginatedApplications.map((app) => (
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
                                        <NavLink
                                            to={`/applications/${app.id}/edit`}
                                            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-violet-600"
                                        >
                                            <Pencil size={16} />
                                        </NavLink>

                                        <button
                                            onClick={() => {
                                                const shouldDelete = window.confirm(
                                                    `Delete ${app.company} application?`
                                                );

                                                if (shouldDelete) {
                                                    deleteApplication(app.id);
                                                }
                                            }}
                                            className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {paginatedApplications.length === 0 && (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="px-6 py-10 text-center text-sm text-slate-500"
                                >
                                    No applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
