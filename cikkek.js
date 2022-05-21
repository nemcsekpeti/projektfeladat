const cikkek = [];

window.addEventListener("load", init ) 
function $(elem) {
    return document.querySelectorAll(elem)
  }
  function ID(elem) {
    return document.getElementById(elem);
  }
  function CLASS(elem) {
    return document.getElementsByClassName(elem);
  }
function init(){
  for (let index = 0; index <3; index++) {
  CLASS('gomb')[i].addEventListener('click', megjelenites, false)
    
  }
  
}


function init() {
    
    let fajl = "cikkgy.json";
    
    
    fetch(fajl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.cikkek);
            
            
            data.cikkek.forEach((cikk) => {
                cikkek.push(cikk);
            });
            
            cikkValaszto(cikkek);
            megjelenites(cikkek);
        })
        .catch((err) => {

            console.log(err);
        });
    
};



function megjelenites(cikkek) {
    const szuloelem=document.querySelector("main");
    
    
  
    
    cikkek.forEach(function(cikk) {
        
        szuloelem.innerHTML += "<br>"; 
        for (const key in cikk) { 
        if(key.includes("focim")){
          szuloelem.innerHTML+= `<h1> ${cikk[key]}</h1>`
            
            
          }  
        else if(key.includes("alcim")){
          szuloelem.innerHTML += `<h4> ${cikk[key]}</h4>`
          }
        else if(key.includes("bekezdes")){
          szuloelem.innerHTML += `<p> ${cikk[key]}</p>`
          }
        else if(key.includes("kep")){
          szuloelem.innerHTML += '<img src=" '+cikk[key]+ '" >'
          }
        else if(key.includes("cim2")){ 
            szuloelem.innerHTML += `<h4> ${cikk[key]}</h4>`
            }
        else if(key.includes("felsorolas"))
            {        
              for (let index = 0; index < cikk.felsorolas.length; index++) {
                szuloelem.innerHTML+= '<ul>'
                szuloelem.innerHTML+= `<li> ${cikk.felsorolas[index]}</li>`
                szuloelem.innerHTML+= '</ul>'
              }
            }
         } 
        })
    }

 function cikkValaszto(cikkek)    {
  const szuloelem=document.querySelector("main");
    
    
  cikkek.forEach(function (cikk) {
    szuloelem.innerHTML += "<br>"; 
    
  for (const key in cikk) {

      if(key.includes("focim")){
        szuloelem.innerHTML  += `<h1> ${cikk[key]}</h1>`
      }
      else if(key.includes("alcim")){
        szuloelem.innerHTML += `<h4> ${cikk[key]}</h4>`
      }
      else if(key.includes("kattintas")){
        szuloelem.innerHTML += `<button class="gomb"> ${cikk[key]}</button>`
      }


      
    
      
      
    }

    
  

  
  
  })
  
}  
function hivas () {
  for (let index = 0; index < 2; index++) {
    CLASS('gomb')[i].addEventListener('click', megjelenites, false)
    
  }
  
}




 

