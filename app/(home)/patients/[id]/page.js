import PatientDetails from "@/components/PatientDetails/PatientDetails";

export default async function PatientDetailsPage({params: {id}}) {
  const response = await fetch(`${process.env.API_BASE_URL}/patients/${id}`);
  const data = await response.json();

  return (
    <div className="container">
        <PatientDetails patient={data} />
    </div>
  )
}
