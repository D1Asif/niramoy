import PatientList from "@/components/PatientList";

export default function Home() {
  return (
    <div className="container">
        <h1 className="py-3 font-semibold text-xl">List of Patients</h1>
       <PatientList />
    </div>
  );
}
