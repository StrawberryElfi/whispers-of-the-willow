"use client";

console.log("CHAPTER PAGE LOADED");

import { useEffect, useState } from "react";


export default function Chapters() {


  const [fullGame, setFullGame] = useState(false);



  useEffect(() => {


    const unlocked = localStorage.getItem("fullGame");


    if (unlocked === "true") {

      setFullGame(true);

    }


  },[]);




  const chapters = [


    {
      id:1,
      title:"The Whispering Willows",
      status:"play"
    },


    {
      id:2,
      title:"The Forgotten Path",
      status:"play"
    },


    {
      id:3,
      title:"The Warden's Memory",
      status: fullGame ? "play" : "locked"
    },


    {
      id:4,
      title:"The Cursed Forest",
      status: fullGame ? "play" : "locked"
    },


    {
      id:5,
      title:"Elfaria's Truth",
      status: fullGame ? "play" : "purchase"
    },


    {
      id:6,
      title:"The Final Willow",
      status: fullGame ? "play" : "purchase"
    }


  ];





  return (


    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-5xl font-bold mb-8">

        Chapters

      </h1>




      <div className="space-y-5">



        {chapters.map((chapter)=>(


          <div

          key={chapter.id}

          className="bg-slate-800 p-6 rounded-lg"

          >



            <h2 className="text-3xl font-bold">

              Chapter {chapter.id}

            </h2>



            <p className="text-slate-300 mb-4">

              {chapter.title}

            </p>





            {chapter.status === "play" && (


              <a

              href={`/chapter${chapter.id}`}

              className="inline-block bg-blue-600 px-6 py-3 rounded-lg"

              >

                Play

              </a>


            )}






            {chapter.status === "locked" && (


              <p className="text-red-400">

                🔒 Complete previous chapter

              </p>


            )}






            {chapter.status === "purchase" && (


              <p className="text-yellow-400">

                🔒 Full Game Required

              </p>


            )}



          </div>


        ))}



      </div>


    </main>


  );


}