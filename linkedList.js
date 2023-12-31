export default class linkedList {
    constructor () {
        this.listHead = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.listHead === null) {
            this.listHead = newNode;
        } else {
            let current = this.listHead;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.listHead !== null) {
            newNode.nextNode = this.listHead;
        }

        this.listHead = newNode;
    }

    size() {
        let current = this.listHead;
        let counter = 0;
    
        while (current !== null) {
            counter++;
            current = current.nextNode;
        }
    
        return counter;
    }
    

    head() {
        return this.listHead;
    }

    tail() {
        let current = this.listHead;
    
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
    
        return current;
    }

    at(index) {
        let current = this.listHead;
    
        for (let i = 0; i < index; i++) {
            if (current === null) {
                return "Index out of bounds";
            }
            current = current.nextNode;
        }
    
        return current;
    }

    pop() {
        let current = this.listHead;
        let previous = null;
    
        while (current.nextNode !== null) {
            previous = current;
            current = current.nextNode;
        }
    
        if (previous) {
            previous.nextNode = null;
        }
    }

    contains(value) {
        let current = this.listHead;
    
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
    
        return false;
    }

    find(value) {
        let current = this.listHead;
        let index = 0;
    
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
    
        return null;
    }

    toString() {
        let current = this.listHead;
        let stringList = "";
    
        while (current !== null) {
            stringList += `(${current.value}) -> `;
            current = current.nextNode;
        }
    
        return stringList + "null";
    }
}

class Node {
    constructor (value) {
        this.value = value || null;
        this.nextNode = null;
    }
}