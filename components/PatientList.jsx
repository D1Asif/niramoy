import PatientCard from "./PatientCard";




export default function PatientList() {
    const patients = [
        {
            admission_datetime: "2023-08-16T14:30:00",
            affected_body_parts: ["Leg", "Head"],
            age: 30,
            blood_group: "O+",
            contact_number: "+8801712345678",
            created_by: "Dr. Smith",
            current_address: "City Hospital, Room 401",
            current_status: "Injured",
            data_entry_personnel: "DataEntry123",
            description: "Fractured leg and minor head injury",
            fund_reasons: ["http://example.com/prescription1.jpg"],
            gender: "Male",
            home_address: "123 Main St, Hometown",
            injury_datetime: "2023-08-15T18:00:00",
            injury_details: "Compound fracture of the tibia",
            injury_photos: ["http://example.com/image1.jpg"],
            injury_type: "Major",
            last_fund_update: "2023-08-16T14:30:00",
            medical_details: "Surgery required to set the bone",
            medical_proof: "http://example.com/medical_proof.jpg",
            name: "John Doe",
            prescription: "http://example.com/prescription.jpg",
            raised_fund_amount: 50000,
            required_fund: "Urgent",
            updated_by: "Nurse Amy"
          }
    ];
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {
                patients.map(patient => (
                    <PatientCard key={patient?.id} patient={patient} />
                ))
            }
        </div>
    )
}
