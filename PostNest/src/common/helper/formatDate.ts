
export const formatDate = (date: string) => {
    const newDate = new Date(date);
    const current = new Date();

    if (isNaN(newDate.getTime()) || date == null) {
        return {
            fullDate: '',
        }
    }

    const currentYear = current.getFullYear();

    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const day = String(newDate.getDate()).padStart(2, '0');

    if (year !== currentYear) {
        return {
            fullDate: `${day}.${month}.${year}`
        }
    }
    else if (current.getDate() == newDate.getDate()) {
        const hours = String(newDate.getHours()).padStart(2, '0');
        const minutes = String(newDate.getMinutes()).padStart(2, '0');

        return {
            fullDate: `${hours}:${minutes}`
        }
    }

    return {
        fullDate: `${day}.${month}`,
    }
}