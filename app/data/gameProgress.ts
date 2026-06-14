export function getChapterProgress(){

  if(typeof window === "undefined"){
    return 1;
  }


  const progress =
    localStorage.getItem("chapterProgress");


  return progress
    ? Number(progress)
    : 1;

}



export function unlockChapter(chapter:number){

  if(typeof window === "undefined"){
    return;
  }


  localStorage.setItem(
    "chapterProgress",
    String(chapter)
  );

}