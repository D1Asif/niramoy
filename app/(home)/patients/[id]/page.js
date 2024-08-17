import PatientDetails from "@/components/PatientDetails/PatientDetails";

export default function PatientDetailsPage({params: {id}}) {
  return (
    <div className="container">
        <PatientDetails />
    </div>
  )
}
