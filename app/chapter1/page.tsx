"use client";


import {useState} from "react";

import {chapter1Story} from "../game/chapter1Story";



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





if(

scene.speaker === "Elfaria" ||

scene.speaker === "Elfaria Fleur De Willows"

){

setElfariaIntroduced(true);

}





if(index < chapter1Story.length - 1){

setIndex(index + 1);

}

else{


window.location.href="/chapter2";


}



}







function confirmName(){



if(playerName.trim()===""){

return;

}



localStorage.setItem(

"playerName",

playerName

);



localStorage.setItem(

"playerTag",

playerTag

);



setIndex(index + 1);



}







function speaker(){



if(

(scene.speaker === "Elfaria" ||

scene.speaker === "Elfaria Fleur De Willows")

&&

!elfariaIntroduced

){


return "???";


}



if(scene.speaker==="PLAYER"){

return playerName;

}



return scene.speaker;



}







function text(){



return scene.text.replace(

"{name}",

playerName || "you"

);



}








return(



<div


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



<div

className="

max-w-5xl

text-center

"


>





{

scene.speaker && (


<h2

className="

text-4xl

font-bold

text-blue-300

mb-8

"


>

{speaker()}

</h2>



)

}








<p

className="

text-3xl

leading-relaxed

"


>

{text()}

</p>









{

scene.type === "nameInput" && (



<div

onClick={(e)=>e.stopPropagation()}

className="

mt-10

space-y-6

"


>





<input


autoFocus


className="

text-black

text-2xl

p-4

rounded-lg

w-full

"


placeholder="Enter your name"



value={playerName}



onChange={(e)=>


setPlayerName(e.target.value)

}



/>







<input


className="

text-black

text-2xl

p-4

rounded-lg

w-full

"


placeholder="Tag (numbers only)"



value={playerTag}



onChange={(e)=>


setPlayerTag(

e.target.value.replace(/\D/g,"")

)


}



/>








<button


onClick={(e)=>{


e.stopPropagation();

confirmName();


}}



className="

bg-blue-600

px-8

py-4

rounded-xl

text-xl

"


>


Confirm



</button>






</div>



)



}







</div>






</div>



)



}