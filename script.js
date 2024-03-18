// movement of circle with cursor
function movingCircle(){
    document.addEventListener("mousemove", function(dets){
        var circle = document.querySelector("#circle");
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

// calling functions
movingCircle();