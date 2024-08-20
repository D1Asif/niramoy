export function convertDate(dateString) {
    const date = new Date(dateString);

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes === 0 ? "" : `:${minutes}`;
    const period = isPM ? "PM" : "AM";

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${formattedHours}${formattedMinutes} ${period}, ${day} ${month} ${year}`;
}