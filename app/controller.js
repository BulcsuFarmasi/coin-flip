export class Controller {

    constructor (model, view) {
        this.model = model;
        this.view = view;
    }

    getCoinTypes () {
        this.model.getCoinTypes().subscribe((coins) => {
            this.view.renderCoinTypes(coins);
        })
    }

    flipCoins () {
        this.view.watchStart().subscribe(flipData => {
            this.model.initStats();
            this.view.clearCoins();
            this.view.clearStats();
            let tossCoins = this.model.flipCoins(flipData.coinTossNumber, flipData.delay);
            tossCoins.subscribe(coin => {
                this.view.renderCoin(coin);
                this.model.generateStats(coin).subscribe(stats => {
                    this.view.renderStats(stats);
                })
            })
        });
    }

}