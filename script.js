const button = document.getElementById('toggle__icon');
let content = document.getElementsByClassName('content__wrapper');
var x = window.matchMedia("(max-width: 677px)")
smallScreenCheck(x)
x.addListener(smallScreenCheck)
content[0].style.width = '70vw';
content[0].style.marginLeft = '10vw';

    function smallScreenCheck(x) {
    if (x.matches) {
        button.onclick = function smallScreenToggle() {
            var menu = document.getElementById('toggle__menu');
        if (menu.style.visibility !== 'hidden') {
            menu.style.visibility = 'hidden';
            menu.style.display = 'none';
            content[0].style.visibility = 'visible';
            content[0].style.display = 'block';
        } else {
            menu.style.visibility = 'visible';
            menu.style.display = 'flex';
            content[0].style.visibility = 'hidden';
            content[0].style.display = 'none';
        }
    }
    } else {
        button.onclick = function toggle() {
            var menu = document.getElementById('toggle__menu');
            if (menu.style.visibility !== 'hidden') {
                menu.style.visibility = 'hidden';
                menu.style.display = 'none';
                content[0].style.width = '100vw';
                content[0].style.marginLeft = '8vw';
                content[0].style.marginRight = '8vw';
            }
            else {
                menu.style.visibility = 'visible';
                menu.style.display = 'flex';
                content[0].style.width = '70vw';
                content[0].style.marginLeft = '10vw';
                content[0].style.marginRight = '10vw';
            }
        }
    }
}