
// smooth scroll using locomotive
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#wrapper'),
//     smooth: true
// });

// movement of circle with cursor
function movingCircle(){
    document.addEventListener("mousemove", function(dets){
        var circle = document.querySelector("#circle");
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

// magnetic effect
function magneticEffect(){
    const icon = document.querySelector("#navr>i");
    
    // get dimensions of the icon
    let boundingRect = icon.getBoundingClientRect();
    document.addEventListener("resize", function(dets){
        // update dimensions
        boundingRect = icon.getBoundingClientRect(); 
    });

    // mousemove event
    icon.addEventListener("mousemove", function(dets){
        const mouseX = dets.pageX - boundingRect.left;
        const mouseY = dets.pageY - boundingRect.top;

        gsap.to(icon, {
            x: (mouseX - boundingRect.width / 2) * 0.4,
            y: (mouseY - boundingRect.height / 2) * 0.4,
            duration: 0.8,
            ease: "elastic.out(1,0.3)"
        });
    });

    // mouseleave event
    icon.addEventListener("mouseleave", function(){
        gsap.to(icon, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1,0.3)"
        });
    });
}

// preview videos when cursor moves on headings
function previewVideo() {
    var headelems = document.querySelectorAll("#threeheadings h1");
    var videos = [
        "https://cdn.cuberto.com/cb/home/hero/1.mp4",
        "https://cdn.cuberto.com/cb/showreel/1.mp4",
        "https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4"
    ];

    headelems.forEach(function (elem, index) {
        // when moves on heading
        elem.addEventListener("mouseenter", function (event) {
            var circle = document.querySelector("#circle");
            circle.style.width = "200px";
            circle.style.height = "200px";
            var circleTop = event.clientY - 300; // Half of the circle's height
            var circleLeft = event.clientX - 200; // Half of the circle's width
            circle.style.top = `${circleTop}px`;
            circle.style.left = `${circleLeft}px`;

            // Clear the circle content
            circle.innerHTML = "";

            // Create video element
            var video = document.createElement("video");
            video.src = videos[index]; // Load corresponding video based on index
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.style.width = "100%";
            video.style.height = "100%";
            video.style.objectFit = "cover";

            // Apply border-radius to make the video round
            video.style.borderRadius = "50%";

            

            // append video element inside the cursor
            circle.appendChild(video);
        });

        // when leaves heading
        elem.addEventListener("mouseleave", function () {
            var circle = document.querySelector("#circle");
            circle.style.width = "12px";
            circle.style.height = "12px";
            circle.style.top = "initial";
            circle.style.left = "initial";

            // remove all the videos from the circle div
            circle.innerHTML = "";
        });
    });
}

// animated the elements to move with the cursor
// and to stop the the element on the screen
function stopandscroll(){
    gsap.to(".fleftelm",{
        y: "-500%",
        ease: Power1,
        scrollTrigger: {
            trigger: "#felements",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".last",
            scrub: 1
        }
    });
}

// calling functions
movingCircle();
magneticEffect();
previewVideo();
stopandscroll();

