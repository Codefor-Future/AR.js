window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(e){
    document.getElementById('box').setAttribute('rotation',e.alpha+" "+"30 20")
}