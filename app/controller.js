export class Controller {

    constructor (model, view) {
        this.model = model;
        this.view = view;
    }

    tossCoins () {
        this.view.watchStart().subscribe(tossData => {
            this.model.initStats();
            this.view.clearCoins();
            this.view.clearStats();
            let tossCoins = this.model.tossCoins(tossData.coinTossNumber, tossData.delay);
            tossCoins.subscribe(coin => {
                this.view.renderCoin(coin);
                this.model.generateStats(coin).subscribe(stats => {
                    this.view.renderStats(stats);
                })
            })
        });
    }

}