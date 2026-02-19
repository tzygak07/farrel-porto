import { useState, useEffect } from "react";

const GitHubContributions = ({ username }) => {
    const [contributions, setContributions] = useState(null);
    const [tooltip, setTooltip] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
                );
                const data = await res.json();
                setContributions(data);
            } catch (err) {
                console.error("Failed to fetch contributions:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchContributions();
    }, [username]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-32">
                <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!contributions || !contributions.contributions) {
        return (
            <div className="text-xs text-zinc-400 text-center py-8">
                Unable to load contributions
            </div>
        );
    }

    // Build weeks grid from contributions
    const allDays = contributions.contributions;
    const weeks = [];
    let currentWeek = [];

    // Pad the first week if it doesn't start on Sunday
    if (allDays.length > 0) {
        const firstDay = new Date(allDays[0].date);
        const dayOfWeek = firstDay.getDay();
        for (let i = 0; i < dayOfWeek; i++) {
            currentWeek.push(null);
        }
    }

    allDays.forEach((day) => {
        currentWeek.push(day);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });
    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    const getColor = (count, level) => {
        if (count === 0)
            return "bg-zinc-100 dark:bg-zinc-800/60";
        if (level >= 4) return "bg-emerald-600 dark:bg-emerald-500";
        if (level >= 3) return "bg-emerald-500 dark:bg-emerald-400";
        if (level >= 2) return "bg-emerald-400 dark:bg-emerald-500/70";
        return "bg-emerald-200 dark:bg-emerald-700/60";
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const totalContributions = contributions.total?.lastYear ?? allDays.reduce((sum, d) => sum + d.count, 0);

    return (
        <div className="relative">
            {/* Contribution grid */}
            <div className="overflow-x-auto hide-scrollbar pb-2">
                <div className="flex gap-[2px]">
                    {weeks.map((week, wi) => (
                        <div key={wi} className="flex flex-col gap-[2px]">
                            {week.map((day, di) =>
                                day ? (
                                    <div
                                        key={di}
                                        className={`w-[9px] h-[9px] rounded-[2px] ${getColor(
                                            day.count,
                                            day.level
                                        )} cursor-pointer transition-all hover:ring-2 hover:ring-emerald-400/50 hover:scale-150`}
                                        onMouseEnter={(e) => {
                                            const rect = e.target.getBoundingClientRect();
                                            setTooltip({
                                                x: rect.left + rect.width / 2,
                                                y: rect.top,
                                                count: day.count,
                                                date: day.date,
                                            });
                                        }}
                                        onMouseLeave={() => setTooltip(null)}
                                    />
                                ) : (
                                    <div key={di} className="w-[9px] h-[9px]" />
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between mt-3">
                <span className="text-[10px] font-bold text-zinc-400">
                    {totalContributions} contributions in the last year
                </span>
                <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                    <span className="mr-1">Less</span>
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-100 dark:bg-zinc-800/60" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-200 dark:bg-emerald-700/60" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-400 dark:bg-emerald-500/70" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-500 dark:bg-emerald-400" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-600 dark:bg-emerald-500" />
                    <span className="ml-1">More</span>
                </div>
            </div>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="fixed z-[99999] px-3 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold shadow-xl pointer-events-none"
                    style={{
                        left: tooltip.x,
                        top: tooltip.y - 40,
                        transform: "translateX(-50%)",
                    }}
                >
                    <span className="text-emerald-400 dark:text-emerald-600">
                        {tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
                    </span>{" "}
                    on {formatDate(tooltip.date)}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-2 h-2 rotate-45 bg-zinc-900 dark:bg-zinc-100"
                    />
                </div>
            )}
        </div>
    );
};

export default GitHubContributions;
