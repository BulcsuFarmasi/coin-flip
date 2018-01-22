export class Generator {

    constructor () {
        this.stats = {};
    }

    generate () {
        return Math.round(Math.random());
    }

    * generateResults (limit) {
        let i = 0;
        while (i < limit) {
            let result = this.generate();
            yield result;
            i++;
        }
    }

    generateStats (resultGenerator) {
        this.stats.all = 0;
        this.stats.heads = 0;
        this.stats.tails = 0;
        while (!resultGenerator.next().done) {
             this.stats.all++;
             if(resultGenerator.next().value) {
                 this.stats.heads++;
             } else {
                 this.stats.tails++;
             }
        }
        this.stats.headPercent = this.stats.heads / this.stats.all * 100;
        this.stats.tailsPercent = this.stats.tails / this.stats.all * 100;
    }

    getStats () {
        return this.stats;
    }

}