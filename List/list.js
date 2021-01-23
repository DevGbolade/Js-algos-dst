/**
 * A list is an ordered sequence of data. Each data item stored in a list is called an element.
 * 
 * Lists are especially useful if we don’t have to perform searches on the items in the list or 
 * put them into some type of sorted order
 */
 class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // initializes an empty array to store list elements this.clear = clear;
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    };
    length() {
        // return this.dataStore.length;
        return this.listSize;
    }

    find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) return i;
        }
        return -1;
    };

    remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    toString() {
        return this.dataStore;
    }
    insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }

        return false;
    };
    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

     front() {
        this.pos = 0;
    }

     end() {
        this.pos = this.listSize - 1;
    }

     prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

     next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

     currPos() {
        return this.pos;
    }

     moveTo(position) {
        this.pos = position;
    }

     getElement() {
        return this.dataStore[this.pos];
    }

}

module.exports = List;
// const names = new List;
// names.append("Clayton"); 
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan"); 
// names.append("Danny");

// names.front();
// console.log(names.getElement()); // displays Clayton

// names.next();
// console.log(names.getElement()); // displays Raymond

// names.next();
// names.next();
// names.prev();
// console.log(names.getElement()); // displays Cynthia



// console.log(list.toString());
// console.log(list.remove('moria'));
// console.log(list.listSize);