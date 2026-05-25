import Header from "../components/Header";
import ApplicationFilter from "../components/ApplicationFilter";
import ApplicationTable from "../components/ApplictionTable";
import ApplicationPagination from "../components/ApplicationPagination";
import { Plus } from "lucide-react";
import { applications } from "../data/applications";
import { useState } from "react";

function Applications() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(applications.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Header
                    title="Applications"
                    subtitle="Manage and track all your job applications"
                />

                <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 text-sm font-medium text-white hover:bg-violet-700">
                    <Plus size={16} />
                    Add New Job
                </button>
            </div>

            <ApplicationFilter />

            <ApplicationTable currentPage={currentPage} itemsPerPage={itemsPerPage} />
            <ApplicationPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                total={applications.length}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
            />
        </div>
    );
}

export default Applications;