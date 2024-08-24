import ImageGallery from "../common/ImageGallery";
import { convertDate } from "@/utils";
import InfoItem from "./InfoItem";
import InfoSection from "./InfoSection";

export default function PatientDetails({ patient }) {
    console.log(patient);

    const personalInfo = [
        {
            title: "Name",
            value: patient?.name
        },
        {
            title: "Age",
            value: patient?.age
        },
        {
            title: "Gender",
            value: patient?.gender
        },
        {
            title: "Additional Info",
            value: patient?.description
        },
        {
            title: "Address (Patient's home)",
            value: patient?.home_address
        },
        {
            title: "Patient's Contact Number",
            value: patient?.contact_number
        },
    ]
    const medicalInfo = [
        {
            title: "Current Status (Injured/Recovered)",
            value: patient?.current_status
        },
        {
            title: "Injury/Medical Details",
            value: patient?.injury_details
        },
        {
            title: "Date of Injury",
            value: convertDate(patient?.injury_datetime)
        },
        {
            title: "Date of Admission",
            value: convertDate(patient?.admission_datetime)
        },
        {
            title: "Current Address (Hospital/Clinic)",
            value: patient?.home_address
        },
        {
            title: "Affected Body Parts",
            value: patient?.affected_body_parts.join(", ")
        },
        {
            title: "Blood Group",
            value: patient?.blood_group
        },
    ]
    const fundInfo = [
        {
            title: "Required Fund Type (Urgent/Required/Not Required)",
            value: patient?.required_fund
        },
        {
            title: "Raised fund amount (in BDT)",
            value: patient?.raised_fund_amount ?? "0"
        },
    ]
    const dataEntryInfo = [
        
    ];
    return (
        <section>
            <ImageGallery images={patient?.injury_photos} imageOf="Injury" />
            <div className=" text-slate-600 dark:text-slate-300 rounded-lg p-6 max-w-6xl mx-auto my-8 border border-black/10 dark:border-white/10">
                <InfoSection sectionHeadline="Personal Info" infoArray={personalInfo} />

                <br />

                <InfoSection sectionHeadline="Medical Info" infoArray={medicalInfo} />

                <br />

                <InfoSection sectionHeadline="Fund Info" infoArray={fundInfo} />

                <br />

                <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                    <h3 className="text-xl font-semibold text-primary">Documents</h3>
                </div>
                <div className="py-4">
                    <p className=" text-gray-400">Medical proofs, prescription, medical bills etc.</p>
                    {
                        1 > 0 ? (
                            <div className="mt-3">
                                <ImageGallery images={patient?.documents} imageOf="Document" />
                            </div>
                        ) : (
                            <h4 className="text-lg font-medium">No document available</h4>
                        )
                    }
                </div>


            </div>

        </section>
    )
}
