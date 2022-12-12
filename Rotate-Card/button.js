function rotateCamping(cardId,cmpCardId,fire,camping,surf){
    var card = document.getElementById(cardId);
    var cmpCard = document.getElementById(cmpCardId);
    var fire = document.getElementById(fire);
    var camping = document.getElementById(camping);
    var surf = document.getElementById(surf);

    card.style.transform="rotateY(180deg)";
    card.style.opacity="0";

    cmpCard.style.transform="rotateY(360deg)";
    cmpCard.style.opacity="1";
    
    fire.style.transform="scale(1,1)";

    surf.style.top="-150px";
    surf.style.left="10px";

    camping.style.transform="scale(1,1)";

}
function rotateKayaking(cardId,cmpCardId,fire,camping,surf){
    var card = document.getElementById(cardId);
    var cmpCard = document.getElementById(cmpCardId);
    var fire = document.getElementById(fire);
    var camping = document.getElementById(camping);
    var surf = document.getElementById(surf);
    
    card.style.transform="rotateY(0deg)";
    card.style.opacity="1";

    cmpCard.style.transform="rotateY(180deg)";
    cmpCard.style.opacity="0";
    
    fire.style.transform="scale(0,0)";

    surf.style.top="-70px";
    surf.style.left="-70px";

    camping.style.transform="scale(0,0)";
}