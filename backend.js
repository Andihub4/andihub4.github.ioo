let supply = 4;
let step = 0;

let validd = [];
function show() {
  
  let rid = Math.floor(Math.random() * 4);
  if (rid < supply) {
  if (!validd.includes(rid)) {
    

  let main = document.getElementById("parent_div");
  
  let template = `<div>
  
  <div onclick="closePopup('${rid}')" id="${rid}+popup" style="display: ;" class="popup">
  <div class="popup-box">
    <p id="${rid}+versus">Versus</p>
    
  </div>
</div>


  
  
  
          <audio id="${rid}">
  <source src="media/audio/${rid}/song.mp3" type="audio/mpeg">
</audio>
        <p></p>

  <nav class="menu">
    <button  class="title">
     <h5 id="${rid}+title">I am not alone, through the fire ...    </h5>
    </button>
  </nav>
  
  
  
  <nav class="menu"> <button id="${rid}+bg" style="background-image: url(media/audio/${rid}/img/0.jpg)" class="audio">


</button>

  </nav>
  
  
  <nav class="return">
   <button style="border: none;" class="menu-btn">
     <svg onclick="back('${rid}')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-rewind" viewBox="0 0 16 16">
  <path d="M9.196 8 15 4.633v6.734zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
  <path d="M1.196 8 7 4.633v6.734zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
</svg> -10
   </button>
   
      <button style="border: none;" class="menu-btn">
       
         <div id="${rid}+1">
    
  <svg onclick="play('${rid}')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg><br>

  </div>
      </button>
   
   
   
  <button style="border: none;" class="menu-btn">
   +10 <svg onclick="skip('${rid}')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fast-forward" viewBox="0 0 16 16">
  <path d="M6.804 8 1 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
  <path d="M14.804 8 9 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg>
  </button>
    
 </nav>
  

  
  
  
  
  <nav class="menuu">

    <button class="menu-btn">
      <svg onclick="versus('${rid}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg><p>Versus</p>
    </button>
    
    
    <p id="gap" >ooo</p>
     <button class="menu-btn">
<svg onclick="download('${rid}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg><p>Download</p>
     </button>
     
     
    <p id="gap" >ooo</p>
    <button class="menu-btn">
<svg onclick="meaning('${rid}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg><p>Meaning</p>
      
    </button>
    
    
    
      <p id="gap" >ooo</p>
      <button class="menu-btn">
        
      <svg id="${rid}+fav" onclick="like('${rid}')" style="color: ;"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg><p>Amen</p>
      </button>
  </nav>
      </div>
      <p></p><br>
     <p></p><br>
      `;
  
  
  
  main.innerHTML += template;
  
  
  
  validd.push(rid);
  rid += 1;
}
}
}


setInterval(show, 10);

  








//play
function play(id) {
  
bg_starter(id);









  if(id.indexOf("+") == -1) {
    
    const allAudios = document.querySelectorAll('audio');
  allAudios.forEach(audio => {
    if ( !audio.paused) {
      
    
      //here
      const playingId = audio.id;
      
      
      
      const playerdiv = playingId  + "+1";
      
      const replace = document.getElementById(playerdiv);
      
      
      
      replace.innerHTML = `<svg onclick="play('${playingId}')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg><br>`;
      
      audio.pause(); // Pause any other playing audio
       // Optional: reset to start
    }
  });
    
    
    let div_id = id + "+1";
    let div = document.getElementById(div_id);
    div.innerHTML = `<svg onclick="play('#+${id}')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
</svg>`;
    
    
  let audio = document.getElementById(id);
  audio.volume = 0.7;
  audio.play();
  
} else {
  
  
  
  let result = id.split("+")[1];
  
  
  let div_id = result + "+1";
  
  let div = document.getElementById(div_id);
  
  div.innerHTML = `  <svg onclick="play('${result}')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg><br>`;
  let audio = document.getElementById(result);
  audio.volume = 0.7;
  audio.pause();
  
}

}



function bg_starter(id) {
  
  let listen = document.getElementById("bg_start").innerText;
  if (listen == "") {
  let start = id + "+bg";
  document.getElementById("bg_start").innerText = start ;

  } else {
    document.getElementById("bg_start").innerText = "" ;
  }
  
}


let k = 0;
function animator() {
  let listener = document.getElementById("bg_start").innerText ;
  
  if(listener !== "" ) {
    
      
  let result = listener.split("+")[0];
  
    
  
   let path = `media/audio/${result}/img/${k}.jpg`;
    let image = document.getElementById(listener);
    image.style.backgroundImage = `url(${path})`;
   if (k == 8)  {
     k = 0
   }
  k +=1;  
  }
  
}

setInterval(animator, 5000);








//Skip back 10 seconds✨
function back(to) {
  let audio = document.getElementById(to);
 let now = audio.currentTime;
 audio.currentTime = now - 10;
}

//skip 10 seconds forward✨
function skip(to) {
  let audio = document.getElementById(to);
 let now = audio.currentTime;
 audio.currentTime = now + 10;
}









//Show versus ⭐
function versus(whom){

  let id = whom + "+popup";
  document.getElementById(id).style.display = "flex";
}

function closePopup(whom){
  
  let id = whom + "+popup";
  document.getElementById(id).style.display = "none";
}









//download ⭐
function download(who) {

  const a = document.createElement("a");
  a.href = `media/audio/${who}/song.mp3`;   // path to your mp3 file
  let tit = who + "+title";
  let title = document.getElementById(tit).innerText;
  
  a.download = `${title}.mp3`;     // filename for download
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

}

//download meaning txt
function meaning(what) {
  const a = document.createElement("a");
  a.href = `media/audio/${what}/meaning.txt`;   // path to your mp3 file
  let tit = what + "+title";
  let title = document.getElementById(tit).innerText;
  a.download = `${title}.txt`;     // filename for download
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}



function like(wha) {
  
  let tit = wha + "+title";
  let iconid = wha + "+fav";
  
  let title = document.getElementById(tit).innerText;
  let icon = document.getElementById(iconid);
  icon.style.color = "#39ff01";

}



