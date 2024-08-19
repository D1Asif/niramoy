import Image from "next/image";
import ImageGallery from "../common/ImageGallery";

export default function PatientDetails({patient}) {
    
    return (
        <section>
            <ImageGallery images={['/patient1.jpg', '/patient2.jpg']} imageOf="Injury" />

            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Personal Info
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Name : John Doe</li>
                    <li>Age : 20</li>
                    <li>Gender : Male</li>
                    <li>Additional Info : Abcd</li>
                    <li>Address (Home) : Abcd</li>
                    <li>Contact Number : 0198827161</li>
                </ul>
            </div>
            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Medical Info
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Current status (injured/recovered) : Injured</li>
                    <li>Date and Time of Admission: 21 July</li>
                    <li>Date and Time of Injury: 20 July</li>
                    <li>Hospital/clinic (currently registered in) : Dhaka Medical College </li>
                    <li>Affected Body Parts : Head, Shoulder </li>
                </ul>
            </div>
            <div className="mt-5 border-b-2 border-gray-400/20 md:mx-40 text-slate-600 dark:text-slate-300">
                <h2 className="font-bold text-2xl">
                    Funding Details
                </h2>
                <ul className="space-y-2 my-8">
                    <li>Required fund type (Urgent/Required/Not required) : Required</li>
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
                <ImageGallery images={['/patient1.jpg', '/patient2.jpg']} imageOf="Document" />
            </div>
        </section>
    )
}
