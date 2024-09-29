"use client";

import {  signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Stats(){
    const { data: session } = useSession();

    return(
        <div
        onClick={() => signOut({ callbackUrl: "/" })}
        >{session?.user?.name}</div>
    )
}