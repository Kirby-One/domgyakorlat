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



