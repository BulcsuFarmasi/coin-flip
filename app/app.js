import { Generator } from './generator.js';
import { View } from './view.js';

const generator = new Generator(new View());


console.time('timer');
generator.generateResults(100);
generator.generateStats();
console.timeEnd('timer');
