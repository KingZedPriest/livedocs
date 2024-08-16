import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


//Import Needed Components
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";


const page = () => {
    return (
        <main>
            <Header>
                <div className="flex w-fit items-center justify-center gap-2">
                    <p className="document.title">Share</p>
                </div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>
            <Editor />
        </main>
    );
}

export default page;