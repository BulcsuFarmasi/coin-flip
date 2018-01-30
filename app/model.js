export class Model {

    flipCoin () {
        return Math.round(Math.random());
    }

    flipCoins (number, delay) {
        return new Rx.Observable((observer) => {
            let i = 0;
            while (i < number) {
                observer.next({ value: this.flipCoin(), index: i});
                i++  
            }
        }).mergeMap(coin => Rx.Observable.of(coin.value).delay(coin.index * (delay * 1000)));
    }

    initStats () {
        this.stats = {
            all: 0,
            heads: 0,
            tails: 0,
            headsPercent: 0,
            tailsPercent: 0
        }
    }

    generateStats (coin) {
        console.log(coin);
        this.stats.all++;
        if (coin) {
            this.stats.heads++;
        } else {
            this.stats.tails++;
        }
        this.stats.headsPercent = this.roundTo(this.stats.heads / this.stats.all * 100, 2);
        this.stats.tailsPercent = this.roundTo(this.stats.tails / this.stats.all * 100, 2);  
        return Rx.Observable.of(this.stats);
    }

    getCoinTypes () {
        return Rx.Observable.fromPromise(
            fetch('./coin-types.json')
            .then(response => response.json())
        )
    }

    roundTo (number, factor) {
        number *= 10 ** factor;
        number = Math.round(number);
        number /= 10 ** factor;
        return number;
    }

}