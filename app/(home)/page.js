import Header from "@/components/Header";
import PatientList from "@/components/PatientList";

export default async function Home() {
  return (
    <div className="container">
        <Header />
        <h3 className="text-xl font-semibold py-3">List of Injured Patients</h3>
       <PatientList />
    </div>
  );
}
