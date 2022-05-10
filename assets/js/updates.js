const updates_inner = document.querySelector('.updates');
const panel_inner = document.querySelector('.panel');
let out = '';
let panel = '';

for (key in updates) {
    panel += '<li><a href="#' + updates[key].date.replace(/[\s.,%]/g, '') + '" class="panel_elem">' + updates[key].date + '</a></li>';

    out += '<div class="update">';
    out += '<a name="' + updates[key].date.replace(/[\s.,%]/g, '') + '"><h5>' + updates[key].date + '</h5></a>'
    out += '<h4>' + updates[key].title + '</h4>';
    updates[key].info.forEach(element => {
        out += '<ul>';
        out += '<h5>' + element[0] + '</h5>';
        element[1].forEach(element => {
            out += '<li>' + element + '</li>';
        });
        out += '</ul>'
    });
    out += '</div>';
}

updates_inner.innerHTML = out;
panel_inner.innerHTML = panel;

panel_inner.addEventListener('click', function (e) {
    if (e.target.classList.contains('panel_elem')) {
        setTimeout(function(){
            main.classList.add('fade_out_active');
        }, 2000)
    }
})



