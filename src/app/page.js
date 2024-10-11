"use client"

import Signin from "./Components/Signin/signin";
import { redirect } from "next/navigation";
export default function Home() {

  console.log("wow");
  return (
    <>
      <Signin></Signin>
    </>
  );
}
