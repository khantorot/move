const jobs_inner = document.querySelector('.jobs');
let out = '';

for (key in jobs) {
    out += '<h4>' + jobs[key].title + '</h4>';
    out += '<ul>';
    jobs[key].person.forEach(element => {
        out += '<li><a href="'+ element[1] +'" target="_blank">' + element[0] + '</a></li>';
    });
    out += '</ul>';
}

jobs_inner.innerHTML = out;