const cache = {};

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      this.img.src = require(`../assets/symbols/${name}.svg`);

      cache[name] = this.img;
    }
  }

  static preload() {
    Symbol.symbols.forEach((symbol) => new Symbol(symbol));
  }

  static get symbols() {
    return [
      "banana",
      "ananas",
      "box",
      "coconut",
      "letter",
      "peach",
      "mushroom",
    ];
  }

  static random() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }
}
