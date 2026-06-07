import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useApplications } from "../context/useApplications";
import Header from "../components/Header";

function AddJob() {
    const { addApplication } = useApplications();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        companyName: "",
        status: "Applied",
        companyLogo: "",
        jobTitle: "",
        applicationDate: "",
        jobType: "Full-time",
        salary: "",
        location: "Lagos, Nigeria",
        jobLink: "",
        notes: "",
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();

        const newApplication = {
            id: Date.now(),
            company: formData.companyName,
            role: formData.jobTitle,
            type: formData.jobType,
            location: formData.location,
            status: formData.status,
            dateApplied: formData.applicationDate,
            salary: formData.salary,
            jobLink: formData.jobLink,
            notes: formData.notes,
            companyLogo: formData.companyLogo,
        };

        addApplication(newApplication);
        navigate("/applications");
    }

    return (
        <div>
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                <NavLink
                    to="/applications"
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                    <ArrowLeft size={16} />
                    Back
                </NavLink>

                <Header
                    title="Add Job"
                    subtitle="Submit a new job application to your tracker"
                />
            </div>

            <form onSubmit={handleSubmit} className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="companyName"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Company Name
                        </label>
                        <input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="e.g. Flutterwave"
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="status"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Status
                        </label>
                        <select
                            id="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            name="status"
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        >
                            <option value="">Select a status</option>
                            <option>Applied</option>
                            <option>Interviewing</option>
                            <option>Offered</option>
                            <option>Rejected</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="jobTitle"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Job Title
                        </label>
                        <input
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="e.g. Frontend Developer"
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="applicationDate"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Application Date
                        </label>
                        <input
                            id="applicationDate"
                            type="date"
                            name="applicationDate"
                            value={formData.applicationDate}
                            onChange={handleInputChange}
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="jobType"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Job Type
                        </label>
                        <select
                            id="jobType"
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleInputChange}
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        >
                            <option value="">Select a job type</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                            <option>Internship</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="salary"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Salary
                        </label>
                        <input
                            id="salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="e.g. ₦500,000 or $70,000"
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="location"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Location
                        </label>
                        <select
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        >
                            <option value="">Select a location</option>
                            <option>Lagos, Nigeria</option>
                            <option>Remote</option>
                            <option>Abuja, Nigeria</option>
                            <option>Port Harcourt</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label
                            htmlFor="jobLink"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Job Link
                        </label>
                        <input
                            id="jobLink"
                            name="jobLink"
                            value={formData.jobLink}
                            onChange={handleInputChange}
                            type="url"
                            placeholder="https://example.com/job"
                            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label
                            htmlFor="notes"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Notes
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Additional notes about the job application"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-violet-600 px-4 text-sm font-medium text-white hover:bg-violet-700"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddJob;
