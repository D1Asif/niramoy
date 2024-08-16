import Image from "next/image";
import Link from "next/link";


export default function PatientCard({patient}) {
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image
                className="w-full object-cover"
                src="/patient1.jpg"
                alt={patient?.name}
                height={300}
                width={300}
            />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{patient?.name}</h3>
                <p className="text-[#575A6E] text-sm mb-2 truncate">
                    category
                </p>
                <div className="flex items-center space-x-1 mb-5">
                    {/* {
                        [...Array(Math.round(movie.vote_average))].map((_item, index) => (
                            <Image key={index} src="/star.svg" width={14} height={14} alt="Star" />
                        ))
                    } */}
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
