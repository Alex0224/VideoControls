let video = document.querySelector('#video')

function play(){
    if (video.paused){
        video.play()
    } else {
        video.pause()
    }
}

function Ampliar(){
    video.style.width = '60vw'
}

function Reduzir(){
    video.style.width = '30vw'
}

function Normal(){
    video.style.width = '40vw'
}

function TelaCheia(){
    let modal = document.querySelector('#main-content')
    modal.style.display = 'block'
    modal.style.visibility = 'visible'
}

function voltar(){
    let modal = document.querySelector('#main-content')
    modal.style.display = 'none'
    modal.style.visibility = 'hidden'
}

function AumentarVolume(){
    video.volume += 0.10
}

function BaixarVolume(){
    video.volume -= 0.1
}

function Mutar(){
    if (video.volume==0) {
        video.volume = 1
    } else{
        video.volume = 0
    }
}