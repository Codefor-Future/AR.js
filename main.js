window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(e){
    document.getElementById('box').setAttribute('rotation',e.gamma+" 30 20")
}