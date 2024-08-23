export default function FormField({ type, name, id, handleChange, error, label, placeholder, options, required }) {
    return (
        <div>
            <label htmlFor={id} className="text-gray-600 mb-2 block">
                {label}
            </label>
            {type === 'select' ? (
                <select
                    name={name}
                    id={id}
                    className="block w-full border border-gray-400/30 px-4 py-3 text-sm rounded focus:ring-0 focus:dark:border-white placeholder-gray-400 bg-transparent"
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <option key={option} value={option} className="text-black" >
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    name={name}
                    id={id}
                    className="block w-full border border-gray-400/30 px-4 py-3 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400 bg-transparent"
                    placeholder={placeholder}
                    onChange={handleChange}
                    required={required}
                />
            )}
            {error && <p className="text-red-500 text-sm leading-6">{error}</p>}
        </div>
    )
}