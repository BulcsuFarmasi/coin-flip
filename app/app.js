import { Generator } from './generator';
import { View } from './view';

const generator = new Generator();


console.time('timer');
const resultGenerator = generator.generateResults(10000);
generator.generateStats(resultGenerator);
const stats = generator.getStats();
console.log(stats);

const view = new View();


view.assign(stats);
view.renderImages(resultGenerator);
console.timeEnd('timer');
