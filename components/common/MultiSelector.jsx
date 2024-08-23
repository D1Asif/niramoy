import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function MultiSelector({setterFunction}) {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setterFunction(selected);
    }, [selected])

    const inputRef = useRef(null);

    const tags = [
        "Head",
        "Neck",
        "Chest",
        "Back",
        "Abdomen",
        "Arms",
        "Hands",
        "Legs",
        "Feet",
        "Pelvis",
    ];

    const filteredTags = tags.filter(
        (item) =>
            item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
            !selected.includes(item)
    );

    const isDisable =
        !query?.trim() ||
        selected.filter(
            (item) =>
                item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
        )?.length;

    return (
        <div className="relative w-full h-full text-sm">
            {selected?.length ? (
                // list of selected items
                <div className="w-full border border-black/10 dark:border-white/10 rounded-md relative text-xs flex flex-wrap gap-1 p-2 mb-2 mt-2">
                    {selected.map((tag) => {
                        return (
                            <div
                                key={tag}
                                className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500
                    flex items-center gap-2"
                            >
                                {tag}
                                <div
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() =>
                                        setSelected(selected.filter((i) => i !== tag))
                                    }
                                >
                                    <IoClose />
                                </div>
                            </div>
                        );
                    })}
                    <div className="w-full text-right">
                        <span
                            className="text-gray-400 cursor-pointer"
                            onClick={() => {
                                setSelected([]);
                                inputRef.current?.focus();
                            }}
                        >
                            Clear all
                        </span>
                    </div>
                </div>
            ) : null}

            {/* search box */}
            <div className="card flex border border-gray-400/30 rounded-md items-center justify-between px-4 py-3 w-full gap-2.5 mt-1">
                <FaSearch />
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value.trimStart())}
                    placeholder="Search or Create tags"
                    className="bg-transparent text-sm flex-1 caret-rose-600"
                    onFocus={() => setMenuOpen(true)}
                    onBlur={() => setMenuOpen(false)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !isDisable) {
                            setSelected((prev) => [...prev, query]);
                            setQuery("");
                            setMenuOpen(true);
                        }
                    }}
                />
                <button
                    className="text-sm disabled:text-gray-300 text-rose-500 disabled:cursor-not-allowed"
                    disabled={isDisable}
                    onClick={() => {
                        if (isDisable) {
                            return;
                        }
                        setSelected((prev) => [...prev, query]);
                        setQuery("");
                        inputRef.current?.focus();
                        setMenuOpen(true);
                    }}
                >
                    + Add
                </button>
            </div>

            {/* Menu's */}
            {menuOpen ? (
                <div className="card dark:bg-gray-800 bg-gray-50 border border-gray-400/30 rounded-md absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
                    <ul className="w-full">
                        {filteredTags?.length ? (
                            filteredTags.map((tag, i) => (
                                <li
                                    key={tag}
                                    className="p-2 cursor-pointer hover:bg-primary hover:text-[#171923] rounded-md w-full"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => {
                                        setMenuOpen(true);
                                        setSelected((prev) => [...prev, tag]);
                                        setQuery("");
                                    }}
                                >
                                    {tag}
                                </li>
                            ))
                        ) : (
                            <li className="p-2 text-gray-500">No options available</li>
                        )}
                    </ul>
                </div>
            ) : null}
        </div>
    );

}
