"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home(){

  const router = useRouter();


  useEffect(()=>{

    router.push("/chapters");

  },[router]);


  return (

    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

      Loading...

    </main>

  );

}