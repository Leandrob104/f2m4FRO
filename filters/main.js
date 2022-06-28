let allGames=document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

//de filters worden op checked gezet wanneer de website inlaad
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

//de website begint bovenaan elke keer als je refreshed
window.scrollTo(0,0);

//hierdoor kan je pas na 1,5s scrollen zodat je de onderkant van de animatie niet ziet
setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto"
}, 1500);


//de filters: als je de checkbox op aan zet (waar hij vanzelf al op begint) kijkt hij of je op bijvoorbeeld bij de eerste op rpg heb geklikt,
//en dan laat hij die dus zien, als je hem uitklikt zet hij de style op none en word het plaatje niet laten zien.

//rpg filter
let rpgFilter = document.getElementById ("checkbox-rpg")
rpgFilter.onchange = function(){
    if(rpgFilter.checked === true){
        for(let i =0; 1 < allGames.length; i++){
            if(allGames[i].dataset.category === "rpg"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames [i].dataset.category === "rpg"){
                allGames [i].style.display = "none";
            }
        }
    }
}


//sports filter
let sportFilter = document.getElementById ("checkbox-sport")
sportFilter.onchange = function(){
    if(sportFilter.checked === true){
        for(let i = 0; 1 < allGames.length; i++){
            if(allGames[i].dataset.category === "sport"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames [i].dataset.category === "sport"){
                allGames [i].style.display = "none";
            }
        }
    }
}


//platform filter
let platformFilter = document.getElementById ("checkbox-platform")
platformFilter.onchange = function(){
    if(platformFilter.checked === true){
        for(let i = 0; 1 < allGames.length; i++){
            if(allGames[i].dataset.category === "platform"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames [i].dataset.category === "platform"){
                allGames [i].style.display = "none";
            }
        }
    }
}
