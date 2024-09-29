"use client"

import Signin from "./Components/Signin/signin";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Home() {
  const { data: session } = useSession();
  if (session && session.user) {
    redirect("/Components/Stats");
  }
  return (
    <>
      <Signin></Signin>
    </>
  );
}
