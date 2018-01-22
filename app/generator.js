export class Generator {

    constructor () {
        this.results = [];
        this.stats = {};
    }

    generate () {
        return Math.round(Math.random());
    }

    generateResults (limit) {
        let i = 0;
        while (i < limit) {
            let result = this.generate();
            this.storeResult(result);
            i++;
        }
    }

    generateStats () {
        this.stats.all = this.results.length;
        this.stats.heads = this.results.reduce((sum, result) => {
            if (result) {
                return sum += result;
            }
            return sum;
        }, 0)
        this.stats.headPercent = this.stats.heads / this.stats.all * 100;

        this.stats.tails = this.results.reduce((sum, result) => {
            if (!result) {
                return sum += 1;
            }
            return sum;
        }, 0)
        this.stats.tailsPercent = this.stats.tails / this.stats.all * 100;
    }

    storeResult (result) {
        this.results.push(result)
    }

    getResults () {
        return this.results;
    }

    getStats () {
        return this.stats;
    }

}