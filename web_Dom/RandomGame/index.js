const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const rannumb = Math.floor(Math.random() * 100);
    const usin = parseInt(document.getElementById("numb").value);
    const res = document.getElementById("result");

    if (rannumb === usin) {
        alert("You won");
    } else {
        res.innerHTML = `<h1>You lost. The random number was ${rannumb}</h1>`;
    }
});
