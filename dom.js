var szamlalo = 1;


function addDiv() {
    const ujDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Cikk ' + szamlalo;
    ujDiv.append(h2);

    const container = document.getElementById('container');
    container.append(ujDiv);

    szamlalo++;
}

function addP() {
    const ujP = document.createElement('p');
    ujP.innerHTML = 'Új P';
    const container = document.getElementById('container');
    const divs = container.getElementsByTagName('div');
    const lastDiv = divs[divs.length - 1];
    if (divs.length > 0) {
        lastDiv.append(ujP);
    } else {
        alert('Előbb divet hozz létre!!!!!!!!!!!!!!!!!!!!!!!');
    }
}

function UseStilus() {
    const bekezdesek1 = document.querySelectorAll('div p');
    bekezdesek1.forEach(function (p) {
        p.style.color = 'blue';
    });

    const bekezdesek2 = document.querySelectorAll('div > p');
    bekezdesek2.forEach(function (p) {
        p.style.fontWeight = 'bold';
    });

    const bekezdesek3 = document.querySelectorAll('div ~ p');
    bekezdesek3.forEach(function (p) {
        p.style.textDecoration = 'underline';
    });

    const bekezdesek4 = document.querySelectorAll('div p:nth-child(3)');
    bekezdesek4.forEach(function (p) {
        p.style.backgroundColor = 'Lightyellow';
    });

    const bekezdesek5 = document.querySelectorAll('p:nth-of-type(2)');
    bekezdesek5.forEach(function (p) {
        p.style.border = '1px solid red';
    });
}   