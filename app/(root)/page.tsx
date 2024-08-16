import Image from "next/image";

//Import Needed Components
import Header from "@/components/Header";

//Import Needed Clerk Utils
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {

  const documents = [];

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {documents.length > 0 ? (
        <div>

        </div>
      ) : (
        <div className="document-list-empty">
          <Image src="/assets/icons/doc.svg" alt="Document" className="mx-auto" width={40} height={40} />
        </div>
      )}
    </main>
  );
}
