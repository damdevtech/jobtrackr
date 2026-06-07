export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const typeColors = {
    "Full-time": "#5b35f2",
    "Part-time": "#3b82f6",
    Contract: "#22c55e",
    Internship: "#f59e0b",
};

export const statusColors = {
    Applied: "#64748b",
    Interviewing: "#5b35f2",
    Offered: "#22c55e",
    Rejected: "#f43f5e",
};

export function formatPercent(value) {
    if (!Number.isFinite(value)) {
        return "0%";
    }

    return `${Math.round(value * 10) / 10}%`;
}

export function parseApplicationDate(dateValue) {
    const date = new Date(dateValue);
    return Number.isNaN(date.getTime()) ? null : date;
}

export function filterApplicationsByPeriod(applications, period) {
    if (period === "all") {
        return applications;
    }

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    return applications.filter((application) => {
        const date = parseApplicationDate(application.dateApplied);

        if (!date) {
            return false;
        }

        if (period === "month") {
            return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
        }

        return date.getFullYear() === currentYear;
    });
}

function countBy(applications, key) {
    return applications.reduce((counts, application) => {
        const value = application[key] || "Unknown";
        counts[value] = (counts[value] || 0) + 1;
        return counts;
    }, {});
}

function buildDonutSegments(items, total) {
    let offset = 25;

    return items.map((item) => {
        const dash = total > 0 ? (item.value / total) * 100 : 0;
        const segment = {
            ...item,
            dash,
            offset,
        };
        offset -= dash;
        return segment;
    });
}

function buildSegments(counts, colors) {
    return Object.entries(counts)
        .map(([label, value], index) => ({
            label,
            value,
            color: colors[label] || ["#64748b", "#06b6d4", "#f43f5e"][index % 3],
        }))
        .sort((a, b) => b.value - a.value);
}

export function getApplicationAnalytics(applications) {
    const total = applications.length;
    const interviews = applications.filter((app) => app.status === "Interviewing").length;
    const offers = applications.filter((app) => app.status === "Offered").length;
    const rejections = applications.filter((app) => app.status === "Rejected").length;
    const activeResponses = interviews + offers + rejections;
    const typeSegments = buildSegments(countBy(applications, "type"), typeColors);
    const statusSegments = buildSegments(countBy(applications, "status"), statusColors);
    const locationItems = Object.entries(countBy(applications, "location"))
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 4);

    const monthlyCounts = months.map((label, monthIndex) => ({
        label,
        value: applications.filter((application) => {
            const date = parseApplicationDate(application.dateApplied);
            return date?.getMonth() === monthIndex;
        }).length,
    }));

    return {
        total,
        interviews,
        offers,
        rejections,
        responseRate: total ? (activeResponses / total) * 100 : 0,
        interviewRate: total ? (interviews / total) * 100 : 0,
        offerRate: total ? (offers / total) * 100 : 0,
        rejectionRate: total ? (rejections / total) * 100 : 0,
        typeSegments: buildDonutSegments(typeSegments, total),
        statusSegments: buildDonutSegments(statusSegments, total),
        locationItems,
        maxLocationValue: Math.max(...locationItems.map((item) => item.value), 1),
        monthlyCounts,
        bestLocation: locationItems[0],
        dominantType: typeSegments[0],
    };
}
