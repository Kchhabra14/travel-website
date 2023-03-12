let navbardiv = document.querySelector('.navbar');
window.addEventListener('scroll', ()=> {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
    {
        navbardiv.classList.add('navbar-cng');
    }
    else{
        navbardiv.classList.remove('navbar-cng');
    }
});

const navbarCollapseDiv = document.getElementById('nav-collapse');
const navbarShowbtn = document.getElementById('navbar-show-btn');
const navbarClosebtn = document.getElementById('nav-close-btn');

//show navbar animation
navbarShowbtn.addEventListener('click', ()=> {
    navbarCollapseDiv.classList.add('nav-collapse-rmw');
});

//hide navbar
navbarClosebtn.addEventListener('click', ()=> {
    navbarCollapseDiv.classList.remove('nav-collapse-rmw')
});

document.addEventListener('click', (e)=>{
    if(e.target.id != "nav-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn")
    {
        navbarCollapseDiv.classList.remove('nav-collapse-rmw');
    }  
})

// stop transition and animation during window resizing
let resizeTimer;
window.addEventListener('resize', ()=> {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=> {
        document.body.classList.remove("resize-animation-stopper");
    } , 400)
})

//play-pause video
let video = document.getElementById('video-play');
document.getElementById('video').addEventListener('click', ()=> {
    if(video.paused){
        video.play();
        document.getElementById('play-btn').style.opacity = 0;
    } else{
         video.pause();
         document.getElementById('play-btn').style.opacity= 1;
        }
})

