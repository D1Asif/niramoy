import { getTagColor } from "@/utils";


export default function Tag({ tagText }) {
    const color = getTagColor(tagText);

    let style = "px-3 py-1 text-sm font-medium rounded-full text-gray-700 bg-gray-100";

    console.log(tagText);

    if (color === "green") {
        console.log("green");
        style = "px-3 py-1 text-sm font-medium rounded-full text-green-700 bg-green-100"
    }

    if (color === "red") {
        console.log("red");
        style = "px-3 py-1 text-sm font-medium rounded-full text-red-700 bg-red-100"
    }

    if (color === "yellow") {
        console.log("yellow");
        style = "px-3 py-1 text-sm font-medium rounded-full text-orange-700 bg-yellow-100"
    }
    if (color === "purple") {
        console.log("purple");
        style = "px-3 py-1 text-sm font-medium rounded-full text-purple-700 bg-purple-100"
    }
    if (color === "blue") {
        console.log("purple");
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
