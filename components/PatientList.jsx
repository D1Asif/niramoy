import PatientCard from "./PatientCard";

export default function PatientList({ patients }) {
    
    return (
        <>
            {
                patients?.length > 0 ? (
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                        {
                            patients?.map(patient => (
                                <PatientCard key={patient?.id} patient={patient} />
                            ))
                        }
                    </div>
                ) : (
                    <div>No patient entry.</div>
                )
            }
        </>

    )
}
