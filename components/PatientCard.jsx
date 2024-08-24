import Image from "next/image";
import Link from "next/link";
import Tag from "./common/Tag";
import { getTagColor } from "@/utils";


export default function PatientCard({ patient }) {
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image
                className="h-[300px] w-full object-cover rounded-md mx-auto"
                src={(patient.injury_photos === null || patient.injury_photos.length === 0) ? "/no-image.jpg" : patient.injury_photos[0]}
                alt={patient?.name}
                height={300}
                width={300}
            />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{patient?.name}</h3>
                <p className="text-[#575A6E] dark:text-[#9698a8] text-md mb-2 truncate">
                    {patient?.injury_details}
                </p>
                <div className="flex flex-wrap gap-2">
                    <Tag
                        tagText={patient?.current_status}
                        tagStyle={getTagColor(patient?.current_status)}
                    />
                    <Tag
                        tagText={patient?.injury_type}
                        tagStyle={getTagColor(patient?.injury_type)}
                    />
                    <Tag
                        tagText={(patient?.required_fund && patient?.required_fund !== "Not Required") ? "Fund Required" : null}
                        tagStyle={getTagColor(patient?.required_fund)}
                    />
                    <Tag
                        tagText={patient?.crisis_type}
                        tagStyle={getTagColor(patient?.crisis_type)}
                    />
                </div>
                <div className="flex items-center space-x-1 mb-5">
                </div>
                <Link className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`/patients/${patient?.id}`}>
                    {/* <Image src="/tag.svg" alt="Tag" width={14} height={14} /> */}
                    <span>Details</span>
                </Link>
            </figcaption>
        </figure>
    )
}
