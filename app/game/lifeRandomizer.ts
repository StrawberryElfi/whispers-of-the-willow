export const lives = [

{
occupation:"Office Worker",

story:
"You lived a simple life as an office worker. Every morning began with the same alarm, the same commute, and the same endless tasks waiting for you. Nothing extraordinary ever happened... but it was familiar."

},


{
occupation:"Bookstore Clerk",

story:
"You spent your days working in a quiet bookstore. Surrounded by old pages and forgotten stories, you often wondered what it would feel like to step inside one of those worlds yourself."

},


{
occupation:"Chef",

story:
"You worked as a chef. Your days were filled with heat, noise, and the endless rhythm of creating meals for others. It was exhausting, but there was comfort in knowing your work made someone happy."

},


{
occupation:"Mechanic",

story:
"You repaired machines for a living. Your hands carried the marks of your work, spending your days fixing things others had given up on."

},


{
occupation:"Teacher",

story:
"You were a teacher. Every day was spent helping others learn and grow. Your life was not exciting, but you believed even small actions could change someone's future."

},


{
occupation:"Freelancer",

story:
"You worked as a freelancer. Your days blended together between screens, messages, and late nights. You often wondered if something more was waiting somewhere beyond your ordinary routine."

}

];





export function getRandomLife(){

return lives[Math.floor(Math.random()*lives.length)];

}