import { Sorter } from './Sorter';
import { NumbersCollections } from './NumbersCollection';

const numbersCollections = new NumbersCollections([50, 7, 3, -5, 0]);
const sorter = new Sorter(numbersCollections);
sorter.sort();
console.log(numbersCollections.data);