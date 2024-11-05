"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollections = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollections extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollections = NumbersCollections;
