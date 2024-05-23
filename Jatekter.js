import Lampa from "./Lampa.js";

class Jatekter {
  #lista;
  #db = 0;
  constructor(lista) {
    this.#lista = lista;
    $(".jatekter").empty();
    this.#lista.forEach((element, i) => {
      new Lampa(element, i, $(".jatekter"));
      if (element) {
        this.#db++;
      }
    });
    $(".kiiras").html(`<p>${this.#db}</p>`);
  }
}

export default Jatekter;
