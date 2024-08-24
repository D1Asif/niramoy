import InfoItem from "./InfoItem";


export default function InfoSection({ sectionHeadline, infoArray }) {
    return (
        <>
            {/* Section Headline */}
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-primary">{sectionHeadline}</h3>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {
                    infoArray?.map((item) => (
                        <InfoItem
                            key={item.title}
                            title={item.title}
                            value={item.value}
                        />
                    ))
                }
            </div>
        </>
    )
}
