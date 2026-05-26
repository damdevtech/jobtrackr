import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ApplicationPagination({ currentPage, totalPages, total, itemsPerPage, onNextPage, onPreviousPage, onPageChange }) {
    const startIndex = total === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, total);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex flex-col border-t border-slate-200 mt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
                Showing {startIndex} to {endIndex} of {total} applications
            </p>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={onPreviousPage}
                    disabled={currentPage <= 1}
                    className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-300 px-1 text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <ChevronLeft size={16} />
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        className={`h-9 w-9 rounded-lg text-sm font-medium ${page === currentPage ? "bg-violet-600 text-white" : "border border-slate-300 text-slate-600 hover:bg-slate-50"}`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    type="button"
                    onClick={onNextPage}
                    disabled={currentPage >= totalPages}
                    className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-300 px-1 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}