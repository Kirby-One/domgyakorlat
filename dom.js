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
        alert('Előbb divet hozz létre!!!!!!!!!!!!!!!');
    }
}

