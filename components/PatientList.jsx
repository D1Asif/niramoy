"use client"

import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
import { getPatients } from "@/actions";

export default function PatientList() {
    const [patients, setPatients] = useState([]);
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    const paramStringForApi = params.toString();

    useEffect(() => {
        const fetchMore = async () => {
            setIsLoading(true);
            try {
                const patientData = await getPatients(paramStringForApi);

                if (patientData?.length > 0) {
                    setPatients((prev) => [...prev, ...patientData])
                } else {
                    setHasMore(false)
                }
            } catch(err) {
                console.log("Error occurred while fetching data", err);
            } finally {
                setIsLoading(false)
            }
        }

        fetchMore()
    }, [paramStringForApi]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100)
                && !isLoading && hasMore
            ) {
                setPage((prev) => prev + 1);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasMore, isLoading])

    return (
        <>
            {
                patients?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
                        {
                            patients?.map(patient => (
                                <PatientCard key={patient?.id} patient={patient} />
                            ))
                        }
                    </div>
                ) : (
                    !hasMore && <div>No patient entry found.</div>
                )
            }
            {
                isLoading && <h1 className="text-center mt-6">Loading...</h1>
            }
        </>

    )
}
