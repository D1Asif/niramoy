import { auth } from "@/auth";

export default async function UserProfileInfo() {
    const session = await auth();

    return (
        <>
            {/* My Profile Section */}
            <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
                <h3 className="text-xl font-semibold text-primary">User Profile</h3>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div>
                    <p className="text-gray-400">Username</p>
                    <h4 className="text-lg font-medium">{session?.user?.username}</h4>
                </div>
                <div>
                    <p className="text-gray-400">Email</p>
                    <h4 className="text-lg font-medium">{session?.user?.email}</h4>
                </div>
            </div>
            
            <br />
        </>
    )
}
