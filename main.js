window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(e){
    document.getElementById('test').innerHTML= e.absolute+","+e.alpha+","+e.beta+","+e.gamma
}