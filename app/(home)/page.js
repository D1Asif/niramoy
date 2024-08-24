import Header from "@/components/Header";
import PatientList from "@/components/PatientList";

export default async function Home() {
  const response = await fetch(`${process.env.API_BASE_URL}/patients`);
  const data = await response.json();
  
  return (
    <div className="container">
        <Header />
        <h1 className="py-3 font-semibold text-xl">List of Injured Patients</h1>
       <PatientList patients={data} />
    </div>
  );
}
