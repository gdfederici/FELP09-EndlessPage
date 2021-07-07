// IT_ Importare CSS. | EN_ Import CSS.
import '../css/style.scss';
// IT_ Importare funzioni. | EN_ Import functions.

// IT_ Importare dati. | EN_ Import data.

// IT_ Importare immagini. | EN_ Import images.

/*** ------------------------- *** ------------------------- *** ------------------------- *** ------------------------- ***/

const viewportHeight = window.innerHeight - 70;
const endlessList = document.getElementById("endless");
endlessList.style.height = viewportHeight + "px";
let unoMas = 0;

// IT_ Crea tante righe da visualizzare quanto è alto il viewport disponibile, fino a un massimo di 500. || EN_ Create as many rows to display how high the available viewport is, up to a maximum of 500.
function loadMas() {
    let i = 0;
    while ( (i*24 < viewportHeight) && (unoMas <500)) {
        const itemList = document.createElement('p');
        itemList.innerText = 'Item ' + unoMas++;
        endlessList.appendChild(itemList);
        i++;
    }
}

// IT_ Aggiunge altri contenuti se lo scroll supera quelli già presenti. || EN_ Adds more content if the scroll exceeds those already present.
endlessList.addEventListener('scroll', function() {
    console.log("scrollTop", endlessList.scrollTop); // IT_ Quanto sto scorrendo l'elemento.
    console.log("clientHeight", endlessList.clientHeight); // IT_ Quanto è visibile in altezza dell'elemento.
    console.log("scrollHeight", endlessList.scrollHeight); // IT_ Quanto è alto l'elemento.
    if (endlessList.scrollTop + endlessList.clientHeight >= endlessList.scrollHeight) {
        loadMas();
    }
});

loadMas();