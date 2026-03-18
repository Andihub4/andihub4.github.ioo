let total = 5;

let i = 0;
let valid = [];
function topic() {
if(!valid.includes(i)) {
  
  if(i <= total) {
   
   let versus = [
     "Matthew 28:20",
     "Isaiah 6:1-3 ",
     "Revelation 11:15–19",
     "Hebrews 13:5",
     "Luke 5:8"
   ];
    
   
let  titles = [
  "Jesus walks with me...",
  "Holy holy holy...",
  "At last trumpet...",
  "The promise still stands...",
  "I'm not enough for this..."
  
  
];


let vs = i + "+versus";
document.getElementById(vs).innerText = versus[i];



  let id = i + "+title";
 let output =  document.getElementById(id);
 
 let title = titles[i] ;
 output.innerText = title;
 valid.push(i);
 i += 1;
}
}
}
setInterval(topic, 10);