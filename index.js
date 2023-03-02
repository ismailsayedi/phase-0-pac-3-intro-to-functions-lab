function shout(string){
    return string.toUpperCase();
    "Hello".toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
    "HELLO".toLowerCase();
}
function logShout(string="hello"){
    console.log(string.toUpperCase());
    
}
function logWhisper(string="HELLO"){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if (string === 'hello')
    return`I can\'t hear you!`
       else if (string === 'HELLO')
     return `YES INDEED!`
      else (string === `Let's have dinner together!`)
      return `I would love to!`
 }

        