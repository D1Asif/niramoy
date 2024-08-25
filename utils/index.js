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

export function getTagColor(value) {
    const lowerValue = value?.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    if (["healed", "minor", "urgent", "required"].includes(lowerValue)) {
        return "text-green-700 bg-green-100";
    } else if (["injured", "critical", ].includes(lowerValue)) {
        return "text-red-700 bg-red-100";
    } else if (["major"].includes(lowerValue)) {
        return "text-orange-700 bg-yellow-100";
    } else if (["flood"].includes(lowerValue)) {
        return "text-blue-700 bg-blue-100";
    } else if (["student movement"].includes(lowerValue)) {
        return "text-purple-700 bg-purple-100"; 
    } else {
        return "text-gray-700 bg-gray-100"
    }
}