import { Transaction } from "../types/transaction";

export const getDailyPoints = (data: Transaction[]): string => {
    if (!data || data.length === 0) return "0";

    const sortedData = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


    let totalPoints = 0;
    let prevDayPoints = 0;
    let prePrevDayPoints = 0;
    let lastProcessedDate: Date | null = null;

    sortedData.forEach((transaction) => {
        const date = new Date(transaction.date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const isSeasonStart = (day === 1 || day === 2) && [9, 12, 3, 6].includes(month);

        if (lastProcessedDate) {
            const dayDifference = Math.floor((date.getTime() - lastProcessedDate.getTime()) / (1000 * 60 * 60 * 24));

            if (dayDifference > 2) {
                prevDayPoints = 0;
                prePrevDayPoints = 0;
            } else if (dayDifference > 1) {
                prePrevDayPoints = prevDayPoints;
                prevDayPoints = 0;
            }
        }

        let dailyPoints = 0;

        if (isSeasonStart) {
            dailyPoints = day === 1 ? 2 : 3;
        } else {
            dailyPoints = Math.floor(prevDayPoints * 0.6 + prePrevDayPoints);
        }

        totalPoints += dailyPoints;

        prePrevDayPoints = prevDayPoints;
        prevDayPoints = dailyPoints;
        lastProcessedDate = date;

    });

    const points = totalPoints > 1000 ? `${(totalPoints / 1000).toFixed(1)}K` : totalPoints.toString();
    return points;
};
