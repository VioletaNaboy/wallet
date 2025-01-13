export const formatDate = (date: string) => {
    const currentDate = new Date()
    const targetDate = new Date(date)
    if (targetDate) {
        const timeDifference = currentDate.getTime() - targetDate.getTime();
        if (timeDifference < 0) return "Unknown"
        const dayDifference = timeDifference / (1000 * 3600 * 24);

        if (dayDifference < 7) {
            return targetDate.toLocaleString('en-US', { weekday: 'long' });
        }

        return targetDate.toLocaleDateString('en-US')
    } else {
        return "Unknown"
    }
}