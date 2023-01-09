let game_id = sessionStorage.getItem('game') || 0;
const gamepage = document.querySelector('.gamepage');
const gametitle = document.querySelector('.page_title');
const panel = document.querySelector('.panel');
let p_out = '';
let out = '';
let t_out = '';

for (key in games) {

    if (key == game_id) {

        document.title = games[key].name;

        let last = Number(Object.keys(games).length - 1);
        let next = (+key == last) ? 0 : +key + 1;
        let prev = (+key == 0) ? last : +key - 1;

        t_out = '<img src="./content/images/' + games[key].image + '" alt="' + games[key].name + '">';

        out += '<h2>' + games[key].name + '</h2>';
        out += '<h5>' + games[key].date + '</h5>';
        out += '<h4>' + games[key].description + '</h4>';
        out += '<div class="links">';
        out += '<a href="' + games[key].link + '" class="link" target="_blank" data-name="start play"></a>';
        out += '</div>';
        out += '<video src="./content/videos/' + games[key].video + '" loop autoplay muted></video>';
        out += '<div class="info">';
        games[key].about.forEach(element => {
            out += '<p>' + element + '</p>';
        });
        out += '</div>';
        out += '<ul class="system">';
        games[key].system.forEach(element => {
            out += '<li>' + element + '</li>';
        });
        out += '</ul>';

        p_out += '<li><a href="game.html" data-id="'+ prev +'" data-name="prev" class="panel_item"></a></li>';
        p_out += '<li><a href="games.html" data-name="all" class="panel_item"></a></li>';
        p_out += '<li><a href="game.html" data-id="'+ next +'" data-name="next" class="panel_item"></a></li>';
        
        break;
    }
}

gametitle.innerHTML = t_out;
gamepage.innerHTML = out;
panel.innerHTML = p_out;



panel.addEventListener('click', function(e){
    if (e.target.classList.contains('panel_item')){
        let id = e.target.getAttribute('data-id');
        sessionStorage.setItem('game', id);
    }
})