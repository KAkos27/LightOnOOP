class Lampa {
  #allapot;
  #id;
  #divElem;
  #szuloElem;
  constructor(allapot, id, szuloElem) {
    this.#allapot = allapot;
    this.#id = id;
    this.#szuloElem = szuloElem;
    this.megjelenit();
    this.#divElem = this.#szuloElem.children("div:last-child");
    this.#szinBeallit();
    this.#divElem.on("click", () => {
      this.#trigger("katt");
      console.log(this.#id);
    });
  }

  #szinBeallit = () => {
    if (this.#allapot) {
      this.#divElem.addClass("felkapcs");
    } else {
      this.#divElem.removeClass("felkapcs");
    }
  };

  #trigger = (esemenyNev) => {
    const e = new CustomEvent(esemenyNev, { detail: this.#id });
    window.dispatchEvent(e);
  };

  megjelenit = () => {
    const txt = `
        <div class='lampa'>
        
        </div>    
    `;
    this.#szuloElem.append(txt);
  };
}

export default Lampa;
