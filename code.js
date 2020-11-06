class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
    console.log('inserted')
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    //If the list is empty
    if (!this.head) {
      this.insertFirst(item);
    }
    //If the node to be inserted is before the head, move head to new node
      if (this.head === key) {
        
      }
    //Start at the head
      let currNode = this.head;


  }

  find(item) {
    //If the list is empty
    if (!this.head) {
      return null;
    }
    //Start at the head
      let currNode = this.head;
    //Check for the item
    while (currNode.value !== item) {
      /*Return null if it's the end of the list
        and the item is not on the list */
        if (currNode.next === null) {
          return null;
        }
        else {
          //Otherwise, keep looking
          currNode = currNode.next;
        }
    }
    //Found it
    return currNode;
  }

  remove(item) {
    //If the list is empty
    if (!this.head) {
      return null;
    }
    //If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //Start at the head
    let currNode = this.head;
    //Keep track of previous
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      //Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  let ll = new LinkedList();

  ll.insertFirst('Apollo');
  ll.insertLast('Boomer');
  ll.insertLast('Helo');
  ll.insertLast('Husker');
  ll.insertLast('Starbuck');
  ll.insertLast('Tauhida');
  ll.remove('squirrel');
  console.log(JSON.stringify(ll.find('Boomer')));
  //console.log(JSON.stringify(ll));
}

main();