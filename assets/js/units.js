const units_inner = document.querySelector('.units');
let out = '';

for(key in units) {
    out += '<div class="unit">';
    out += '<h4>'+ units[key].symbol +'</h4>';
    out += '<a href="./unit.html" class="unit_item" data-id="'+ key +'" data-name="'+ units[key].name +'"></a>';
    out += '</div>';
}

units_inner.innerHTML = out;


units_inner.addEventListener('click', function(e){
    if (e.target.classList.contains('unit_item')){
        let id = e.target.getAttribute('data-id');
        sessionStorage.setItem('unit', id);
    }
})