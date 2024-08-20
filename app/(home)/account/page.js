import { auth } from "@/auth";
import ProfileCard from "@/components/account/ProfileCard";
import { redirect } from "next/navigation";

export default async function AccountPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login?flag=login_required")
    }

    return (
        <div className="container">
            <ProfileCard />
        </div>
    );
}
