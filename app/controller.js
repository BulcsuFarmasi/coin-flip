export class Controller {

    constructor (model, view) {
        this.model = model;
        this.view = view;
    }

    getCoinTypes () {
        this.model.getCoinTypes().subscribe((coins) => {
            this.coinType = coins[0].id;
            this.view.renderCoinTypes(coins);
        })
    }

    flipCoins () {
        this.view.watchCoinType().subscribe(coinTypeId => {
            this.coinType = coinTypeId; 
        })
        this.view.watchStart().subscribe(flipData => {
            this.model.initStats();
            this.view.clearCoins();
            this.view.clearStats();
            let tossCoins = this.model.flipCoins(flipData.coinTossNumber, flipData.delay);
            tossCoins.subscribe(coin => {
                console.log(this.coinType);
                this.view.renderCoin(coin, this.coinType);
                this.model.generateStats(coin).subscribe(stats => {
                    this.view.renderStats(stats);
                })
            })
        });
    }

}