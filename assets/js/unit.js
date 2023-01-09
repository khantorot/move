let unit_id = sessionStorage.getItem('unit') || 0;
const unit_inner = document.querySelector('.unit');
const unittitle = document.querySelector('.page_title');
let out = '';
let u_out = '';

for(key in units) {
    if (key == unit_id) {

        document.title = units[key].name;

        u_out = '<h1>' + units[key].symbol + '</h1>';
        out += '<h2>' + units[key].name + '</h2>';
        out += '<h4>' + units[key].title + '</h4>';
        units[key].info.forEach(element => {
            out += '<p>' + element + '</p>';
        });
        out += '<a href="'+ units[key].link +'" target="_blank" class="link" data-name="more"></a>';
    }
}

unit_inner.innerHTML = out;
unittitle.innerHTML = u_out;