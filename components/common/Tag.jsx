import { getTagColor } from "@/utils";


export default function Tag({ tagText }) {
    const color = getTagColor(tagText);

    let style = "px-3 py-1 text-sm font-medium rounded-full text-gray-700 bg-gray-100";

    if (color === "green") {
        style = "px-3 py-1 text-sm font-medium rounded-full text-green-700 bg-green-100"
    }

    if (color === "red") {
        style = "px-3 py-1 text-sm font-medium rounded-full text-red-700 bg-red-100"
    }

    if (color === "yellow") {
        style = "px-3 py-1 text-sm font-medium rounded-full text-orange-700 bg-yellow-100"
    }

    if (color === "purple") {
        style = "px-3 py-1 text-sm font-medium rounded-full text-purple-700 bg-purple-100"
    }
    
    if (color === "blue") {
        style = "px-3 py-1 text-sm font-medium rounded-full text-blue-700 bg-blue-100"
    }

    if (!!tagText) {
        return (
            <span className={style}>
                {tagText}
            </span>
        )
    } else {
        return null;
    }

}
