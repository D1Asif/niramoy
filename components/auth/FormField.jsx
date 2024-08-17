export default function FormField({ type, name, id, handleChange, error, label, placeholder }) {
    return (
        <div>
            <label htmlFor={id} className="text-gray-600 mb-2 block">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder={placeholder}
                onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm leading-6">{error}</p>}
        </div>
    )
}