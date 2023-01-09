const team_inner = document.querySelector('.team_list');
let out = '';

for(key in team) {
    out += '<li>';
    out += '<img src="./content/images/team/'+ team[key].image +'" alt="'+ team[key].name +'">';
    out += '<a href="mailto:'+ team[key].mail +'" data-name="' + team[key].name + '"></a>';
    out += '<span>' + team[key].position + '</span>';
    out += '</li>';
}

team_inner.innerHTML += out;