import ImageGallery from "../common/ImageGallery";
import { convertDate } from "@/utils";

export default function PatientDetails({patient}) {
    console.log(patient);

    return (
        <section>
            <ImageGallery images={patient?.injury_photos} imageOf="Injury" />

            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Personal Info
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Name : {patient?.name}</li>
                    <li>Age : {patient?.age}</li>
                    <li>Gender : {patient?.gender}</li>
                    <li>Additional Info : Abcd</li>
                    <li>Address (Home) : {patient?.home_address}</li>
                    <li>Contact Number : {patient?.contact_number}</li>
                </ul>
            </div>
            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Medical Info
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Current status (injured/recovered) : {patient?.current_status}</li>
                    <li>Injury description : {patient?.description}</li>
                    <li>Date and Time of Admission : {convertDate(patient?.admission_datetime)}</li>
                    <li>Date and Time of Injury : {convertDate(patient?.injury_datetime)}</li>
                    <li>Current Address (Hospital/Clinic) : {patient.current_address} </li>
                    <li>Affected Body Parts : {patient.affected_body_parts.join(", ")} </li>
                    <li>Blood group : {patient?.blood_group}</li>
                </ul>
            </div>
            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Funding Details
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Required fund type (Urgent/Required/Not required) : {patient?.required_fund}</li>
                    <li>Required fund amount (in BDT) : 2100</li>
                    <li>Raised fund amount (in BDT) : 900</li>
                    <li>Reason of fund requirement : Buy medicine</li>
                </ul>
            </div>
            <div className="mt-5 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl mb-3">
                    Documents
                </h2>
                <p className="mb-3">Medical proofs, prescription, medical bills etc.</p>
                <ImageGallery images={patient?.documents} imageOf="Document" />
            </div>
        </section>
    )
}
