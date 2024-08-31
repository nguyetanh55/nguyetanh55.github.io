var dropdown = document.getElementById('dropdown');

var hideBtn = document.getElementById('hide-btn');
hideBtn.addEventListener('click', function(event) {
    dropdown.className = 'dropdown';
});

var showBtn = document.getElementById('show-btn');
showBtn.addEventListener('click', function(event) {
    dropdown.className = 'dropdown show';
});