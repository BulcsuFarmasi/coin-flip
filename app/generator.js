export class Generator {

    constructor (view) {
        this.stats = {
            all: 0,
            heads: 0,
            tails: 0,
            headPercent: 0,
            tailsPercent: 0
        };
        this.results = new Rx.Subject()
            .mergeMap(result => {console.log(result);return Rx.Observable.of(result).delay(result.index * 1000)});
        this.view = view;
        this.results.subscribe(result => { 
            this.view.renderImage(result)
            this.generateStats(result);
        });
    }

    generate () {
        return Math.round(Math.random());
    }

    generateResults (limit) {
        let i = 0;
        while (i < limit){
            this.results.next({ value: this.generate(), index: i});
            i++;
        }
        
    }

    generateStats (result) {
        if (result) {
            this.stats.all++;
            if (result.value) {
                this.stats.heads++;
            } else {
                this.stats.tails++;
            }
            this.stats.headPercent = this.stats.heads / this.stats.all * 100;
            this.stats.tailsPercent = this.stats.tails / this.stats.all * 100;
            this.view.renderStats(this.stats);
        }
    }

}