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

    // return `${formattedHours}${formattedMinutes} ${period}, ${day} ${month} ${year}`;
    return `${day} ${month} ${year}`;
}

export function convertDateTime(dateString) {
    // Parse the date string and ensure it is in local time
    const date = new Date(dateString + 'Z'); // Add 'Z' to the end of the string to treat it as UTC

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    // Get local hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine if it's AM or PM
    const isPM = hours >= 12;
    const formattedHours = hours % 12 || 12; // Convert 0 hours to 12 for 12 AM/PM
    const formattedMinutes = minutes === 0 ? "" : `:${minutes.toString().padStart(2, '0')}`;
    const period = isPM ? "PM" : "AM";

    // Get the local day, month, and year
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${formattedHours}${formattedMinutes} ${period}, ${day} ${month} ${year}`;
}

export function getTagColor(value) {
    const lowerValue = value?.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    if (["healed", "minor", "urgent", "fund req."].includes(lowerValue)) {
        return "green";
    } else if (["injured", "critical",].includes(lowerValue)) {
        return "red";
    } else if (["major"].includes(lowerValue)) {
        return "yellow";
    } else if (["flood"].includes(lowerValue)) {
        return "blue";
    } else if (["movement"].includes(lowerValue)) {
        return "purple";
    } else {
        return "none";
    }
}