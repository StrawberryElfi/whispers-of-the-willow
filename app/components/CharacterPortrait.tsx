"use client";


type PortraitProps = {

character:string;

expression?:string;

};



export default function CharacterPortrait({

character,

expression="neutral"

}:PortraitProps){



if(!character){

return null;

}



let image;



if(character === "Elfaria Fleur De Willows"){


image = `/elfaria-${expression}.png`;


}

else{


image="/unknown.png";


}





return(


<div className="fixed right-10 bottom-0 w-96">


<img

src={image}

alt={character}

className="w-full object-contain"

/>


</div>


)


}