import Slot from "./Slot.js";

const config = {
  inverted: false, //tru:барабаны вращаются сверху вниз; false: барабаны вращаются снизу вверх
  onSpinStart: (symbols) => {
    console.log("onSpinStart", symbols);
  },
  onSpinEnd: (symbols) => {
    console.log("onSpinEnd", symbols);
  },
};

const slot = new Slot(document.getElementById("slot"), config);
