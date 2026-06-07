import { useEffect, useState } from "react";
import { initialApplications } from "../data/applications";
import { ApplicationsContext } from "./applications-context";

export function ApplicationsContextProvider({ children }) {
    const [applications, setApplications] = useState(() => {
        const savedApplications = localStorage.getItem("jobtrackr-applications");

        if (savedApplications) {
            return JSON.parse(savedApplications);
        }

        return initialApplications;
    });

    useEffect(() => {
        localStorage.setItem(
            "jobtrackr-applications",
            JSON.stringify(applications)
        );
    }, [applications]);

    function addApplication(newApplication) {
        setApplications((prevApplications) => [
            newApplication,
            ...prevApplications,
        ]);
    }

    function deleteApplication(id) {
        setApplications((prevApplications) =>
            prevApplications.filter((application) => application.id !== id)
        );
    }

    function updateApplication(updatedApplication) {
        setApplications((prevApplications) =>
            prevApplications.map((application) =>
                application.id === updatedApplication.id
                    ? updatedApplication
                    : application
            )
        );
    }

    return (
        <ApplicationsContext.Provider value={{
            applications,
            addApplication,
            deleteApplication,
            updateApplication
        }}>
            {children}
        </ApplicationsContext.Provider>
    );
}
