import { PlayerData } from "./playerData";


export function savePlayer(player: PlayerData){

  localStorage.setItem(
    "willowTraveler",
    JSON.stringify(player)
  );

}


export function loadPlayer(){

  const data = localStorage.getItem(
    "willowTraveler"
  );


  if(!data){

    return null;

  }


  return JSON.parse(data);

}