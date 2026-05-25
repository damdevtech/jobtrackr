import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ApplicationPagination({ total }) {
    return (
        <div className="flex flex-col border-t border-slate-200 mt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
                Showing 1 to {Math.min(10, total)} of {total} applications
            </p>

            <div className="flex items-center gap-2">
                <button className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-300 px-1 text-sm font-medium text-slate-500 hover:bg-slate-50">
                    <ChevronLeft size={16} />
                </button>

                <button className="h-9 w-9 rounded-lg bg-violet-600 text-sm font-medium text-white">
                    1
                </button>

                <button className="h-9 w-9 rounded-lg border border-slate-300 text-xs font-medium text-slate-600 hover:bg-slate-50">
                    2
                </button>

                <button className="h-9 w-9 rounded-lg border border-slate-300 text-xs font-medium text-slate-600 hover:bg-slate-50">
                    3
                </button>

                <button className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-300 px-1 text-sm font-medium text-slate-600 hover:bg-slate-50">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}