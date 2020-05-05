// Your code goes here
// function getAll(selector) {
//     return document.querySelectorAll(selector)
// }

// const images = getAll('img')

// function shrink(event) {
//     images.forEach(item => {
//         item.style.width = '5%';
//     })
// }

// images.addEventListener('click', shrink);



function get(selector) {
    return document.querySelector(selector);
}

function getAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}

const navText = getAll('.nav-link')
console.log(navText)

navText.forEach(item =>
    item.addEventListener('click', event => {
    event.preventDefault();
})
)

const topNav = get('.main-navigation');

function newNav(event){
    topNav.style.backgroundImage = "url('https://images.unsplash.com/photo-1530073950330-68df49afcc1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80')";
    topNav.style.backgroundPosition = '50% 65%';
    topNav.style.backgroundSize = 'cover';
    topNav.style.color = 'red';
    navText.forEach(item => {
        item.style.color ='red';
    })
}
topNav.addEventListener('dblclick', newNav)

const headings = getAll('h2');

function creepify(event) {
    headings.forEach(item => {
        item.style.color = 'red';
    });
}

headings.forEach(item =>{
    item.addEventListener('click', creepify);
})

const topPic = get('.intro img');

function newTopPic(event) {
    topPic.setAttribute('src', 'https://images.unsplash.com/photo-1585623204677-4c60049a1bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')
}

topPic.addEventListener('wheel', newTopPic)

const topPar = get('.intro p');

function newtopPar(event) {
    topPar.textContent = 'All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.';

    topPar.style.color = 'red';
}

topPar.addEventListener('copy', newtopPar);

const newMainPics = [
    'https://images.unsplash.com/photo-1551793621-2debb9c8e95b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1508329398483-91fa0a805e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
];

const mainPics = getAll('.img-content img');
console.log(mainPics)
console.log(newMainPics)
function newMainImgs(event) {
    mainPics.forEach(function(item, index) {
        item.setAttribute('src', newMainPics[index]);
    });
}

mainPics[0].addEventListener('mouseleave', newMainImgs)

const bottomPic = get('.content-destination img');

function newBottomPic(event) {
    bottomPic.setAttribute('src', 'https://images.unsplash.com/photo-1446587081170-71f025fc7d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
}

bottomPic.addEventListener('mouseover', newBottomPic)

console.log(bottomPic)

