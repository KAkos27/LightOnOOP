import Jatekter from "./Jatekter.js";

class Allapot {
  #lista = [false, false, false, false, false, false, false, false, false];
  constructor() {
    new Jatekter(this.#lista);
    $(window).on("katt", (event) => {
      const id = event.detail;
      this.#szomszedokValtoztatasa(id);
      new Jatekter(this.#lista);
    });
  }

  #szomszedokValtoztatasa = (id) => {
    this.#lista[id] = !this.#lista[id];
    if (id % 3 !== 0) {
      this.#lista[id - 1] = !this.#lista[id - 1];
    }
    if (id % 3 !== 2) {
      this.#lista[id + 1] = !this.#lista[id + 1];
    }
    if (id > 2) {
      this.#lista[id - 3] = !this.#lista[id - 3];
    }
    if (id < 6) {
      this.#lista[id + 3] = !this.#lista[id + 3];
    }
  };
}

export default Allapot;
