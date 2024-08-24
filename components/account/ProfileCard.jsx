import PatientListTable from "./PatientListTable";
import UserProfileInfo from "./UserProfileInfo";
import DataEntryUserProfileInfo from "./DataEntryUserProfileInfo";

export default async function ProfileCard({ user }) {

    console.log(user);

    const res1 = await fetch(`${process.env.API_BASE_URL}/data-entry-users?email=${user.email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.authToken}`
        }
    });

    const dataEntryUser = await res1.json();

    console.log(dataEntryUser, "yoooo");

    const res2 = await fetch(`${process.env.API_BASE_URL}/patients?created_by=${user.username}`);

    const userPatients = await res2.json();

    return (
        <div className=" text-slate-600 dark:text-slate-300 rounded-lg p-6 max-w-4xl mx-auto my-8 border border-black/10 dark:border-white/10">
            <UserProfileInfo />
            <DataEntryUserProfileInfo user={user} dataEntryUser={dataEntryUser[0]} />
            {
                (dataEntryUser?.length > 0) && (
                    <PatientListTable userPatients={userPatients} />
                )
            }
        </div>
    )
}
