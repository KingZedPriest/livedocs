"use client"

import { ReactNode } from "react";
import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react/suspense";


const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
}

export default Provider;