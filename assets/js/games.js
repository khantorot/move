const games_inner = document.querySelector('.games');
let out = '';

for(key in games) {
    out += '<div class="game">';
    out += '<div class="game_image">';
    out += '<img src="./content/images/'+ games[key].image +'" alt="'+ games[key].name +'">';
    out += '</div>';
    out += '<a href="./game.html" class="game_link" data-id="'+ key +'" data-name="' + games[key].name + '"></a>';
    out += '</div>';
}

games_inner.innerHTML = out;


games_inner.addEventListener('click', function(e){
    if (e.target.classList.contains('game_link')){
        let id = e.target.getAttribute('data-id');
        sessionStorage.setItem('game', id);
    }
})