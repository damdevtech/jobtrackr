import Header from "../components/Header";
import ApplicationFilter from "../components/ApplicationFilter";
import ApplicationTable from "../components/ApplictionTable";
import ApplicationPagination from "../components/ApplicationPagination";
import { Plus } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useApplications } from "../context/useApplications";

function Applications() {
    const { applications } = useApplications();

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Statuses");
    const [typeFilter, setTypeFilter] = useState("All Types");
    const [locationFilter, setLocationFilter] = useState("All Locations");
    const [currentPage, setCurrentPage] = useState(1);

    function updateSearchTerm(value) {
        setSearchTerm(value);
        setCurrentPage(1);
    }

    function updateStatusFilter(value) {
        setStatusFilter(value);
        setCurrentPage(1);
    }

    function updateTypeFilter(value) {
        setTypeFilter(value);
        setCurrentPage(1);
    }

    function updateLocationFilter(value) {
        setLocationFilter(value);
        setCurrentPage(1);
    }

    const itemsPerPage = 10;

    const filteredApplications = applications.filter((app) => {
        const matchesSearch =
            app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.role.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === "All Statuses" || app.status === statusFilter;

        const matchesType = typeFilter === "All Types" || app.type === typeFilter;

        const matchesLocation =
            locationFilter === "All Locations" || app.location === locationFilter;

        return matchesSearch && matchesStatus && matchesType && matchesLocation;
    });

    const totalPages = Math.max(
        1,
        Math.ceil(filteredApplications.length / itemsPerPage)
    );

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePageChange = (page) => {
        setCurrentPage(() => Math.min(Math.max(page, 1), totalPages));
    };

    function clearFilters() {
        setSearchTerm("");
        setStatusFilter("All Statuses");
        setTypeFilter("All Types");
        setLocationFilter("All Locations");
    }
    return (
        <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Header
                    title="Applications"
                    subtitle="Manage and track all your job applications"
                />

                <NavLink
                    to="/AddJob"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 text-sm font-medium text-white hover:bg-violet-700"
                >
                    <Plus size={16} />
                    Add New Job
                </NavLink>
            </div>

            <ApplicationFilter
                searchTerm={searchTerm}
                setSearchTerm={updateSearchTerm}
                statusFilter={statusFilter}
                setStatusFilter={updateStatusFilter}
                typeFilter={typeFilter}
                setTypeFilter={updateTypeFilter}
                locationFilter={locationFilter}
                setLocationFilter={updateLocationFilter}
                clearFilters={clearFilters}
            />

            <ApplicationTable
                applications={filteredApplications}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />

            <ApplicationPagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
                total={filteredApplications.length}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Applications;
