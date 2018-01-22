import { Generator } from './generator';
import { View } from './view';

const generator = new Generator();


console.time('timer');
generator.generateResults(10000);
const results = generator.getResults();
generator.generateStats();
const stats = generator.getStats();
console.log(stats);
const view = new View();

view.assign(results);
view.renderImages();
console.timeEnd('timer');
