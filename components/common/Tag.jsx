

export default function Tag({ tagText, tagStyle }) {

    if (!!tagText) {
        return (
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${tagStyle ?? "text-green-700 bg-green-100"}`}>
                {tagText}
            </span>
        )
    } else {
        return null;
    }

}
