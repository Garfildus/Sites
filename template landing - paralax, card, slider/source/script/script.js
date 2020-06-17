const text = document.querySelector('.header-container')
const slider = document.querySelector('.slider')
const sliderPageY = document.querySelector('header').offsetHeight + document.querySelectorAll('section')[0].offsetHeight
const sliderButton = document.querySelector('.sliderButton')
const sliderImages = document.querySelectorAll('.sliderImg')
const sliderNav = document.querySelector('.sliderNav')
const sliderRight = document.querySelector('.sliderRight')

window.addEventListener("scroll", smoothDown)

// for smoothDown
let textHeight = text.offsetHeight
let textPosition = 0
let lastScroll  = 0
const speedMove = 3
function smoothDown(){ // возможно переделать. Поставить transition
                       // и менять начальное и конечное положение
    let scroll = window.pageYOffset
    if(scroll<(textHeight*0.8)){
        if(lastScroll>scroll){
            //console.log('scrollUp')
            if(textPosition>0){
                textPosition -= speedMove+3
                text.style.top = textPosition + 'px'
            }
        } else {
            //console.log('scrollDown')
            if(textPosition<(text.offsetHeight/4)){
                textPosition += speedMove
                text.style.top = textPosition + 'px'
            }
            text.style.top = textPosition + 'px'
        }
    } else{
        textPosition = text.offsetHeight/4
        text.style.top = textPosition + 'px'
    }

    lastScroll = scroll <= 0 ? 0 : scroll;
}


// SLIDER
function sliderVis(){
    if(window.pageYOffset>=sliderPageY-150){
        slider.style.right = '60%'
        sliderButton.style.left = '-80px'
    } else {
        slider.style.right = '0'
        sliderButton.style.left = '0'
    }
}
window.addEventListener('scroll',sliderVis)

let current = 0
function sliderActive(num){

    if(num==='+'){
        current += 1
    } else {
        current = num
    }

    for(let i = 0;i<sliderImages.length;i++){
        if(i <= current){
            sliderImages[i].style.left = 0
            sliderImages[i].style.visibility = 'visible'
            if(i === current){
                chagneSliderText(i)
            }
        } else {
            sliderImages[i].style.left = '100%'
            sliderImages[i].style.visibility = 'hidden'
        }
    }

}

function chagneSliderText(num,arr = sliderInfo) {
    sliderRight.children[0].children[0].innerHTML = arr[num].header //h3
    sliderRight.children[0].children[1].innerHTML = arr[num].year//head year
    sliderRight.children[1].children[1].innerHTML = arr[num].photograph//p1 photograph
    sliderRight.children[1].children[3].innerHTML = arr[num].year//year
    sliderRight.children[1].children[5].innerHTML = arr[num].narrative//p2 narrative
}

const sliderInfo = [
    {
        header: 'Place 1<br>solution',
        year: 2018,
        photograph: 'Place 1 Photograph Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur exercitationem fugiat, maxime repudiandae sit.',
        narrative: 'Place 1 Narrative Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur exercitationem fugiat, maxime repudiandae sit.'
    },
    {
        header: 'Place 2<br>solution',
        year: 2019,
        photograph: 'Place 2 Photograph Lorem  Assumenda consectetur exercitationem fugiat, maxime repudiandae sit. ipsum dolor sit amet, consectetur adipisicing elit.',
        narrative: 'Place 2 Narrative Lorem  Assumenda consectetur exercitationem fugiat, maxime repudiandae sit. ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        header: 'Place 3<br>solution',
        year: 2020,
        photograph: 'Place 3 Photograph Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur exercitationem fugiat, maxime repudiandae sit.',
        narrative: 'Place 3 Narrative Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur exercitationem fugiat, maxime repudiandae sit.'
    }
]