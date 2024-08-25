import Header from "@/components/Header";
import PatientList from "@/components/PatientList";

export default async function Home() {
  const response = await fetch(`${process.env.API_BASE_URL}/patients`, { cache: 'no-store' });
  const data = await response.json();
  
  return (
    <div className="container">
        <Header />
        <h3 className="text-xl font-semibold py-3">List of Injured Patients</h3>
       <PatientList patients={data} />
    </div>
  );
}
