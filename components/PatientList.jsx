import PatientCard from "./PatientCard";

export default function PatientList({patients}) {
    console.log(patients);
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {
                patients?.map(patient => (
                    <PatientCard key={patient?.id} patient={patient} />
                ))
            }
        </div>
    )
}
