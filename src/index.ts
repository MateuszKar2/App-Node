import { Sorter } from './Sorter';
import { NumbersCollections } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numbersCollections = new NumbersCollections([50, 7, 8, 3, -5, 0]);
// numbersCollections.sort();
// console.log(numbersCollections.data);

// const characterCollection = new CharacterCollection('Xsdaodkas');
// characterCollection.sort();
// console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();





//npm run start-run