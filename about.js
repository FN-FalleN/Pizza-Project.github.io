window.onscroll = () => {
    scrollDown()
    animation_aboutStoryNX()
    animation_aboutStoryPY()
    animation_StoryPXandNX()
}

let pizzaMenu = document.querySelector('#menu');

function scrollDown() {
    const navibar = document.querySelector('#navibar');

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navibar.style.top = '0px';
        navibar.style.backgroundColor = '#fff';
        navibar.style.padding = '1rem 4rem';
        pizzaMenu.style.paddingBottom = '1.85rem';
    } else {
        navibar.style.top = '0px';
        navibar.style.background = 'transparent';
        navibar.style.padding = '2rem 4rem';
        pizzaMenu.style.paddingBottom = '2.85rem';
    }
}

let Menu = document.querySelector('#menulink');

Menu.addEventListener('click', function() {
    let menuDropDown = document.getElementById('menuDD');
    let listMenu = document.querySelectorAll('.list-menu')

    if (menuDropDown.style.transform === 'translateY(20%)') {
        menuDropDown.style.opacity = '1';
        menuDropDown.style.transform = 'translateY(0%)';
        listMenu.forEach(item => item.style.display = 'inline');
    } else {
        menuDropDown.style.opacity = '0';
        menuDropDown.style.transform = 'translateY(20%)';
        listMenu.forEach(item => item.style.display = 'none');
    }
})
// NX = Negative X-axis
function animation_aboutStoryNX() {
    const aboutStoryText = document.querySelector('.about-story-text');

    if (document.documentElement.scrollTop > 150) {
        aboutStoryText.classList.add('elements_ani-X');
    }
}
// PY = Positive Y-axis
function animation_aboutStoryPY() {
    const aboutStoryImg = document.querySelector('.about-story-img');

    if (document.documentElement.scrollTop > 350) {
        aboutStoryImg.classList.add('elements_aniY');
    }
}

function animation_StoryPXandNX() {
    const storyTextL1 = document.querySelector('.text-left1');
    const storyTextL2 = document.querySelector('.text-left2');
    const storyTextorImgR1 = document.querySelector('.text-or-img-right1');
    const storyTextorImgR2 = document.querySelector('.text-or-img-right2');

    if (document.documentElement.scrollTop > 1200) {
        storyTextL1.classList.add('elements_ani-X');
        storyTextorImgR1.classList.add('elements_aniX');
    }

    if (document.documentElement.scrollTop > 1500) {
        storyTextL2.classList.add('elements_ani-X');
        storyTextorImgR2.classList.add('elements_aniX');
    }
}

