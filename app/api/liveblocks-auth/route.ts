import { liveblocks } from "@/lib/liveblocks";
import { redirect } from "next/navigation";

//Fetch current user from Clerk
import { currentUser } from "@clerk/nextjs/server";

//Import Needed Utils
import { getUserColor } from "@/lib/utils";

export async function POST(request: Request) {

    //Fetch the current clerk user and redirect if the user does not exist
    const clerkUser = await currentUser();
    if (!clerkUser) redirect("/sign-in");

    const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser

    // Get the current user from your database
    const user = {
        id,
        info: {
            id,
            name: `${firstName} ${lastName}`,
            email: emailAddresses[0].emailAddress,
            avatar: imageUrl,
            color: getUserColor(id)
        }
    };

    // Identify the user and return the result
    const { status, body } = await liveblocks.identifyUser(
        {
            userId: user.info.email,
            groupIds: []
        },
        { userInfo: user.info },
    );

    return new Response(body, { status });
}