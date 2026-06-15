"use client";

import { useState } from "react";
import { chapter1Story } from "../game/chapter1Story";


export default function Chapter1(){


const [index,setIndex] = useState(0);

const [playerName,setPlayerName] = useState("");

const [playerTag,setPlayerTag] = useState("");

const [elfariaIntroduced,setElfariaIntroduced] = useState(false);



const scene:any = chapter1Story[index];



function next(){


if(scene.type === "nameInput"){

return;

}



if(scene.speaker === "Elfaria"){

setElfariaIntroduced(true);

}



if(index < chapter1Story.length - 1){

setIndex(index + 1);

}

else{

window.location.href="/chapter2";

}


}




function saveName(){


localStorage.setItem(
"playerName",
playerName
);


localStorage.setItem(
"playerTag",
playerTag
);


localStorage.setItem(
"trust",
"0"
);


setIndex(index + 1);


}




function replaceName(text:string){


return text.replace(
"{name}",
playerName || "you"
);


}




function speakerName(){


if(scene.speaker === "Elfaria" && !elfariaIntroduced){

return "???";

}



if(scene.speaker === "PLAYER"){

return playerName;

}



return scene.speaker;


}




return(

<main

onClick={next}

className="
min-h-screen
bg-slate-950
text-white
flex
items-center
justify-center
p-10
cursor-pointer
"

>


<div className="
max-w-5xl
text-center
">


{

scene.speaker && (

<h2 className="
text-4xl
text-blue-300
font-bold
mb-8
">

{speakerName()}

</h2>

)

}





<p className="
text-3xl
leading-relaxed
">

{replaceName(scene.text)}

</p>






{

scene.type === "nameInput" && (

<div

onClick={(e)=>e.stopPropagation()}

className="
mt-10
space-y-5
"

>


<input

className="
text-black
p-4
rounded-lg
text-xl
w-full
"

placeholder="Your name"

maxLength={14}

value={playerName}

onChange={(e)=>
setPlayerName(e.target.value)
}

/>



<input

className="
text-black
p-4
rounded-lg
text-xl
w-full
"

placeholder="Tag (numbers only)"

maxLength={5}

value={playerTag}

onChange={(e)=>

setPlayerTag(

e.target.value.replace(/\D/g,"")

)

}


/>




<button

onClick={saveName}

disabled={!playerName || !playerTag}

className="
bg-blue-600
px-6
py-3
rounded-lg
text-xl
"

>

Confirm

</button>



</div>


)

}



</div>


</main>


)


}