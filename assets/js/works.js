const works_list = document.querySelector('.works_elems');
let out = '';

for(key in works) {
    out += '<li>';
    out += works[key].title;
    out += '<a href="'+ works[key].link +'" target="_blank">more</a>';
    out += '</li>';
}

works_list.innerHTML = out;