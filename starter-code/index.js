class SortedList {
  constructor() {
    this.items = [];
  }

  get length() {
    return this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0)
      throw new Error("EmptySortedList");
    return this.items.slice(-1);
  }

  min() {
    if (this.length === 0)
      throw new Error("EmptySortedList");
    return this.items.slice(0, 1);
  }

  average() {
    if (this.length === 0)
      throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, item) => acc + item);
    }
  }
}

module.exports = SortedList;