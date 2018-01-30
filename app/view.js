export class View {

    constructor () {
        this.coinTossNumber = document.querySelector('#coin-toss-number');
        this.delay = document.querySelector('#delay');
        this.start = document.querySelector('#start');
        this.coins = document.querySelector('#coins');
        this.coinType = document.querySelector('#coin-type');
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
        image.src += (coin) ? 'heads.png' : 'tails.png';
        image.alt = (coin) ? "Heads" : "Tails";
        this.coins.appendChild(image);
        image.classList.add('appear');
    }

    renderCoinTypes (coinTypes) {
        console.log(coinTypes);
        for (let coinType of coinTypes) {
            let option = document.createElement('option');
            option.innerHTML = coinType.name;
            option.value = coinType.id;
            this.coinType.appendChild(option);
        }
    }

    renderStats (stats) {
        this.stats.innerHTML = `All coin flips: ${stats.all}, of which are heads: ${stats.heads} (${stats.headsPercent}%), 
                           tails ${stats.tails} (${stats.tailsPercent}%)`
    }

    watchStart () {
        return Rx.Observable.fromEvent(this.start, 'click')
               .mergeMap(event => Rx.Observable.of({ coinTossNumber: this.coinTossNumber.value, delay: this.delay.value  }))
    }

}