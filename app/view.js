export class View {

    constructor () {
        this.coinTossNumber = document.querySelector('#coin-toss-number');
        this.delay = document.querySelector('#delay');
        this.start = document.querySelector('#start');
        this.coins = document.querySelector('#coins');
        this.coinType = document.querySelector('#coin-type');
        this.stats = document.querySelector('#stats');
        this.sampleCoin = document.querySelector('#sample-coin');
    }

    clearCoins() {
        this.coins.innerHTML = '';
    }

    clearStats() {
        this.stats.innerHTML = '';
    }

    renderCoin (coin,coinType) {
        const folder = `images/${coinType}/`;
        const image = new Image();
        image.src = folder;
        image.src += (coin) ? 'heads.png' : 'tails.png';
        image.alt = (coin) ? "Heads" : "Tails";
        this.coins.appendChild(image);
        image.classList.add('appear');
    }

    renderCoinTypes (coinTypes) {
        for (let coinType of coinTypes) {
            let option = document.createElement('option');
            option.innerHTML = coinType.name;
            option.value = coinType.id;
            this.coinType.appendChild(option);
        }
    }

    renderSampleCoin (coinType) {
        console.log(coinType);
        const folder = `images/${coinType}/`;
        if (!this.sampleCoin.innerHTML) {
            this.sampleHeads = new Image();
            this.sampleHeads.alt = 'Heads';
            this.sampleCoin.appendChild(this.sampleHeads);
            this.sampleHeads.classList.add('appear');
            this.sampleTails = new Image();
            this.sampleTails.alt = 'Tails';
            this.sampleCoin.appendChild(this.sampleTails);
            this.sampleTails.classList.add('appear');
        }
        this.sampleHeads.src = folder + 'heads.png'; 
        this.sampleTails.src = folder + 'tails.png';
    }

    renderStats (stats) {
        this.stats.innerHTML = `All coin flips: ${stats.all}, of which are heads: ${stats.heads} (${stats.headsPercent}%), 
                           tails ${stats.tails} (${stats.tailsPercent}%)`
    }

    watchStart () {
        return Rx.Observable.fromEvent(this.start, 'click')
               .mergeMap(event => Rx.Observable.of({ coinTossNumber: this.coinTossNumber.value, delay: this.delay.value  }))
    }

    watchCoinType () {
        return Rx.Observable.fromEvent(this.coinType, 'change')
            .map(event => event.target.value);
    }

}