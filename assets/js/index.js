window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.title').classList.add('show_title');
    }, 2000)
})

const video_btn = document.querySelector('.video_btn input');
const audio = document.querySelector('.audio audio');

video_btn.addEventListener('click', function(e){
    if(e.target.checked) {
        audio.play();
    } else {
        audio.pause();
    }
})
                            
                                
                            
                        