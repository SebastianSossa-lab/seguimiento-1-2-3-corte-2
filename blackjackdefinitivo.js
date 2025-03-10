let cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function obtenerValor(carta) {
    if (['J', 'Q', 'K'].includes(carta)) return 10;
    if (carta === 'A') return 11;
    return parseInt(carta);
}

function jugarBlackjack() {
    let mano = [];
    let total = 0;
    let ases = 0;

    for (let i = 0; i < 2; i++) {
        let carta = cartas[Math.floor(Math.random() * cartas.length)];
        mano.push(carta);
        let valor = obtenerValor(carta);
        if (carta === 'A') ases++;
        total += valor;
    }
    
    while (total > 21 && ases > 0) {
        total -= 10;
        ases--;
    }

    console.log(`Tu mano: ${mano.join(', ')} (Total: ${total})`);
    
    while (total < 21) {
        let decision = prompt("¿Quieres otra carta? (s/n)");
        if (decision.toLowerCase() !== 's') break;
        
        let nuevaCarta = cartas[Math.floor(Math.random() * cartas.length)];
        mano.push(nuevaCarta);
        let valor = obtenerValor(nuevaCarta);
        if (nuevaCarta === 'A') ases++;
        total += valor;
        
        while (total > 21 && ases > 0) {
            total -= 10;
            ases--;
        }
        
        console.log(`Tu mano: ${mano.join(', ')} (Total: ${total})`);
    }

    if (total === 21) {
        console.log("¡Blackjack!");
    } else if (total > 21) {
        console.log("Te pasaste. ¡Pierdes!");
    } else {
        console.log("Te plantaste con: " + total);
    }
}

jugarBlackjack();