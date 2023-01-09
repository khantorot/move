let mob = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;


window.addEventListener('resize', windowSize);

function windowSize() {
    let h = document.documentElement.clientHeight;
    let w = document.documentElement.clientWidth;
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');

    if (w <= h || mob == true) {
        body.classList.add('body_w');
        nav.classList.remove('nav_hide');
    } else if (w - (h / 3 * 2) <= h) {
        nav.classList.add('nav_hide');
        body.classList.remove('body_w');
    } else {
        body.classList.remove('body_w');
        nav.classList.remove('nav_hide');
    }
}



window.addEventListener('load', function () {
    windowSize();
    buildMenu();

    const links = document.querySelectorAll('a');
    const main = document.querySelector('main');

    setTimeout(function () {
        main.classList.add('fade_out_active');
    }, 1000)


    links.forEach(function (link) {
        link.addEventListener('click', onLinkClicked);

        function onLinkClicked(event) {
            if (this.getAttribute('target') != '_blank') {
                event.preventDefault();
                main.classList.remove('fade_out_active')
                setTimeout(onAnimationComplete, 1000);
            }
        }

        function onAnimationComplete() {
            window.location = link.href;
        }
    });

    const colors = ["#18362e", "#1f2c48", "#5d3330", "#3f3251", "#333b52", "#543437"];
    let i = 0;

    document.addEventListener('mousedown', function(){
        (i < (colors.length) - 1) ? i++ : i = 0;
        document.querySelector(':root').style.setProperty('--line', colors[i]);
    })
    document.addEventListener('mouseup', function(){
        document.querySelector(':root').style.setProperty('--line', '#090909');
    })
})


function buildMenu() {
    const games_list = document.querySelector('.games_list');
    const units_list = document.querySelector('.units_list');

    let out_game = '';
    let out_unit = '';

    for (key in games) {
        out_game += '<li><a href="./game.html" class="game_link" data-id="' + key + '" data-name="' + games[key].name + '"></a></li>';
    }

    for (key in units) {
        out_unit += '<li><a href="./unit.html" class="unit_link" data-id="' + key + '" data-name="' + units[key].name + '"></a></li>';
    }

    games_list.innerHTML += out_game;
    units_list.innerHTML += out_unit;

    games_list.addEventListener('click', function (e) {
        if (e.target.classList.contains('game_link')) {
            let id = e.target.getAttribute('data-id');
            sessionStorage.setItem('game', id);
        }
    })
    units_list.addEventListener('click', function (e) {
        if (e.target.classList.contains('unit_link')) {
            let id = e.target.getAttribute('data-id');
            sessionStorage.setItem('unit', id);
        }
    })
}