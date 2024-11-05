import { Sorter } from "./Sorter";

export class NumbersCollections extends Sorter{

  constructor(public data: number[]) {
    super();
  }

  
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

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}