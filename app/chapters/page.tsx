"use client";

import {useEffect, useState} from "react";


export default function Chapters(){


const [fullGame,setFullGame] = useState(false);



useEffect(()=>{

const unlocked = localStorage.getItem("fullGame");


if(unlocked === "true"){

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
title:"Old Friend, New Threat",
status:"play"
},

{
id:3,
title:"Elfaria Fleur De Willows",
status:fullGame ? "play" : "purchase"
},

{
id:4,
title:"What Will Be",
status:fullGame ? "play" : "purchase"
},

{
id:5,
title:"Betrayal of the Willow",
status:fullGame ? "play" : "purchase"
},

{
id:6,
title:"Final Battle",
status:fullGame ? "play" : "purchase"
}

];





return(

<main className="
min-h-screen
bg-slate-950
text-white
p-10
">


<h1 className="
text-5xl
font-bold
mb-10
">

Chapters

</h1>




<div className="space-y-5">


{

chapters.map(chapter=>(


<div

key={chapter.id}

className="
bg-slate-800
p-6
rounded-xl
"


>


<h2 className="
text-3xl
font-bold
">

Chapter {chapter.id}

</h2>


<p className="
text-slate-300
mb-5
">

{chapter.title}

</p>



{

chapter.status === "play" && (


<a

href={`/chapter${chapter.id}`}

className="
bg-blue-600
px-6
py-3
rounded-lg
inline-block
"


>

Play

</a>


)

}



{

chapter.status === "purchase" && (

<p className="text-yellow-400">

🔒 Full Game Required

</p>

)

}



</div>



))

}



</div>



</main>


)


}