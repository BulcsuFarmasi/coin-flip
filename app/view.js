export class View {

    constructor () {
        this.coinTossNumber = document.querySelector('#coin-toss-number');
        this.delay = document.querySelector('#delay');
        this.start = document.querySelector('#start');
        this.coins = document.querySelector('#coins');
        this.stats = document.querySelector('#stats');
    }

    clearCoins() {
        this.coins.innerHTML = '';
    }

    clearStats() {
        this.stats.innerHTML = '';
    }

    renderCoin (coin) {
        const folder = 'images/';
        let image = new Image();
        image.src = folder;
        image.src += (coin) ? 'head.png' : 'tails.png';
        image.alt = (coin) ? "Fej" : "Írás";
        this.coins.appendChild(image);
    }

    renderStats (stats) {
        this.stats.innerHTML = `Összes pénz feldobás: ${stats.all}, amelyből fej: ${stats.heads} (${stats.headPercent}%), 
                           írás ${stats.tails} (${stats.tailsPercent}%)`
    }

    watchStart () {
        return Rx.Observable.fromEvent(this.start, 'click')
               .mergeMap(event => Rx.Observable.of({ coinTossNumber: this.coinTossNumber.value, delay: this.delay.value  }))
    }

}