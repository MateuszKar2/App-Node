import { NumbersCollections } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    //abstract- pewna implementacja funkcji wielokrotnego użytku


    sort(): void {
      const {length} = this;

      for (let i = 0; i < length; i++){
        for (let j = 0; j < length - i -1; j++){
            if(this.compare(j, j + 1)) {
              this.swap(j, j + 1);
          }
        }
      }
  }
}