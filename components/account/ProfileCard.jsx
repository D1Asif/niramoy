import PatientListTable from "./PatientListTable";
import UserProfileInfo from "./UserProfileInfo";
import DataEntryUserProfileInfo from "./DataEntryUserProfileInfo";

export default function ProfileCard() {
    return (
        <div className=" text-slate-600 dark:text-slate-300 rounded-lg p-6 max-w-4xl mx-auto my-8 border border-black/10 dark:border-white/10">
            <UserProfileInfo />
            <DataEntryUserProfileInfo />
            <PatientListTable />
        </div>
    )
}
