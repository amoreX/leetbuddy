"use client";
import Profiles from "./Components/Profiles/profiles";
import Statistics from "./Components/statistics/statistics";
import Add from "./Components/Add/add";
import "./stats.scss"
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Stats() {
  const { data: session } = useSession();

  return (
    <>
      <div id="main-container">
        <Profiles />
        <Statistics />
        <Add />
      </div>
    </>
  );
}
