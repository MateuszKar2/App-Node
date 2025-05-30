import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter{
  head: Node | null = null;

  //Dodawanie elementów
  add(data: number): void {
    const node = new Node(data);
  
    if (!this.head) {
      this.head = node;
      console.log("First node added:", node.data); // Dodajemy logowanie
      return;
    }
  
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
  
    tail.next = node;
    console.log("Node added:", node.data); // Dodajemy logowanie
  }

  //Pobieranie długości listy 
  get length(): number {
    if (!this.head){
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next){
      length++;
      node = node.next;
    }

    return length;
  }

  //Pobieranie węzła na określonym indeksie 
  at(index:number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index){
        return node;
      }

      counter++
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  //Porównywanie dwóch węzłów
  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  //Wymiana miejscami dwóch węzłów 
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if(!this.head) {
      return;
    }

    let node: Node | null = this.head;
      while (node) {
        console.log(node.data);
        node = node.next;
    }
  }
}