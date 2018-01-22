export class Generator {

    constructor () {
        this.stats = {};
        this.results = new Rx.Subject();
    }

    generate () {
        return Math.round(Math.random());
    }

    generateResults (limit) {
        let i = 0;
        while (i < limit) {
            let result = this.generate();
            console.log(result);
            this.results.next(this.generate());
            i++;
        }
        this.results.complete();
        return this.results;
    }

    generateStats (resultGenerator) {
        this.stats.all = 0;
        this.stats.heads = 0;
        this.stats.tails = 0;
        this.results.subscribe(
            (result) => {
                console.log(result);
                this.stats.all++;
                if(result) {
                    this.stats.heads++;
                } else {
                    this.stats.tails++;
                }
             },
            () => {},
            () => {
                this.stats.headPercent = this.stats.heads / this.stats.all * 100;
                this.stats.tailsPercent = this.stats.tails / this.stats.all * 100;
                console.log(this.stats);
            }
        )


    }

    getStats () {
        return this.stats;
    }

    getResults () {
        return this.results;
    }

}